const mongoose = require('mongoose');
const dateforamt = require('dateformat');
let ObjectId = mongoose.Schema.Types.ObjectId;
var now = new Date()
var today = dateforamt(now, 'yyyy-mm-dd HH:MM:ss')
mongoose.set('useCreateIndex', true);
const reservationSchema = mongoose.Schema({
    _id: ObjectId,
    USER: { type: ObjectId, ref: "User", required: true },
    VEHICLE: { type: ObjectId, ref: "Vehicle", required: true },
    LOCATION: { type: ObjectId, ref: "Location", required: true },
    STATUS: { type: String, required: true },
    RENTAL_DURATION: { type: Number, required: true },
    PICKUP_TIME: { type: Date, required: true },
    RETURN_TIME: { type: Date },
    PRICE: { type: Number, required: true },
    USER_COMMENTS: String
})


module.exports = mongoose.model('Reservation', reservationSchema);