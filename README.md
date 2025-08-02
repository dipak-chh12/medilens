# MediLens - Your Health, Understood

A fully responsive React-based single-page web application that allows users to upload medical reports (PDF or images), extract text using OCR, and analyze the content using Google's Gemini API.

## 🚀 Features

- **File Upload**: Support for PDF and image files (JPEG, PNG, GIF)
- **OCR Processing**: Automatic text extraction from images using Tesseract.js
- **AI Analysis**: Medical report interpretation using Gemini API
- **Responsive Design**: Mobile-friendly interface with modern UI/UX
- **Real-time Processing**: Loading states and error handling
- **Clean Architecture**: Modular React components with proper state management

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Tesseract.js** - OCR for image text extraction
- **Google Gemini API** - AI-powered medical analysis

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd medilens
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your Gemini API key to `.env`:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Getting a Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env` file

## 📁 Project Structure

```
medilens/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with features
│   │   ├── UploadBox.jsx     # File upload component
│   │   └── ResultDisplay.jsx # Analysis results display
│   ├── utils/
│   │   └── gemini.js         # Gemini API integration
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles and Tailwind
├── public/                   # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── README.md               # Project documentation
```

## 🎨 Design System

The application uses a custom design system defined in the Tailwind configuration:

- **Primary Color**: `#5E6CFF` (Blue)
- **Secondary Color**: `#E9EEFF` (Light Blue)
- **Accent Color**: `#FF6B6B` (Red)
- **Typography**: Inter font family
- **Layout**: 12-column grid system with 24px gutters

## 🔒 Security & Privacy

- All file processing happens client-side
- No medical data is stored on servers
- API calls are made directly to Gemini API
- User inputs are sanitized before processing

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Add environment variables in Vercel dashboard

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

## 📝 Usage

1. **Upload a Medical Report**: Click the upload area or drag and drop a PDF/image file
2. **Text Extraction**: The app automatically extracts text using OCR (for images) or PDF parsing
3. **AI Analysis**: The extracted text is sent to Gemini API for medical interpretation
4. **View Results**: Get structured analysis with explanations, normal ranges, and recommendations

## ⚠️ Important Notice

This application is for **informational purposes only** and should not replace professional medical advice. Always consult with qualified healthcare providers for medical decisions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@medilens.com or create an issue in the repository. 