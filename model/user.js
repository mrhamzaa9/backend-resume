const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    plan: { type: String, enum: ["free", "premium"], default: "free" },
    resumeLimit: { type: Number, default: 3 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);