const mongoose = require('mongoose');
const dateforamt = require('dateformat');
let ObjectId = mongoose.Schema.Types.ObjectId;
var now = new Date()
var today = dateforamt(now, 'yyyy-mm-dd HH:MM:ss')
mongoose.set('useCreateIndex', true);
const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    CATEGORY_NAME: { type: String, required: true },
    HOURLY_FEE: { type: Number, required: true },
    LATE_FEE: { type: Number, required: true }
})


module.exports = mongoose.model('Category', categorySchema);