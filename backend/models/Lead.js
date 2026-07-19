import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    source: {
      type: String,
      enum: [
        "Website",
        "LinkedIn",
        "Referral",
        "Instagram",
        "Facebook",
        "Other",
      ],
      default: "Website",
    },

    status: {
      type: String,
      enum: [
        "New",
        "Contacted",
        "Qualified",
        "Proposal",
        "Won",
        "Lost",
      ],
      default: "New",
    },

    dateAdded: {
      type: Date,
      default: Date.now,
    },
    userId: {
  type: Number,
  required: true,
},
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;