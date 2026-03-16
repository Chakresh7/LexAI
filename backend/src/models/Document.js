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
