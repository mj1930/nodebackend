var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Booking = mongoose.Schema({
   name: {
    type: String,
    default: ""
   },
   age: {
       type: String,
       default: ""
   },
   seat: {
    type: Number
   },
   reserved: {
    type: Boolean,
    default: false
   }
});

module.exports = mongoose.model('booking', Booking);