const mongoose = require('mongoose');

const creatorProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  specialization: { type: String, required: true },
  skills: [{ type: String }],
  tools: [{ type: String }],
  contentTypes: [{ type: String }],
  aspectRatios: [{ type: String }],
  commercialUse: { type: String, default: 'Allowed' },
  experienceLevel: { type: String, default: 'Intermediate' },
  workflow: { type: String, default: '' },
  rating: { type: Number, default: 4.8 },
  projectsCompleted: { type: Number, default: 0 },
  verification: {
    identity: { type: Boolean, default: true },
    tools: { type: Boolean, default: true },
    workflow: { type: Boolean, default: true },
    portfolio: { type: Boolean, default: true }
  }
}, { timestamps: true });

module.exports = mongoose.model('CreatorProfile', creatorProfileSchema);
