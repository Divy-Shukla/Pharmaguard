const express = require('express');
const cors = require('cors');
const analyzeRoutes = require('./routes/analyzeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => {
  res.json({ status: 'ok', service: 'PharmaGuard API' });
});

app.use('/analyze', analyzeRoutes);

app.use((err, req, res, _next) => {
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ error: 'File too large. Maximum allowed size is 5MB.' });
  }

  if (err.message?.includes('Only .vcf files are allowed')) {
    return res.status(400).json({ error: err.message });
  }

  console.error('Unhandled error:', err);
  return res.status(500).json({ error: 'Internal server error' });
});

app.use((_, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`PharmaGuard backend running on port ${PORT}`);
});
