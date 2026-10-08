const mongoose = require('mongoose');

const briefSchema = new mongoose.Schema({
  brandId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  campaignName: { type: String, required: true },
  description: { type: String, required: true },
  contentType: { type: String, required: true },
  style: { type: String, required: true },
  platform: { type: String, required: true },
  aspectRatio: { type: String, required: true },
  duration: { type: String, default: '15s' },
  numberOfAssets: { type: Number, default: 1 },
  deadline: { type: String, default: '2 weeks' },
  budgetMin: { type: Number, default: 1000 },
  budgetMax: { type: Number, default: 5000 },
  requiredTools: [{ type: String }],
  targetAudience: { type: String, default: '' },
  commercialUse: { type: String, default: 'Paid advertising' },
  usageTerritory: { type: String, default: 'Global' },
  usageDuration: { type: String, default: '6 months' },
  specialRequirements: { type: String, default: '' },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Brief', briefSchema);
