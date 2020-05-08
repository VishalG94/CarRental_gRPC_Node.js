const mongoose = require("mongoose");
const validate = require("mongoose-validator");
const dateforamt = require("dateformat");
let ObjectId = mongoose.Schema.Types.ObjectId;
var now = new Date();
var today = dateforamt(now, "yyyy-mm-dd HH:MM:ss");
mongoose.set("useCreateIndex", true);
const vehicleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  MAKE: { type: String, required: true },
  MODEL: { type: String, required: true },
  CATEGORY: { type: ObjectId, ref: "Category", required: true },
  YEAR: { type: Number, required: true },
  REGISTRATION_TAG: { type: String, required: isMyFieldRequired, unique: true },
  MILEAGE: { type: Number, required: true },
  LAST_SERVICE_DATE: { type: Number },
  VEHICLE_CONDITION: { type: String, required: true },
  RESERVATIONS: [{ type: ObjectId, ref: "Reservation" }],
  LOCATION: { type: ObjectId, ref: "Location" },
  // RENTAL_LOCATION_ID: { type: ObjectId, ref: "Location", require: true }
});

function isMyFieldRequired() {
  return typeof this.REGISTRATION_TAG === "string" ? false : true;
}

module.exports = mongoose.model("Vehicle", vehicleSchema);
