var express = require('express');
var bookingAuth = require('../booking');
const bookingRoutes = express.Router();

bookingRoutes.post('/addBooking', bookingAuth.saveBooking);
bookingRoutes.get('/getTickets', bookingAuth.getTicketsData);

module.exports = bookingRoutes;