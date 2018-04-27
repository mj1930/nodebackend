var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Booking = mongoose.Schema({
   name: {
    type: 'String'
   },
   age: {
       type: 'String'
   },
   seat: {
    type: 'Number'
   }
});

module.exports = mongoose.model('booking', Booking);