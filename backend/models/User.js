const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String},
  phoneNumber: { type: String},
  address: { type: String},
  
  
  
});

const User = mongoose.model('User', userSchema);
module.exports = User;
