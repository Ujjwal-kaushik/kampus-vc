const mongoose = require('mongoose');

const portfolioItemSchema = new mongoose.Schema({
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  contentType: { type: String, required: true },
  tools: [{ type: String }],
  models: [{ type: String }],
  skills: [{ type: String }],
  workflow: { type: String, default: '' },
  aspectRatio: { type: String, default: '16:9' },
  commercialUse: { type: String, default: 'Allowed' },
  duration: { type: String, default: '00:30' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PortfolioItem', portfolioItemSchema);
