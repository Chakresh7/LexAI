const Groq = require('groq-sdk');
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

const LEGAL_SYSTEM_PROMPT = `You are LexAI, a highly knowledgeable AI legal assistant designed specifically for Indian citizens. You help people understand their legal rights, analyze documents, and navigate legal situations in simple, clear language.

RULES:
1. Always respond in clear, simple English (or Hindi if asked)
2. Always cite relevant Indian laws (IPC, CrPC, Consumer Protection Act, IT Act, Rent Control Act, etc.)
3. Always add a disclaimer that this is legal information, not legal advice
4. Be empathetic — users are often stressed about legal issues
5. Structure responses with clear headings when explaining complex matters
6. Always suggest when a user MUST consult a real lawyer
7. Keep responses helpful, accurate, and concise

EXPERTISE AREAS: Contract law, tenant rights, employment law, consumer rights, family law, criminal law basics, RTI, cyber law, property disputes, startup legal basics.`;

async function getLegalResponse(messages) {
  const completion = await client.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: LEGAL_SYSTEM_PROMPT },
      ...messages
    ],
    temperature: 0.3,
    max_tokens: 1500,
  });
  return completion.choices[0].message.content;
}

async function analyzeDocument(documentText, analysisType = 'general') {
  const prompts = {
    general: `Analyze this legal document and provide: 1) Plain English summary (3-4 sentences), 2) Key parties and their obligations, 3) Important dates/deadlines, 4) RED FLAGS or risky clauses highlighted, 5) Missing clauses that should be present, 6) Overall assessment (Safe/Needs Review/High Risk). Document:\n\n${documentText}`,
    contract: `Analyze this contract specifically for: hidden obligations, unfair terms, jurisdiction clauses, termination conditions, liability limitations, IP ownership, and payment terms. Flag anything that heavily favors one party. Document:\n\n${documentText}`,
    rental: `Analyze this rental/lease agreement for: deposit terms, maintenance responsibilities, termination notice, rent escalation clauses, prohibited activities, and tenant rights under Indian Rent Control Act. Document:\n\n${documentText}`,
    employment: `Analyze this employment document for: compensation details, non-compete clauses, IP assignment, termination conditions, notice period, benefits, and compliance with Indian labor laws. Document:\n\n${documentText}`
  };

  const completion = await client.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: LEGAL_SYSTEM_PROMPT },
      { role: 'user', content: prompts[analysisType] || prompts.general }
    ],
    temperature: 0.2,
    max_tokens: 2000,
  });
  return completion.choices[0].message.content;
}

async function generateTemplate(templateType, details) {
  const prompt = `Generate a professional ${templateType} document for Indian jurisdiction. Details: ${JSON.stringify(details)}. Format it properly with all legal clauses. Make it ready to use. Include placeholders in [BRACKETS] for any information that needs to be filled in.`;

  const completion = await client.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: LEGAL_SYSTEM_PROMPT },
      { role: 'user', content: prompt }
    ],
    temperature: 0.2,
    max_tokens: 2500,
  });
  return completion.choices[0].message.content;
}

module.exports = { getLegalResponse, analyzeDocument, generateTemplate };
