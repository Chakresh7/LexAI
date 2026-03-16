const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

app.use(helmet());

const allowedOrigins = [
  'http://localhost:4200',
  'http://localhost:4201',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: '10mb' }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use('/api/', limiter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'LexAI Backend', timestamp: new Date().toISOString() });
});

app.use('/api/chat', require('./src/routes/chat.routes'));
app.use('/api/document', require('./src/routes/document.routes'));
app.use('/api/templates', require('./src/routes/template.routes'));

app.use(require('./src/middleware/errorHandler'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`LexAI server running on port ${PORT}`));
