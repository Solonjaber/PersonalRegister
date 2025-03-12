import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  zipCode: { type: String, required: true },
  age: { type: Number, required: true },
  maritalStatus: { type: String, required: true },
  department: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cpf: { type: String, required: true, unique: true },
  rg: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema);