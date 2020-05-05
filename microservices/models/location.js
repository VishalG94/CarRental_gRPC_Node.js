const mongoose = require('mongoose');
const dateforamt = require('dateformat');
let ObjectId = mongoose.Schema.Types.ObjectId;
var now = new Date()
var today = dateforamt(now, 'yyyy-mm-dd HH:MM:ss')
mongoose.set('useCreateIndex', true);
const locationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    NAME: { type: String, required: true, index: { unique: true, dropDups: true } },
    ADDRESS: { type: ObjectId, ref: "Address", required: true },
    CURRENT_CAPACITY: { type: Number, required: true, default: 0 },
    VEHICLE_CAPACITY: { type: Number, required: true },
    VEHICLES: [{ type: ObjectId, ref: 'Vehicle' }]
})


module.exports = mongoose.model('Location', locationSchema);