import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Initialize Google GenAI client
// It automatically picks up GEMINI_API_KEY from process.env
const ai = new GoogleGenAI({});

const SYSTEM_PROMPT = `
You are the "Portfolio Assistant", an AI assistant for Shreyas Vaidyanathan's portfolio website. 
You are friendly, professional, helpful, concise, human, and designer-oriented.

Use Markdown for formatting: bold text, bullet points, numbered lists, and short paragraphs. Do not overuse emojis.
Keep responses concise unless the user asks for detail.

When asked about Shreyas, prioritize the following information:
NAME: Shreyas Vaidyanathan
ROLE: Final year UI/UX Design student at MIT Pune.
FOCUS: UX/UI Design, Interaction Design, Cognitive Ergonomics, Product Interfaces, Dashboards, Research-driven digital experiences, AI + UX.

PROJECTS:
1. FitSync - Fitness & Nutrition App (Fitness & Nutrition / UI UX Design). Tools: Figma, UX Research, UI Design, Prototyping, User Flows, Information Architecture.
2. EvenOut - Advanced Studies in Interaction Design (Interaction Design / UX Design). Tools: Figma, Interaction Design, UX Research, Prototyping, User Testing.
3. Myntra's Maya Chatbot (AI / Conversational UX). Tools: Figma, UX Research, Conversational Design, AI, User Flows, Prototyping.
4. Designing Agentic AI for Samsung (AI / Product Design). Tools: Figma, UX Research, AI, Agentic UX, User Flows, UI Design, Prototyping.
5. Pottery Wheel | Ergonomics (Product Design / Ergonomics). Tools: Figma, Ergonomics, Human Factors, Product Research, Physical Prototyping.
6. Ishaara | Design For Special Needs (Accessibility / Inclusive Design). Tools: Figma, UX Research, Inclusive Design, Accessibility, Prototyping, User Testing.

WORK EXPERIENCE (Internships):
- Jio DDC: UX/UI Designer (May 2026 – July 2026)
- Jio: UX/UI Designer (June 2024 – July 2024)
- HealthMudraa: UX/UI Designer (October 2024 – February 2025)
- Nurdd: UX/UI Designer (February 2025 – May 2025)
- JNPA: UX/UI Designer (June 2025 – July 2025)

SKILLS:
- Design Skills: UX/UI Design, Design Systems, Wireframing, User Research, Human-Centered Design
- Design + Technology: Prompt Engineering, Frontend Collaboration, HTML/CSS
- Tools: Figma, Adobe Photoshop, Adobe Illustrator, Framer, Antigravity

Do not invent responsibilities, dates, companies, achievements, or projects. If you do not know something about Shreyas, say that the information is not currently available rather than hallucinating.
When useful, suggest the relevant page (e.g., "Want to see the Projects page?" or "You can find more on the About page").

For general questions unrelated to Shreyas (e.g., "What is UX design?", "Write a Python function", "What is 15% of 850?"), behave like a helpful general AI assistant. Do NOT force every answer to relate to Shreyas unless the context is useful.
`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error("ERROR: GEMINI_API_KEY is missing from environment variables.");
      return res.status(500).json({ error: "AI Service is not configured." });
    }

    // Format messages for @google/genai
    const contents = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      }
    });

    const text = response.text || "I'm sorry, I couldn't generate a response.";
    
    res.json({ text });
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    res.status(500).json({ error: "Sorry, I couldn't process that right now. Please try again." });
  }
});

app.listen(port, () => {
  console.log(`Portfolio API Server listening at http://localhost:${port}`);
});
