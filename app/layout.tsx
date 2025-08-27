import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Auto-Transcribe on Swipe",
    "one_liner": "Swipe your phone across any text, and it auto-transcribes and organizes it instantly.",
    "why_now": "Increased remote work and need for efficient document handling drives demand.",
    "novel_mechanism": "Utilizes real-time image processing to allow spontaneous text extraction from various locations.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Vision"
    ],
    "edge_use_cases": [
      "Visual note-taking during meetings",
      "Quick text capture from printed materials in libraries"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Real-time text extraction",
        "Text organization via tags",
        "Sharing functionality"
      ],
      "tools": [
        "React Native",
        "Firebase",
        "TensorFlow.js"
      ],
      "data_bootstrap": [
        "publicly available OCR datasets",
        "user-generated text submissions"
      ],
      "risk": [
        "Compliance with privacy laws",
        "Accuracy of text extraction in varied lighting"
      ],
      "mitigation": [
        "Implement anonymization features",
        "Improve training with diverse datasets"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Live demo of swiping and capturing texts",
        "Show before/after use cases with chaos of notes vs. organized content"
      ],
      "channels": [
        "ProductHunt",
        "Instagram",
        "YouTube"
      ],
      "pricing": {
        "free": "Up to 100 captures a month",
        "pro": "$5/month for unlimited captures and advanced features",
        "business": "$20/month with team collaboration tools"
      }
    },
    "moat": [
      "Early adopter community",
      "Data collection for accuracy improvement"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "This application transcends traditional OCR by introducing spontaneous usage and organization, setting it apart from conventional tools."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}