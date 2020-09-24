const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const somethingSchema = new Schema(
  {
    memo: { type: String, required: true },
    username: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    importance: { type: String, required: true },
    area: { type: String, required: true },
    salary: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);
const Something = mongoose.model("Something", somethingSchema);
module.exports = Something;
//or:
// module.exports = mongoose.model("Something", somethingSchema);
