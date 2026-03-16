You are a 20+ year experienced Senior Full Stack Engineer and Product Designer who has shipped production applications at Apple, Stripe, and Linear. You have deep expertise in Angular, Express, MongoDB, and AI integration. You build systems that are architecturally sound, visually world-class, and production-ready.

Build me "LexAI" — a premium AI-powered Legal Assistant web application. This must look and feel like an Apple product met a YC-backed SaaS startup. Every pixel, every animation, every interaction must feel intentional, calm, and premium.

This is a 2-hour build. Be fast, be precise, be complete.

---

## 🎨 DESIGN SYSTEM — NON-NEGOTIABLE

### Color Palette (define ALL as CSS custom properties)
```scss
:root {
  /* Backgrounds */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F5F7FF;
  --bg-tertiary: #EEF2FF;
  --bg-dark: #0A0F1E;
  --bg-card: rgba(255, 255, 255, 0.85);

  /* Blue Scale */
  --blue-50: #EEF2FF;
  --blue-100: #E0E7FF;
  --blue-200: #C7D2FE;
  --blue-400: #818CF8;
  --blue-500: #6366F1;
  --blue-600: #4F46E5;
  --blue-700: #4338CA;
  --blue-900: #1E1B4B;

  /* Accent */
  --accent: #4F46E5;
  --accent-light: rgba(79, 70, 229, 0.08);
  --accent-glow: rgba(79, 70, 229, 0.25);

  /* Text */
  --text-primary: #0A0F1E;
  --text-secondary: #374151;
  --text-muted: #6B7280;
  --text-placeholder: #9CA3AF;

  /* Borders */
  --border: rgba(99, 102, 241, 0.12);
  --border-strong: rgba(99, 102, 241, 0.25);

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(79, 70, 229, 0.08), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 24px rgba(79, 70, 229, 0.12), 0 2px 8px rgba(0,0,0,0.06);
  --shadow-lg: 0 20px 60px rgba(79, 70, 229, 0.15), 0 8px 24px rgba(0,0,0,0.08);
  --shadow-glow: 0 0 40px rgba(79, 70, 229, 0.2);

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-blue: linear-gradient(135deg, #4F46E5 0%, #818CF8 100%);
  --gradient-surface: linear-gradient(180deg, #F5F7FF 0%, #FFFFFF 100%);
  --gradient-mesh: radial-gradient(ellipse at 20% 50%, rgba(79,70,229,0.08) 0%, transparent 60%),
                   radial-gradient(ellipse at 80% 20%, rgba(129,140,248,0.06) 0%, transparent 50%),
                   radial-gradient(ellipse at 50% 80%, rgba(99,102,241,0.05) 0%, transparent 50%);
}
```

### Typography (Google Fonts — load in index.html)
- Display/Headlines: **"Instrument Serif"** — for hero text, section headings, legal gravitas
- UI/Body: **"Outfit"** — clean, modern, readable at all sizes
- Mono/Labels: **"JetBrains Mono"** — for tags, badges, code, legal references

### Typography Scale
```scss
.display-xl { font-family: 'Instrument Serif'; font-size: clamp(48px, 6vw, 80px); line-height: 1.05; letter-spacing: -0.03em; }
.display-lg { font-family: 'Instrument Serif'; font-size: clamp(36px, 4vw, 56px); line-height: 1.1; }
.heading-xl { font-family: 'Outfit'; font-size: 32px; font-weight: 700; }
.heading-lg { font-family: 'Outfit'; font-size: 24px; font-weight: 600; }
.body-lg { font-family: 'Outfit'; font-size: 17px; line-height: 1.7; }
.body-md { font-family: 'Outfit'; font-size: 15px; line-height: 1.6; }
.label { font-family: 'JetBrains Mono'; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; }
```

---

## 🏗️ SYSTEM ARCHITECTURE
lexai/
├── frontend/                    # Angular 17+ App
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/
│   │   │   │   ├── services/
│   │   │   │   │   ├── api.service.ts
│   │   │   │   │   ├── chat.service.ts
│   │   │   │   │   └── document.service.ts
│   │   │   │   └── interceptors/
│   │   │   │       └── http.interceptor.ts
│   │   │   ├── shared/
│   │   │   │   ├── components/
│   │   │   │   │   ├── navbar/
│   │   │   │   │   ├── footer/
│   │   │   │   │   ├── chat-bubble/
│   │   │   │   │   ├── typing-indicator/
│   │   │   │   │   └── badge/
│   │   │   │   └── animations/
│   │   │   │       └── animations.ts
│   │   │   └── pages/
│   │   │       ├── landing/
│   │   │       ├── chat/
│   │   │       ├── document-analyzer/
│   │   │       └── templates/
│   │   └── styles/
│   │       ├── _variables.scss
│   │       ├── _typography.scss
│   │       ├── _components.scss
│   │       ├── _animations.scss
│   │       └── styles.scss
│
├── backend/                     # Express App
│   ├── src/
│   │   ├── routes/
│   │   │   ├── chat.routes.js
│   │   │   ├── document.routes.js
│   │   │   └── template.routes.js
│   │   ├── controllers/
│   │   │   ├── chat.controller.js
│   │   │   ├── document.controller.js
│   │   │   └── template.controller.js
│   │   ├── models/
│   │   │   ├── Conversation.js
│   │   │   ├── Document.js
│   │   │   └── Template.js
│   │   ├── services/
│   │   │   └── groq.service.js
│   │   ├── middleware/
│   │   │   ├── errorHandler.js
│   │   │   └── rateLimiter.js
│   │   └── config/
│   │       └── db.js
│   ├── server.js
│   └── .env
│
└── README.md

---

## ⚙️ BACKEND — EXPRESS + MONGODB + GROQ

### server.js
```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

app.use(helmet());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json({ limit: '10mb' }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use('/api/', limiter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/chat', require('./src/routes/chat.routes'));
app.use('/api/document', require('./src/routes/document.routes'));
app.use('/api/templates', require('./src/routes/template.routes'));

app.use(require('./src/middleware/errorHandler'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`LexAI server running on port ${PORT}`));
```

### .env
MONGO_URI=mongodb://localhost:27017/lexai
GROQ_API_KEY=your_groq_api_key_here
PORT=5000

### Install backend dependencies:
```bash
npm init -y
npm install express mongoose groq-sdk cors helmet express-rate-limit dotenv multer
```

### src/services/groq.service.js
```javascript
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
```

### MongoDB Models

**src/models/Conversation.js**
```javascript
const mongoose = require('mongoose');
const ConversationSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, index: true },
  title: { type: String, default: 'New Conversation' },
  messages: [{
    role: { type: String, enum: ['user', 'assistant'] },
    content: String,
    timestamp: { type: Date, default: Date.now }
  }],
  category: { type: String, default: 'general' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Conversation', ConversationSchema);
```

**src/models/Document.js**
```javascript
const mongoose = require('mongoose');
const DocumentSchema = new mongoose.Schema({
  sessionId: String,
  originalName: String,
  content: String,
  analysisType: String,
  analysis: String,
  riskLevel: { type: String, enum: ['safe', 'review', 'high-risk'], default: 'review' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Document', DocumentSchema);
```

### Routes + Controllers

**src/routes/chat.routes.js**
```javascript
const router = require('express').Router();
const { sendMessage, getHistory, clearHistory } = require('../controllers/chat.controller');
router.post('/message', sendMessage);
router.get('/history/:sessionId', getHistory);
router.delete('/history/:sessionId', clearHistory);
module.exports = router;
```

**src/controllers/chat.controller.js**
```javascript
const Conversation = require('../models/Conversation');
const { getLegalResponse } = require('../services/groq.service');

exports.sendMessage = async (req, res) => {
  try {
    const { message, sessionId, history = [] } = req.body;
    if (!message || !sessionId) return res.status(400).json({ error: 'Message and sessionId required' });

    const messages = [...history, { role: 'user', content: message }];
    const response = await getLegalResponse(messages);

    let conversation = await Conversation.findOne({ sessionId });
    if (!conversation) {
      conversation = new Conversation({ sessionId, title: message.slice(0, 50) });
    }
    conversation.messages.push({ role: 'user', content: message });
    conversation.messages.push({ role: 'assistant', content: response });
    conversation.updatedAt = new Date();
    await conversation.save();

    res.json({ response, sessionId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get response' });
  }
};

exports.getHistory = async (req, res) => {
  const conversation = await Conversation.findOne({ sessionId: req.params.sessionId });
  res.json(conversation || { messages: [] });
};

exports.clearHistory = async (req, res) => {
  await Conversation.deleteOne({ sessionId: req.params.sessionId });
  res.json({ success: true });
};
```

**src/routes/document.routes.js**
```javascript
const router = require('express').Router();
const { analyzeDoc, getAnalysis } = require('../controllers/document.controller');
router.post('/analyze', analyzeDoc);
router.get('/:id', getAnalysis);
module.exports = router;
```

**src/controllers/document.controller.js**
```javascript
const Document = require('../models/Document');
const { analyzeDocument } = require('../services/groq.service');

exports.analyzeDoc = async (req, res) => {
  try {
    const { content, analysisType = 'general', sessionId, filename = 'document' } = req.body;
    if (!content) return res.status(400).json({ error: 'Document content required' });

    const analysis = await analyzeDocument(content, analysisType);
    const riskLevel = analysis.toLowerCase().includes('high risk') ? 'high-risk'
      : analysis.toLowerCase().includes('needs review') ? 'review' : 'safe';

    const doc = new Document({ sessionId, originalName: filename, content, analysisType, analysis, riskLevel });
    await doc.save();
    res.json({ analysis, riskLevel, id: doc._id });
  } catch (error) {
    res.status(500).json({ error: 'Analysis failed' });
  }
};

exports.getAnalysis = async (req, res) => {
  const doc = await Document.findById(req.params.id);
  if (!doc) return res.status(404).json({ error: 'Not found' });
  res.json(doc);
};
```

**src/routes/template.routes.js**
```javascript
const router = require('express').Router();
const { generateDoc, getTemplates } = require('../controllers/template.controller');
router.post('/generate', generateDoc);
router.get('/list', getTemplates);
module.exports = router;
```

**src/controllers/template.controller.js**
```javascript
const { generateTemplate } = require('../services/groq.service');

const TEMPLATE_LIST = [
  { id: 'rent-agreement', name: 'Rent Agreement', icon: '🏠', description: 'Standard residential lease agreement', fields: ['landlordName', 'tenantName', 'propertyAddress', 'monthlyRent', 'depositAmount', 'duration'] },
  { id: 'nda', name: 'Non-Disclosure Agreement', icon: '🔒', description: 'Confidentiality agreement for business', fields: ['partyA', 'partyB', 'purpose', 'duration'] },
  { id: 'freelance-contract', name: 'Freelance Contract', icon: '💼', description: 'Service agreement for freelancers', fields: ['clientName', 'freelancerName', 'projectDescription', 'amount', 'deadline'] },
  { id: 'legal-notice', name: 'Legal Notice', icon: '⚠️', description: 'Formal legal notice to any party', fields: ['senderName', 'recipientName', 'subject', 'grievance', 'demand'] },
  { id: 'consumer-complaint', name: 'Consumer Complaint', icon: '📋', description: 'Complaint to consumer forum', fields: ['complainantName', 'oppositeParty', 'productService', 'issue', 'relief'] },
  { id: 'employment-offer', name: 'Employment Offer Letter', icon: '🤝', description: 'Job offer letter template', fields: ['companyName', 'candidateName', 'position', 'salary', 'joiningDate'] }
];

exports.getTemplates = (req, res) => res.json(TEMPLATE_LIST);

exports.generateDoc = async (req, res) => {
  try {
    const { templateType, details } = req.body;
    const content = await generateTemplate(templateType, details);
    res.json({ content });
  } catch (error) {
    res.status(500).json({ error: 'Generation failed' });
  }
};
```

---

## 🅰️ FRONTEND — ANGULAR 17+

### Setup Commands
```bash
ng new lexai-frontend --standalone --routing --style=scss
cd lexai-frontend
npm install uuid
```

### App Routing (app.routes.ts)
```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/landing/landing.component').then(m => m.LandingComponent) },
  { path: 'chat', loadComponent: () => import('./pages/chat/chat.component').then(m => m.ChatComponent) },
  { path: 'analyze', loadComponent: () => import('./pages/document-analyzer/document-analyzer.component').then(m => m.DocumentAnalyzerComponent) },
  { path: 'templates', loadComponent: () => import('./pages/templates/templates.component').then(m => m.TemplatesComponent) },
  { path: '**', redirectTo: '' }
];
```

### src/styles/_variables.scss
(paste the entire CSS variables block from the Design System section above)

### src/styles/_animations.scss
```scss
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-24px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px var(--accent-glow); }
  50% { box-shadow: 0 0 40px var(--accent-glow), 0 0 80px rgba(79,70,229,0.1); }
}

@keyframes typing-dot {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.animate-fade-up { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-fade-in { animation: fadeIn 0.5s ease forwards; }

.stagger-1 { animation-delay: 0.1s; opacity: 0; }
.stagger-2 { animation-delay: 0.2s; opacity: 0; }
.stagger-3 { animation-delay: 0.3s; opacity: 0; }
.stagger-4 { animation-delay: 0.4s; opacity: 0; }
.stagger-5 { animation-delay: 0.5s; opacity: 0; }
```

### src/styles/_components.scss
```scss
/* BUTTONS */
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; border-radius: 12px;
  background: var(--gradient-blue); color: white;
  font-family: 'Outfit'; font-size: 15px; font-weight: 600;
  border: none; cursor: pointer;
  box-shadow: 0 4px 20px var(--accent-glow);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 32px var(--accent-glow); filter: brightness(1.05); }
  &:active { transform: translateY(0); }
}

.btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 28px; border-radius: 12px;
  background: transparent; color: var(--accent);
  border: 1.5px solid var(--border-strong);
  font-family: 'Outfit'; font-size: 15px; font-weight: 600;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  &:hover { background: var(--accent-light); border-color: var(--accent); transform: translateY(-1px); }
}

.btn-ghost {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 10px 20px; border-radius: 8px;
  background: transparent; color: var(--text-muted);
  border: 1px solid var(--border);
  font-family: 'Outfit'; font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover { color: var(--accent); border-color: var(--border-strong); background: var(--accent-light); }
}

/* CARDS */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  &:hover { box-shadow: var(--shadow-md); border-color: var(--border-strong); transform: translateY(-2px); }
}

/* BADGE */
.badge {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 12px; border-radius: 100px;
  font-family: 'JetBrains Mono'; font-size: 11px;
  font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em;

  &.badge-blue { background: var(--blue-50); color: var(--blue-600); border: 1px solid var(--blue-100); }
  &.badge-green { background: #F0FDF4; color: #16A34A; border: 1px solid #BBF7D0; }
  &.badge-red { background: #FEF2F2; color: #DC2626; border: 1px solid #FECACA; }
  &.badge-yellow { background: #FFFBEB; color: #D97706; border: 1px solid #FDE68A; }
}

/* INPUT */
.input-field {
  width: 100%; padding: 14px 18px; border-radius: 12px;
  border: 1.5px solid var(--border);
  background: white; color: var(--text-primary);
  font-family: 'Outfit'; font-size: 15px;
  transition: all 0.2s ease; outline: none;
  &:focus { border-color: var(--accent); box-shadow: 0 0 0 4px var(--accent-light); }
  &::placeholder { color: var(--text-placeholder); }
}

/* GLASS SURFACE */
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}
```

---

## 📄 PAGE 1 — LANDING PAGE

**File: src/app/pages/landing/landing.component.ts**
```typescript
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {

  features = [
    { icon: '⚖️', title: 'Legal Chat Assistant', desc: 'Ask any legal question in plain language. Get answers backed by Indian law — IPC, CrPC, Consumer Protection Act, and more.', tag: 'AI Powered', route: '/chat' },
    { icon: '📄', title: 'Document Analyzer', desc: 'Paste or upload any legal document. Get red flags, plain English summary, and risk assessment in seconds.', tag: 'Smart Analysis', route: '/analyze' },
    { icon: '📝', title: 'Legal Templates', desc: 'Generate professional legal documents — rent agreements, NDAs, legal notices, freelance contracts, and more.', tag: '6+ Templates', route: '/templates' }
  ];

  stats = [
    { number: '50+', label: 'Legal Areas Covered' },
    { number: '6', label: 'Document Templates' },
    { number: '100%', label: 'Free to Use' },
    { number: '<2s', label: 'Response Time' }
  ];

  legalAreas = [
    'Tenant Rights', 'Employment Law', 'Consumer Rights', 'Contract Law',
    'Property Disputes', 'Cyber Law', 'Family Law', 'RTI', 'Startup Legal',
    'Criminal Law Basics', 'Labour Law', 'IP Rights'
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
```

**File: src/app/pages/landing/landing.component.html**
```html
<div class="landing">

  <!-- NAVBAR -->
  <nav class="navbar glass">
    <div class="nav-inner">
      <div class="nav-brand">
        <div class="brand-icon">⚖️</div>
        <span class="brand-name">LexAI</span>
        <span class="brand-badge badge badge-blue">Beta</span>
      </div>
      <div class="nav-links">
        <a routerLink="/chat">Chat</a>
        <a routerLink="/analyze">Analyze</a>
        <a routerLink="/templates">Templates</a>
      </div>
      <a routerLink="/chat" class="btn-primary nav-cta">
        Get Legal Help →
      </a>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-bg">
      <div class="mesh-orb orb-1"></div>
      <div class="mesh-orb orb-2"></div>
      <div class="mesh-orb orb-3"></div>
    </div>
    <div class="hero-content">
      <div class="hero-badge badge badge-blue animate-fade-up stagger-1">
        <span class="dot"></span>
        AI Legal Assistant for Every Indian
      </div>
      <h1 class="hero-headline animate-fade-up stagger-2">
        Legal Help,<br>
        <span class="headline-accent">Finally Simple.</span>
      </h1>
      <p class="hero-sub animate-fade-up stagger-3">
        Understand your rights. Analyze contracts. Generate legal documents.<br>
        Powered by AI. Built for India. Free forever.
      </p>
      <div class="hero-actions animate-fade-up stagger-4">
        <a routerLink="/chat" class="btn-primary btn-lg">
          Ask a Legal Question →
        </a>
        <a routerLink="/analyze" class="btn-secondary btn-lg">
          Analyze a Document
        </a>
      </div>
      <div class="hero-disclaimer animate-fade-up stagger-5">
        <span>🔒</span>
        Legal information only — not a substitute for a licensed lawyer
      </div>
    </div>

    <!-- FLOATING HERO CARD -->
    <div class="hero-card glass animate-fade-up stagger-3">
      <div class="card-header">
        <div class="avatar">⚖️</div>
        <div>
          <div class="card-name">LexAI</div>
          <div class="card-status"><span class="status-dot"></span> Online</div>
        </div>
      </div>
      <div class="chat-preview">
        <div class="msg user-msg">Can my landlord refuse to return my deposit?</div>
        <div class="msg ai-msg">Under the Transfer of Property Act, your landlord must return the security deposit within 30 days of vacating, minus legitimate deductions. If refused, you can file a complaint...</div>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="stats-section reveal">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item" *ngFor="let stat of stats">
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="features-section">
    <div class="container">
      <div class="section-label label reveal">What LexAI Does</div>
      <h2 class="section-heading reveal">Three Tools.<br>Every Legal Need.</h2>

      <div class="features-grid">
        <div class="feature-card card reveal" *ngFor="let f of features; let i = index"
             [style.animation-delay]="(i * 0.15) + 's'">
          <div class="feature-icon">{{ f.icon }}</div>
          <div class="feature-badge badge badge-blue">{{ f.tag }}</div>
          <h3 class="feature-title">{{ f.title }}</h3>
          <p class="feature-desc">{{ f.desc }}</p>
          <a [routerLink]="f.route" class="feature-link">
            Get Started →
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- LEGAL AREAS -->
  <section class="areas-section reveal">
    <div class="container">
      <div class="section-label label">Coverage</div>
      <h2 class="section-heading">Legal Areas We Cover</h2>
      <div class="areas-grid">
        <span class="area-pill" *ngFor="let area of legalAreas">{{ area }}</span>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <section class="cta-section reveal">
    <div class="container">
      <div class="cta-card">
        <div class="cta-orb"></div>
        <h2 class="cta-heading">Know Your Rights.<br>Starting Now.</h2>
        <p class="cta-sub">Free. Instant. Built for every Indian citizen.</p>
        <a routerLink="/chat" class="btn-primary btn-lg">Start for Free →</a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer-brand">
        <span>⚖️ LexAI</span>
        <span class="footer-disclaimer">Legal information only. Not legal advice. Consult a qualified lawyer for your specific case.</span>
      </div>
      <div class="footer-links">
        <a routerLink="/chat">Chat</a>
        <a routerLink="/analyze">Analyze</a>
        <a routerLink="/templates">Templates</a>
      </div>
    </div>
  </footer>

</div>
```

**File: src/app/pages/landing/landing.component.scss**
```scss
.landing { min-height: 100vh; background: var(--bg-primary); overflow-x: hidden; }

/* NAVBAR */
.navbar {
  position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
  width: calc(100% - 48px); max-width: 1200px;
  padding: 0 24px; height: 64px; border-radius: 16px;
  z-index: 1000; display: flex; align-items: center;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;

  .nav-inner {
    width: 100%; display: flex; align-items: center;
    justify-content: space-between; gap: 24px;
  }

  .nav-brand {
    display: flex; align-items: center; gap: 10px;
    .brand-icon { font-size: 22px; }
    .brand-name { font-family: 'Instrument Serif'; font-size: 20px; color: var(--text-primary); }
  }

  .nav-links {
    display: flex; gap: 32px;
    a { font-family: 'Outfit'; font-size: 14px; font-weight: 500;
        color: var(--text-muted); text-decoration: none;
        transition: color 0.2s;
        &:hover { color: var(--accent); } }
  }
  .nav-cta { padding: 10px 20px; font-size: 14px; border-radius: 10px; }
}

/* HERO */
.hero {
  min-height: 100vh; display: flex; align-items: center;
  justify-content: center; padding: 120px 24px 80px;
  position: relative; overflow: hidden;

  .hero-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }

  .mesh-orb {
    position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.5;
    animation: float 6s ease-in-out infinite;
    &.orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(79,70,229,0.15), transparent); top: -100px; left: -100px; }
    &.orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(129,140,248,0.1), transparent); top: 50%; right: -50px; animation-delay: 2s; }
    &.orb-3 { width: 300px; height: 300px; background: radial-gradient(circle, rgba(99,102,241,0.08), transparent); bottom: 0; left: 30%; animation-delay: 4s; }
  }

  .hero-content {
    position: relative; z-index: 1; text-align: center;
    max-width: 720px; display: flex; flex-direction: column;
    align-items: center; gap: 24px;
  }

  .hero-badge {
    .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); display: inline-block; animation: pulse-glow 2s infinite; }
  }

  .hero-headline {
    font-family: 'Instrument Serif'; font-size: clamp(48px, 6vw, 80px);
    line-height: 1.05; letter-spacing: -0.03em; color: var(--text-primary);
    margin: 0;
    .headline-accent {
      background: var(--gradient-blue); -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; background-clip: text;
      font-style: italic;
    }
  }

  .hero-sub { font-family: 'Outfit'; font-size: 18px; color: var(--text-muted); line-height: 1.7; margin: 0; }

  .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }

  .hero-disclaimer {
    font-family: 'JetBrains Mono'; font-size: 11px; color: var(--text-placeholder);
    display: flex; align-items: center; gap: 6px; letter-spacing: 0.05em;
  }
}

/* HERO CHAT CARD */
.hero-card {
  position: absolute; right: 5%; top: 50%; transform: translateY(-50%);
  width: 320px; padding: 20px; border-radius: 20px;
  box-shadow: var(--shadow-lg);

  .card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
    .avatar { font-size: 28px; }
    .card-name { font-family: 'Outfit'; font-weight: 600; font-size: 15px; color: var(--text-primary); }
    .card-status { font-family: 'Outfit'; font-size: 12px; color: #16A34A; display: flex; align-items: center; gap: 5px; }
    .status-dot { width: 6px; height: 6px; border-radius: 50%; background: #16A34A; animation: pulse-glow 2s infinite; }
  }

  .chat-preview { display: flex; flex-direction: column; gap: 10px; }

  .msg { padding: 10px 14px; border-radius: 12px; font-family: 'Outfit'; font-size: 13px; line-height: 1.5; max-width: 90%; }
  .user-msg { background: var(--blue-50); color: var(--blue-700); border: 1px solid var(--blue-100); align-self: flex-end; border-radius: 12px 12px 2px 12px; }
  .ai-msg { background: white; color: var(--text-secondary); border: 1px solid var(--border); align-self: flex-start; border-radius: 2px 12px 12px 12px; }
}

/* STATS */
.stats-section { padding: 60px 24px; background: var(--bg-secondary); }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; text-align: center; }
.stat-number { font-family: 'Instrument Serif'; font-size: 48px; color: var(--accent); }
.stat-label { font-family: 'Outfit'; font-size: 14px; color: var(--text-muted); margin-top: 4px; }

/* FEATURES */
.features-section { padding: 120px 24px; }
.container { max-width: 1200px; margin: 0 auto; }
.section-label { color: var(--accent); margin-bottom: 12px; display: block; }
.section-heading { font-family: 'Instrument Serif'; font-size: clamp(36px, 4vw, 52px); line-height: 1.1; color: var(--text-primary); margin: 0 0 60px; }

.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.feature-card {
  padding: 32px;
  .feature-icon { font-size: 36px; margin-bottom: 16px; }
  .feature-badge { margin-bottom: 16px; }
  .feature-title { font-family: 'Outfit'; font-size: 20px; font-weight: 700; color: var(--text-primary); margin: 0 0 12px; }
  .feature-desc { font-family: 'Outfit'; font-size: 15px; color: var(--text-muted); line-height: 1.7; margin: 0 0 24px; }
  .feature-link { font-family: 'Outfit'; font-size: 14px; font-weight: 600; color: var(--accent); text-decoration: none; transition: gap 0.2s;
    &:hover { text-decoration: underline; } }
}

/* AREAS */
.areas-section { padding: 80px 24px; background: var(--bg-secondary); text-align: center;
  .section-heading { margin-bottom: 40px; }
}
.areas-grid { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; max-width: 800px; margin: 0 auto; }
.area-pill {
  padding: 8px 20px; border-radius: 100px; border: 1px solid var(--border);
  background: white; font-family: 'Outfit'; font-size: 14px; font-weight: 500;
  color: var(--text-secondary); transition: all 0.2s;
  &:hover { background: var(--accent-light); border-color: var(--border-strong); color: var(--accent); }
}

/* CTA */
.cta-section { padding: 80px 24px; }
.cta-card {
  background: var(--gradient-blue); border-radius: 32px; padding: 80px 60px;
  text-align: center; position: relative; overflow: hidden;
  .cta-orb { position: absolute; width: 400px; height: 400px; border-radius: 50%;
    background: rgba(255,255,255,0.05); top: -100px; right: -100px; }
  .cta-heading { font-family: 'Instrument Serif'; font-size: clamp(36px, 4vw, 52px); color: white; margin: 0 0 16px; }
  .cta-sub { font-family: 'Outfit'; font-size: 18px; color: rgba(255,255,255,0.75); margin: 0 0 40px; }
  .btn-primary { background: white; color: var(--accent); box-shadow: none;
    &:hover { background: var(--blue-50); } }
}

/* FOOTER */
.footer { padding: 40px 24px; border-top: 1px solid var(--border);
  .container { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
  .footer-brand { display: flex; align-items: center; gap: 16px; font-family: 'Outfit'; font-weight: 700; color: var(--text-primary); }
  .footer-disclaimer { font-family: 'Outfit'; font-size: 12px; color: var(--text-placeholder); max-width: 400px; }
  .footer-links { display: flex; gap: 24px; a { font-family: 'Outfit'; font-size: 14px; color: var(--text-muted); text-decoration: none; &:hover { color: var(--accent); } } }
}

/* REVEAL ANIMATION */
.reveal { opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* RESPONSIVE */
@media (max-width: 768px) {
  .features-grid, .stats-grid { grid-template-columns: 1fr; }
  .hero-card { display: none; }
  .navbar .nav-links { display: none; }
}
```

---

## 📄 PAGE 2 — CHAT PAGE

**src/app/pages/chat/chat.component.ts**
```typescript
import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Message { role: 'user' | 'assistant'; content: string; timestamp: Date; }

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesEnd') messagesEnd!: ElementRef;
  @ViewChild('inputRef') inputRef!: ElementRef;

  messages: Message[] = [];
  inputText = '';
  isLoading = false;
  sessionId = '';

  suggestions = [
    'Can my landlord withhold my security deposit?',
    'What are my rights if I am wrongfully terminated?',
    'How do I file a consumer complaint?',
    'What is the notice period for resigning?',
    'Can police arrest without a warrant in India?',
    'How do I register an FIR online?'
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
    this.messages.push({
      role: 'assistant',
      content: '👋 Hello! I am LexAI, your AI legal assistant. I can help you understand your rights under Indian law, explain legal documents, and guide you through common legal situations.\n\nWhat legal question can I help you with today?',
      timestamp: new Date()
    });
  }

  ngAfterViewChecked() { this.scrollToBottom(); }

  scrollToBottom() {
    try { this.messagesEnd?.nativeElement.scrollIntoView({ behavior: 'smooth' }); } catch {}
  }

  async sendMessage() {
    if (!this.inputText.trim() || this.isLoading) return;
    const userMsg = this.inputText.trim();
    this.inputText = '';
    this.messages.push({ role: 'user', content: userMsg, timestamp: new Date() });
    this.isLoading = true;

    const history = this.messages.slice(0, -1).map(m => ({ role: m.role, content: m.content }));

    this.http.post<any>('http://localhost:5000/api/chat/message', {
      message: userMsg, sessionId: this.sessionId, history
    }).subscribe({
      next: (res) => {
        this.messages.push({ role: 'assistant', content: res.response, timestamp: new Date() });
        this.isLoading = false;
      },
      error: () => {
        this.messages.push({ role: 'assistant', content: 'Sorry, I encountered an error. Please try again.', timestamp: new Date() });
        this.isLoading = false;
      }
    });
  }

  useSuggestion(s: string) { this.inputText = s; this.inputRef?.nativeElement.focus(); }

  onKeyDown(e: KeyboardEvent) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.sendMessage(); } }

  formatMessage(content: string): string {
    return content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  }
}
```

**src/app/pages/chat/chat.component.html**
```html
<div class="chat-page">
  <!-- SIDEBAR -->
  <aside class="sidebar glass">
    <div class="sidebar-brand">
      <a routerLink="/" class="back-link">← Back</a>
      <div class="brand">⚖️ LexAI</div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-label label">Quick Questions</div>
      <div class="suggestions">
        <button class="suggestion-btn" *ngFor="let s of suggestions" (click)="useSuggestion(s)">
          {{ s }}
        </button>
      </div>
    </div>
    <div class="sidebar-nav">
      <a routerLink="/analyze" class="nav-item">📄 Document Analyzer</a>
      <a routerLink="/templates" class="nav-item">📝 Legal Templates</a>
    </div>
  </aside>

  <!-- CHAT MAIN -->
  <main class="chat-main">
    <div class="chat-header glass">
      <div class="header-info">
        <div class="ai-avatar">⚖️</div>
        <div>
          <div class="ai-name">LexAI Assistant</div>
          <div class="ai-status"><span class="status-dot"></span> Ready to help</div>
        </div>
      </div>
      <div class="header-badge badge badge-blue">Powered by LLaMA 3.3</div>
    </div>

    <!-- MESSAGES -->
    <div class="messages-area">
      <div class="message-wrap" *ngFor="let msg of messages" [class.user-wrap]="msg.role === 'user'">
        <div class="msg-avatar" *ngIf="msg.role === 'assistant'">⚖️</div>
        <div class="message" [class.user-msg]="msg.role === 'user'" [class.ai-msg]="msg.role === 'assistant'"
             [innerHTML]="formatMessage(msg.content)">
        </div>
        <div class="msg-avatar user-avatar" *ngIf="msg.role === 'user'">You</div>
      </div>

      <!-- TYPING INDICATOR -->
      <div class="message-wrap" *ngIf="isLoading">
        <div class="msg-avatar">⚖️</div>
        <div class="message ai-msg typing-msg">
          <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        </div>
      </div>
      <div #messagesEnd></div>
    </div>

    <!-- INPUT -->
    <div class="input-area glass">
      <div class="disclaimer-bar label">⚠️ Legal information only — not a substitute for professional legal advice</div>
      <div class="input-row">
        <textarea #inputRef [(ngModel)]="inputText" (keydown)="onKeyDown($event)"
          placeholder="Ask your legal question... (e.g. Can my employer deduct salary without notice?)"
          class="chat-input" rows="1"></textarea>
        <button class="send-btn btn-primary" (click)="sendMessage()" [disabled]="isLoading || !inputText.trim()">
          <span *ngIf="!isLoading">Send →</span>
          <span *ngIf="isLoading">...</span>
        </button>
      </div>
    </div>
  </main>
</div>
```

**src/app/pages/chat/chat.component.scss**
```scss
.chat-page {
  display: flex; height: 100vh; background: var(--bg-secondary); overflow: hidden;
}

/* SIDEBAR */
.sidebar {
  width: 300px; flex-shrink: 0; padding: 24px; display: flex; flex-direction: column;
  gap: 24px; border-right: 1px solid var(--border); overflow-y: auto;
  background: rgba(255,255,255,0.85);

  .sidebar-brand { display: flex; flex-direction: column; gap: 12px;
    .back-link { font-family: 'Outfit'; font-size: 13px; color: var(--text-muted); text-decoration: none;
      &:hover { color: var(--accent); } }
    .brand { font-family: 'Instrument Serif'; font-size: 22px; color: var(--text-primary); }
  }

  .sidebar-label { color: var(--accent); margin-bottom: 12px; display: block; }

  .suggestions { display: flex; flex-direction: column; gap: 8px; }
  .suggestion-btn {
    padding: 10px 14px; border-radius: 10px; border: 1px solid var(--border);
    background: white; text-align: left; cursor: pointer;
    font-family: 'Outfit'; font-size: 13px; color: var(--text-secondary); line-height: 1.4;
    transition: all 0.2s;
    &:hover { background: var(--accent-light); border-color: var(--border-strong); color: var(--accent); }
  }

  .sidebar-nav { margin-top: auto; display: flex; flex-direction: column; gap: 4px;
    .nav-item { padding: 12px 16px; border-radius: 10px; font-family: 'Outfit'; font-size: 14px;
      color: var(--text-muted); text-decoration: none; transition: all 0.2s;
      &:hover { background: var(--accent-light); color: var(--accent); }
    }
  }
}

/* CHAT MAIN */
.chat-main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }

.chat-header {
  padding: 16px 24px; border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
  background: rgba(255,255,255,0.9);
  .header-info { display: flex; align-items: center; gap: 12px; }
  .ai-avatar { font-size: 28px; }
  .ai-name { font-family: 'Outfit'; font-weight: 700; font-size: 16px; color: var(--text-primary); }
  .ai-status { font-family: 'Outfit'; font-size: 12px; color: #16A34A; display: flex; align-items: center; gap: 5px; }
  .status-dot { width: 6px; height: 6px; border-radius: 50%; background: #16A34A; }
}

/* MESSAGES */
.messages-area { flex: 1; overflow-y: auto; padding: 24px; display: flex; flex-direction: column; gap: 20px; }

.message-wrap {
  display: flex; align-items: flex-start; gap: 12px;
  &.user-wrap { flex-direction: row-reverse; }
}

.msg-avatar {
  width: 32px; height: 32px; border-radius: 10px; display: flex; align-items: center;
  justify-content: center; font-size: 16px; flex-shrink: 0;
  background: var(--blue-50); border: 1px solid var(--border);
}
.user-avatar { background: var(--gradient-blue); color: white; font-family: 'Outfit'; font-size: 11px; font-weight: 700; }

.message {
  max-width: 72%; padding: 14px 18px; border-radius: 16px;
  font-family: 'Outfit'; font-size: 15px; line-height: 1.7;
  animation: fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &.ai-msg { background: white; color: var(--text-secondary); border: 1px solid var(--border); border-radius: 4px 16px 16px 16px; box-shadow: var(--shadow-sm); }
  &.user-msg { background: var(--gradient-blue); color: white; border-radius: 16px 4px 16px 16px; }
}

.typing-msg { display: flex; align-items: center; gap: 6px; padding: 18px 20px;
  .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--blue-400); animation: typing-dot 1.4s infinite;
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
}

/* INPUT */
.input-area {
  padding: 16px 24px; border-top: 1px solid var(--border); background: rgba(255,255,255,0.95);
  .disclaimer-bar { color: var(--text-placeholder); text-align: center; margin-bottom: 12px; }
}
.input-row { display: flex; gap: 12px; align-items: flex-end; }
.chat-input {
  flex: 1; padding: 14px 18px; border-radius: 12px; border: 1.5px solid var(--border);
  font-family: 'Outfit'; font-size: 15px; color: var(--text-primary); resize: none;
  background: white; outline: none; transition: border-color 0.2s; max-height: 120px;
  &:focus { border-color: var(--accent); box-shadow: 0 0 0 4px var(--accent-light); }
}
.send-btn { flex-shrink: 0; padding: 14px 24px; border-radius: 12px; &:disabled { opacity: 0.5; cursor: not-allowed; } }

@media (max-width: 768px) { .sidebar { display: none; } }
```

---

## 📄 PAGE 3 — DOCUMENT ANALYZER

**src/app/pages/document-analyzer/document-analyzer.component.ts**
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-document-analyzer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './document-analyzer.component.html',
  styleUrls: ['./document-analyzer.component.scss']
})
export class DocumentAnalyzerComponent {
  documentText = '';
  analysisType = 'general';
  isLoading = false;
  analysis = '';
  riskLevel = '';

  analysisTypes = [
    { id: 'general', label: 'General Analysis', icon: '📋' },
    { id: 'contract', label: 'Contract Review', icon: '🤝' },
    { id: 'rental', label: 'Rental Agreement', icon: '🏠' },
    { id: 'employment', label: 'Employment Doc', icon: '💼' }
  ];

  constructor(private http: HttpClient) {}

  analyze() {
    if (!this.documentText.trim() || this.isLoading) return;
    this.isLoading = true;
    this.analysis = '';

    this.http.post<any>('http://localhost:5000/api/document/analyze', {
      content: this.documentText,
      analysisType: this.analysisType,
      sessionId: 'doc_' + Date.now()
    }).subscribe({
      next: (res) => {
        this.analysis = res.analysis;
        this.riskLevel = res.riskLevel;
        this.isLoading = false;
      },
      error: () => {
        this.analysis = 'Analysis failed. Please try again.';
        this.isLoading = false;
      }
    });
  }

  formatAnalysis(text: string): string {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  }

  getRiskBadgeClass() {
    return this.riskLevel === 'safe' ? 'badge-green' : this.riskLevel === 'high-risk' ? 'badge-red' : 'badge-yellow';
  }

  getRiskLabel() {
    return this.riskLevel === 'safe' ? '✅ Safe' : this.riskLevel === 'high-risk' ? '🚨 High Risk' : '⚠️ Needs Review';
  }
}
```

Build the **document-analyzer.component.html** and **scss** following the same premium card-based layout with:
- Left panel: textarea for pasting document + analysis type selector tabs + "Analyze Document" button
- Right panel: analysis result card with risk badge, formatted AI response
- Empty state: dashed border upload zone with "Paste or type your document here"
- Loading state: animated skeleton / shimmer effect

---

## 📄 PAGE 4 — TEMPLATES

Build **templates.component.ts/html/scss** with:
- Grid of 6 template cards (from the backend TEMPLATE_LIST)
- Click a card → slide-in modal/panel with a dynamic form (fields vary per template)
- Fill the form → "Generate Document" → calls `/api/templates/generate`
- Result shown in a readonly textarea with a "Copy to Clipboard" + "Print" button
- Card design: icon, name, description, a "Generate →" CTA
- Modal: glass overlay, clean form, accent-colored submit button

---

## 🔌 ANGULAR HTTP CONFIG

**src/app/app.config.ts**
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

---

## 📦 PACKAGE.JSON (Backend)
```json
{
  "name": "lexai-backend",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.18.0",
    "express-rate-limit": "^7.0.0",
    "groq-sdk": "^0.7.0",
    "helmet": "^7.0.0",
    "mongoose": "^8.0.0",
    "multer": "^1.4.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

---

## ✅ FINAL QUALITY CHECKLIST

Before finishing, verify every item:
- [ ] Google Fonts loaded: Instrument Serif, Outfit, JetBrains Mono
- [ ] All colors use CSS variables only — no hardcoded hex values in components
- [ ] Navbar is fixed + glassmorphism on scroll
- [ ] Hero mesh orbs animate (float keyframe)
- [ ] All sections have scroll reveal (.reveal + IntersectionObserver)
- [ ] Chat typing indicator animates (3 dots)
- [ ] Messages animate in (fadeUp)
- [ ] Textarea auto-resizes as user types
- [ ] Error handling on all API calls
- [ ] Mobile responsive — sidebar hidden, stacked layouts
- [ ] Disclaimer shown on chat and document pages
- [ ] All 4 routes working with lazy loading
- [ ] Backend .env has GROQ_API_KEY and MONGO_URI
- [ ] CORS allows localhost:4200
- [ ] No lorem ipsum anywhere — all content is real
- [ ] Lighthouse target: 90+ Performance, 100 SEO

---

## 🚀 STARTUP COMMANDS
```bash
# Terminal 1 — Backend
cd backend && npm install && npm run dev

# Terminal 2 — Frontend
cd frontend && npm install && ng serve

# Open: http://localhost:4200
```

The app is complete when all 4 pages render, chat returns AI responses, document analysis works, and templates generate correctly.