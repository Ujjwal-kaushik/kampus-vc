const mongoose = require('mongoose');

const invitationSchema = new mongoose.Schema({
  brandId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  briefId: { type: mongoose.Schema.Types.ObjectId, ref: 'Brief', required: true },
  message: { type: String, default: '' },
  budget: { type: Number, default: 0 },
  deadline: { type: String, default: '2 weeks' },
  status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invitation', invitationSchema);
