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
