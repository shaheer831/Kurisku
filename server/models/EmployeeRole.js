const mongoose = require('mongoose');

const employeeRoleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }]
});

const EmployeeRole = mongoose.model('EmployeeRole', employeeRoleSchema);
module.exports = EmployeeRole;
