import mongoose from "mongoose";
import { lowercase, maxLength, minLength } from "zod";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 20,
    match: /^[a-zA-Z0-9_]+$/
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 20,
    match: /^[a-zA-Z0-9_]+$/
  },
  email: {
    type: String,
    required: true,
    trim: true,
    // unique: true, // Mongoose automatically creates an index for this
    lowercase: true,
    minLength: 2,
    match: [/@gmail\.com$/i, 'The email should finish with @gmail.com']
  },
  message: {
    type: String,
    required: true,
    trim: true,
    minLength: 10,
    maxLength: 500,
  },
  checkbox: {
    type: Boolean,
    default: false // Checkbox is unchecked as default
  },
  date: {
    type: Date,
    default: Date.now 
  }
});
// CREATE USER COLLECTION
const User = mongoose.model('User', userSchema);

export default User;