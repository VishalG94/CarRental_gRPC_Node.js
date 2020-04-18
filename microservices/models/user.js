const mongoose = require('mongoose');
const dateforamt = require('dateformat');
let ObjectId = mongoose.Schema.Types.ObjectId;
var now = new Date()
var today = dateforamt(now, 'yyyy-mm-dd HH:MM:ss')
mongoose.set('useCreateIndex', true);
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    NAME: { type: String, required: true },
    DL_STATE: { type: String, required: true },
    DL_NUMBER: { type: Number, required: true, unique: true },
    EMAIL: { type: String, required: true, unique: true, dropDups: true },
    PHONE: { type: Number, required: true },
    PASSWORD: { type: String, required: true },
    ADDRESS: { type: ObjectId, ref: 'Address', required: true },
    MEMBERSHIP_START: { type: Date },
    RESERVATIONS: [{ type: ObjectId, ref: "Reservation" }],
    CARDS: [{ type: ObjectId, ref: 'Card' }],
    CREATED: { type: Date, default: today },
    MODIFIED: { type: Date, default: today },
    USER_TYPE: { type: String, required: true },
})


module.exports = mongoose.model('User', userSchema);