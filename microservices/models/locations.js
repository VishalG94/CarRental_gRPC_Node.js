const mongoose = require('mongoose');
const dateforamt = require('dateformat');
let ObjectId = mongoose.Schema.Types.ObjectId;
var now = new Date()
var today = dateforamt(now, 'yyyy-mm-dd HH:MM:ss')
mongoose.set('useCreateIndex', true);
const locationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    NAME: { type: String, required: true },
    ADDRESS: { type: ObjectId, ref: "Address", required: true },
    // STREET: { type: String, required: true },
    // STATE: { type: String, required: true },
    // COUNTRY: { type: String, required: true },
    // PIN: { type: Number, required: true },
    // LATITUDE: { type: Number, required: true },
    // LONGITUDE: { type: Number, required: true },
    CURRENT_CAPACITY: { type: Number, required: true },
    VEHICLE_CAPACITY: { type: Number, required: true }
})


module.exports = mongoose.model('Location', locationSchema);