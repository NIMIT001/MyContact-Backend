const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the email"],
    },
    phone: {
      type: String,
      required: [true, "Please add the contact phone numeber"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Connect", contactSchema);