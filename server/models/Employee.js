const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'EmployeeRole', required: true },
  salary: { type: Number, required: true },
  joinDate: { type: Date, default: Date.now }
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
