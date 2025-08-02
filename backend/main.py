from fastapi import FastAPI, File, UploadFile, Body
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from typing import List, Dict, Any
import json
import os 
import fitz  # PyMuPDF 
import google.generativeai as genai 
from pathlib import Path 

load_dotenv() 
app = FastAPI() 

# Allow CORS for frontend dev 
app.add_middleware( 
    CORSMiddleware, 
    allow_origins=["*"], 
    allow_methods=["*"], 
    allow_headers=["*"], 
) 

# Configure Gemini 
genai.configure(api_key=os.getenv("GEMINI_API_KEY")) 
model = genai.GenerativeModel("gemini-1.5-pro-latest") 

# Helper: Convert PDF to image bytes 
def pdf_to_images(pdf_bytes: bytes) -> list: 
    images = [] 
    doc = fitz.open("pdf", pdf_bytes) 
    for page in doc: 
        pix = page.get_pixmap() 
        images.append(pix.tobytes("png")) 
    return images 

# Helper: Build structured prompt 
def get_prompt():
    return """Analyze the provided medical report (image or PDF) and return a structured JSON object. The JSON should follow this exact format, with no extra text or explanations before or after the JSON block:

```json
{
  "patientDetails": {
    "name": "<patient_name>",
    "age": "<patient_age>",
    "sex": "<patient_sex>"
  },
  "reportDetails": {
    "reportId": "<report_id>",
    "doctorName": "<doctor_name>",
    "hospitalName": "<hospital/lab_name>",
    "reportDate": "<report_date>",
    "collectedOn": "<collected_on_date>",
    "testType": "<test_type>"
  },
  "summary": "<summary_of_report>",
  "abnormalities": "<abnormalities_found>",
  "recommendedMedicines": "<recommended_medicines>",
  "advisory": {
    "dos": "<list_of_dos>",
    "donts": "<list_of_donts>"
  },
  "recommendedDiet": "<recommended_diets>",
  "disclaimer": "⚠️ These are suggested medicines. Consult a physician before use."
}
```

- Extract all information accurately from the report.
- If a value is not available, do not use "N/A"; instead, provide a sensible default or a generic recommendation.
- For `recommendedMedicines`: If a prescription is present, list those medicines. If not, or if the report shows a condition like high IGE levels, suggest appropriate and widely-used over-the-counter or general medicines (e.g., antihistamines, corticosteroids for high IGE). Always provide a recommendation.
- For `recommendedDiet`, provide actionable suggestions.
- For `advisory`, give clear Do's and Don'ts.
""" 

@app.post("/api/analyze")
async def analyze(files: List[UploadFile] = File(...)) -> Dict:
    image_parts = []
    for file in files:
        contents = await file.read()
        mime_type = file.content_type

        if mime_type == "application/pdf":
            image_bytes_list = pdf_to_images(contents)
            for img in image_bytes_list:
                image_parts.append({"mime_type": "image/png", "data": img})
        else:
            image_parts.append({"mime_type": mime_type, "data": contents}) 

    prompt = get_prompt()
    response = model.generate_content([prompt] + image_parts)

    try:
        # Clean the response to extract only the JSON part
        json_text = response.text.strip().replace('```json', '').replace('```', '')
        analysis_json = json.loads(json_text)
        return analysis_json
    except (json.JSONDecodeError, AttributeError) as e:
        print(f"Error parsing JSON from Gemini: {e}")
        print(f"Raw response was: {response.text}")
        # Fallback to sending raw text if JSON parsing fails
        return {
            "status": "error",
            "message": "Failed to parse AI response. Sending raw text.",
            "analysis": response.text
        }

@app.post("/symptoms_check")
async def symptoms_check(payload: Dict[str, Any] = Body(...)) -> Dict:
    symptoms = payload.get('symptoms')
    report_analysis = payload.get('result')

    if not symptoms or not report_analysis:
        return {"error": "Symptoms and report analysis are required."}

    prompt = f"""A patient has provided their medical report analysis and is now describing their symptoms.

    **Medical Report Analysis:**
    ```json
    {json.dumps(report_analysis, indent=2)}
    ```

    **Patient's Symptoms:**
    "{symptoms}"

    Based on both the report and the symptoms, provide a helpful and reassuring response. Structure your answer with clear paragraphs or bullet points to make it easy to read. Advise them on potential connections between their symptoms and the report findings, and suggest next steps. Do not give a diagnosis. Always recommend consulting a doctor for a definitive diagnosis and treatment plan.
    """

    response = model.generate_content(prompt)

    return {"feedback": response.text}