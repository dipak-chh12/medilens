import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
    throw new Error("VITE_GEMINI_API_KEY is not defined in the environment variables.");
}

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

export async function analyzeMedicalReport(prompt) {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}