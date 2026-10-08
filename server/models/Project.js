const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  brandId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  briefId: { type: mongoose.Schema.Types.ObjectId, ref: 'Brief', required: true },
  campaignName: { type: String, default: 'Project' },
  status: { type: String, default: 'Brief' },
  progress: {
    type: String,
    enum: ['Brief', 'Creator Selected', 'In Production', 'Review', 'Approved', 'Delivered'],
    default: 'Brief'
  },
  deadline: { type: String, default: '2 weeks' },
  budget: { type: Number, default: 0 },
  deliverables: [{ type: String }],
  overview: { type: String, default: '' },
  activity: [
    {
      text: { type: String },
      date: { type: Date, default: Date.now }
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
