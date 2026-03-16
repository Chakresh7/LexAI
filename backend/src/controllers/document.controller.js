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
