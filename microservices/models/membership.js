const mongoose = require('mongoose');
const dateforamt = require('dateformat');
let ObjectId = mongoose.Schema.Types.ObjectId;
var now = new Date()
var today = dateforamt(now, 'yyyy-mm-dd HH:MM:ss')
mongoose.set('useCreateIndex', true);
const membershipSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,    
    MEMBERSHIP_FEE: { type: Number, required: true },
})

module.exports = mongoose.model('Membership', membershipSchema);