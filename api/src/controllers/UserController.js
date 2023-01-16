import mongoose from "mongoose";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Persons = new Schema({
  name: {
      type: String
  },
  numberPhone: {
      type: Number
  }
}, {
  collection: 'persons'
});

module.exports = mongoose.model('Persons', Persons);

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {},
    is_active: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    gender: {
      type: "Male" | "Female" | "Custom" | "Prefer not to say",
    },
    bio: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
export default mongoose.model("User", UserSchema);
