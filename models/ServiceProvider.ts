import mongoose from 'mongoose';

const ServiceProviderSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  associatedCompany: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  cnpj: { type: String, required: true, unique: true },
  cpf: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  requestedBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.ServiceProvider || mongoose.model('ServiceProvider', ServiceProviderSchema);