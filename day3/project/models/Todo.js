const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending"
    },

    category: {
      type: String,
      enum: ["Work", "Personal", "Study"]
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

todoSchema.index({ category: 1 });

module.exports = mongoose.model("Todo", todoSchema);