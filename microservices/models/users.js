const mongoose = require('mongoose');
const dateforamt = require('dateformat');
let ObjectId = mongoose.Schema.Types.ObjectId;
var now = new Date()
var today = dateforamt(now, 'yyyy-mm-dd HH:MM:ss')
mongoose.set('useCreateIndex', true);
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    NAME: { type: String, required: true },
    DL_STATE: { type: String, required: true, unique: true, },
    DL_NUMBER: { type: Number, required: true, unique: true, },
    EMAIL: { type: String, required: true, unique: true, dropDups: true },
    PHONE: Number,
    PASSWORD: { type: String, required: true },
    ADDRESS: { type: ObjectId, required: 'Address' },
    MEMBERSHIP_START: { type: Date },
    RESERVATION_ID: [{ type: ObjectId, ref: "Reservation" }],
    CARD: { type: ObjectId, required: 'Card' },
    CREATED: { type: Date, default: today },
    MODIFIED: { type: Date, default: today }
})


module.exports = mongoose.model('User', userSchema);