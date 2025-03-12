import mongoose from 'mongoose';

const VisitorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  associatedCompany: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema);