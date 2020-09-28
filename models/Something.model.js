const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const somethingSchema = new Schema(
  {
    uno: { type: String, required: true },
    dos: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    tres: { type: String, required: true },
    cuatro: { type: String, required: true },
    cinco: { type: Number, required: true },
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
