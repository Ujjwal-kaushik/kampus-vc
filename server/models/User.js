const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['creator', 'brand'], required: true },
  avatar: { type: String, default: '' },
  location: { type: String, default: '' },
  bio: { type: String, default: '' },
  companyName: { type: String, default: '' },
  companyType: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
