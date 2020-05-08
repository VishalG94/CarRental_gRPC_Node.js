let Reservation = require('../models/reservation');
let Vehicle = require('../models/vehicles');
let User = require('../models/user')

const mongoose = require('mongoose');

let ReservationService = {
    list: (_, callback) => {
        Reservation.find({}, function (err, res) {
            if (err) {
                callback(err, null);
                console.log("error is", err);
            }
            else {
                callback(null, { reservations: res });
                console.log(res);
            }
        }).populate("USER")
            .populate("VEHICLE")
            .populate("LOCATION")
    },
    insert: (call, callback) => {
        console.log("inside microservice reservation insert" + JSON.stringify(call.request));
        let reservationReq = call.request
        let id = mongoose.Types.ObjectId()
        console.log(JSON.stringify(reservationReq) + " id: " + id);
        Reservation.create({
            _id: id,
            USER: reservationReq.USER,
            VEHICLE: reservationReq.VEHICLE,
            LOCATION: reservationReq.LOCATION,
            STATUS: reservationReq.STATUS,
            RENTAL_DURATION: reservationReq.RENTAL_DURATION,
            PICKUP_TIME: reservationReq.PICKUP_TIME,
            RETURN_TIME: reservationReq.RETURN_TIME,
            PRICE: reservationReq.PRICE,
            USER_COMMENTS: reservationReq.USER_COMMENTS
        }, (err, res) => {
            if (err) {
                console.log("error is", err)
                callback(err, null)
            }
            else {
                console.log("Reservation created: \n" + res)
                Vehicle.findOneAndUpdate({ _id: reservationReq.VEHICLE }, {
                    $push: {
                        RESERVATIONS: res
                    }
                }, { new: true }).then((vehicle) => {
                    console.log("Reservation Added to vehicle: \n" + JSON.stringify(vehicle))
                    callback(null, vehicle)
                }).catch(err => {
                    console.log("error is", err)
                    callback(err, null)
                })

                User.findOneAndUpdate({ _id: reservationReq.USER }, {
                    $push: {
                        RESERVATIONS: res
                    }
                }, { new: true }).then((vehicle) => {
                    console.log("Reservation Added to user: \n" + JSON.stringify(vehicle))
                    callback(null, vehicle)
                }).catch(err => {
                    console.log("error is", err)
                    callback(err, null)
                })

            }
        })
    },
    get: (call, callback) => {
        let id = call.request._id
        console.log("id value: " + id);
        Reservation.findById(id, (err, res) => {
            if (err) {
                callback(err, null);
                console.log("error is", err);
            }
            else {
                callback(null, res);
                console.log(res);
            }
        }).populate("USER")
            .populate("VEHICLE")
            .populate("LOCATION")
    },
    delete: (call, callback) => {
        let id = call.request._id
        Reservation.findOneAndRemove({ _id: id }, (err, res) => {
            console.log("res: " + res);
            if (err) {
                callback(err, null);
                console.log("Error occured while removing the record");
            }
            else {
                callback(null, res);
                console.log(res);
            }
        })
    },
    update: (call, callback) => {
        console.log("inside microservice reservation update");
        let reservationReq = call.request
        let id = call.request._id
        console.log(JSON.stringify(reservationReq) + " id: " + id);
        Reservation.findByIdAndUpdate({ _id: id }, {
            $set: {
                // USER: reservationReq.USER,
                // VEHICLE: reservationReq.VEHICLE,
                // LOCATION: reservationReq.LOCATION,
                // RENTAL_DURATION: reservationReq.RENTAL_DURATION,
                // PICKUP_TIME: reservationReq.PICKUP_TIME,
                // RETURN_TIME: reservationReq.RETURN_TIME,
                STATUS: reservationReq.STATUS,
                // PRICE: reservationReq.PRICE,
                USER_COMMENTS: reservationReq.USER_COMMENTS
            }
        }, { new: true }).then((reservation) => {
            Vehicle.findOneAndUpdate({ _id: reservationReq.VEHICLE_ID },
                {
                    $pull: {
                        RESERVATIONS: id
                    }
                }
            )
            User.findOneAndUpdate({ _id: reservationReq.USER_ID },
                {
                    $pull: {
                        RESERVATIONS: id
                    }
                }
            ).then((res) => {
                console.log("user res updated")
            })
            console.log("Reservation Updated: \n" + JSON.stringify(reservation))
            callback(null, reservation)
        }).catch(err => {
            console.log("error is", err)
            callback(err, null)
        })
    },
    // getByUserId: (call, callback) => {
    //     let id = call.request._id
    //     console.log("id value: " + id);
    //     Reservation.find({ USER: { _id: id } }, (err, res) => {
    //         if (err) {
    //             callback(err, null);
    //             console.log("error is", err);
    //         }
    //         else {
    //             callback(null, res);
    //             console.log(res);
    //         }
    //     }).populate("USER")
    //         .populate("VEHICLE")
    //         .populate("LOCATION")
    // }
}



module.exports = ReservationService;