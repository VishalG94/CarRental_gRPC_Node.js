const mongoose = require('mongoose');
const dateforamt = require('dateformat');
let ObjectId = mongoose.Schema.Types.ObjectId;
var now = new Date()
var today = dateforamt(now, 'yyyy-mm-dd HH:MM:ss')
mongoose.set('useCreateIndex', true);
const addressSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    STREET: { type: String, required: true },
    STATE: { type: String, required: true },
    COUNTRY: { type: String, required: true },
    PIN: { type: Number, required: true },
    LATITUDE: { type: String, required: false },
    LONGITUDE: { type: String, required: false }
})

module.exports = mongoose.model('Address', addressSchema);