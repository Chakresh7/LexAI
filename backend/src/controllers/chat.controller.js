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
