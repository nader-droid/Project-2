import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

// Initialize the client only when needed
const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

const SYSTEM_INSTRUCTION = `
You are "Sarah", a top-tier Real Estate Inside Sales Agent (ISA) AI. 
You are currently part of a demo being pitched to a Real Estate Agent.
Your goal is to roleplay with the user (who is acting as a potential home buyer/seller) to demonstrate how effectively you can qualify leads.

Your qualification criteria:
1. Are they looking to buy or sell?
2. What is their timeframe?
3. What is their budget range?
4. Are they already working with an agent?

Guidelines:
- Keep responses short and conversational (like an SMS text).
- Be friendly, professional, and slightly enthusiastic.
- If you qualify them successfully, ask to schedule a call with the "Senior Agent".
- Do not break character. You are the AI assistant included in the Growth Infrastructure package.
`;

export const sendLeadMessage = async (history: { role: 'user' | 'model'; text: string }[], newMessage: string) => {
  const client = getClient();
  
  // Format history for the chat
  // Note: We reconstruct the chat history each time for this simple stateless service wrapper
  const chat = client.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    }
  });

  // Replay history to set state (excluding the very last new message which we send separately)
  // In a real production app, we would persist the chat session object.
  for (const msg of history) {
    if (msg.role === 'user') {
        await chat.sendMessage({ message: msg.text });
    } else {
        // We can't easily force the model's history in the SDK without a more complex history construction
        // For this demo, we will just send the full context as a prompt if needed, 
        // OR simply trust the system prompt + single turn if history is short.
        // BETTER APPROACH for this specific SDK:
        // We will just start a new chat and send the previous context as part of the first message if needed,
        // or just rely on the user sending a sequence.
        // HOWEVER, the standard way is to keep the `chat` object alive.
        
        // Since we don't have a persistent store in this service file for the chat object 
        // across React re-renders unless we put it in a context or ref, 
        // we will use a simplified approach: just send the latest message with the system instruction.
        // The model is smart enough for a short demo.
    }
  }
  
  // For a robust React implementation, we usually keep the chat instance in a useRef in the component.
  // But to stick to the stateless service pattern requested:
  
  // We will perform a single turn generation that includes previous context textually if this were complex,
  // but let's actually modify this function to take a Chat instance if possible, or just return the text
  // assuming the component holds the state.
  
  // SIMPLIFIED STRATEGY for this Demo:
  // We will pass the full transcript as a prompt to a fresh generateContent call to ensure history is respected
  // without managing stateful chat objects in a service file.
  
  const transcript = history.map(h => `${h.role === 'user' ? 'Lead' : 'Sarah (AI)'}: ${h.text}`).join('\n');
  const finalPrompt = `${transcript}\nLead: ${newMessage}\nSarah (AI):`;

  const response = await client.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: finalPrompt,
    config: {
        systemInstruction: SYSTEM_INSTRUCTION,
    }
  });

  return response.text;
};
