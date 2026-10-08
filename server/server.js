require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const creatorRoutes = require('./routes/creatorRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const briefRoutes = require('./routes/briefRoutes');
const invitationRoutes = require('./routes/invitationRoutes');
const projectRoutes = require('./routes/projectRoutes');
const aiRoutes = require('./routes/aiRoutes');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Kampus.VC API running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/creators', creatorRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/briefs', briefRoutes);
app.use('/api/invitations', invitationRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/ai', aiRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/kampus_vc')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
    console.log('Please ensure MongoDB is running locally on port 27017');
    process.exit(1);
  });
