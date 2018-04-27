const express = require('express');
const async = require('async');
const Booking = require('./models/booking.js');

module.exports.saveBooking = function(req, res) {
    let outputJson = {};
    let seats = req.body.nOfPassengers[0];
    booking = req.body.body.booking;
    async.eachSeries(booking, (bookingVal, callback)=> {
        Booking.find().count((err, response) => {
            if (!err) {
                bookingVal.seat = response + 1;
                if (response > 77 && seats > 3) {
                    callback("can't book seats", null);
                }
                else
                {
                    Booking(bookingVal).save(
                        bookingVal
                    , (err, resp) => {
                        if (err) {
                            callback(err, null);
                        }
                        else {
                            callback(null, resp);
                        }
                    })
                }
            }
        }); 
        }, (err, resp) => {
            if (err) {
                outputJson = {
                    status: "401",
                    msg: "An error occured while booking"
                }
                res.json(outputJson);
            }
            else {
                outputJson = {
                    status: "200",
                    msg: "Booking successful",
                    data: resp
                }
                res.json(outputJson);
            }
    })
} 

module.exports.getTicketsData = function(req, res) {
    let outputJson = {};
    Booking.find({}).sort({"seat": -1}).exec((err, resp) => {
        if (err) {
            outputJson = {
                status: '202',
                msg: "Couldn't find booking history"
            }
            res.json(outputJson);
        }
        else if (resp.length == 0) {
            outputJson = {
                status: '203',
                msg: "Couldn't find booking history"
            }
            res.json(outputJson);
        }
        else {
            outputJson = {
                status: '200',
                msg: "data for booking history found",
                data: resp
            }
            res.json(outputJson);
        }
    })
}