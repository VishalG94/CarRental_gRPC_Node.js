let Vehicle = require('../models/vehicles');
const mongoose = require('mongoose');

let VehicleService = {
    list: (_, callback) => {
        Vehicle.find({}, function (err, res) {
            if (err) {
                callback(err, null);
                console.log("error is", err);
            }
            else {
                callback(null, { vehicles: res });
                console.log(res);
            }
        }).populate("CATEGORY")
    },
    insert: (call, callback) => {
        console.log("inside microservice insert");
        let vehicleReq = call.request
        let id = mongoose.Types.ObjectId()
        console.log(JSON.stringify(vehicleReq) + " id: " + id);
        Vehicle.create({
            _id: id,
            MAKE: vehicleReq.MAKE,
            MODEL: vehicleReq.MODEL,
            CATEGORY: vehicleReq.CATEGORY,
            YEAR: vehicleReq.YEAR,
            REGISTRATION_TAG: vehicleReq.REGISTRATION_TAG,
            MILEAGE: vehicleReq.MILEAGE,
            LAST_SERVICE_DATE: vehicleReq.LAST_SERVICE_DATE,
            VEHICLE_CONDITION: vehicleReq.VEHICLE_CONDITION
            // RENTAL_LOCATION_ID: { type: ObjectId, ref: "Location", require: true }
        }, (err, res) => {
            if (err) {
                console.log("error is", err)
                callback(err, null)
            }
            else {
                console.log("Vehicle created: \n" + res)
                callback(null, res)
            }
        })
    },
    get: (call, callback) => {
        let id = call.request._id
        console.log("id value: " + id);
        Vehicle.findById(id, (err, res) => {
            if (err) {
                callback(err, null);
                console.log("error is", err);
            }
            else {
                callback(null, res);
                console.log(res);
            }
        }).populate("CATEGORY").populate("RESERVATIONS")
    },
    delete: (call, callback) => {
        let id = call.request._id
        Vehicle.findOneAndRemove({ _id: id }, (err, res) => {
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
        console.log("inside microservice insert");
        let vehicleReq = call.request
        let id = call.request._id
        console.log(JSON.stringify(vehicleReq) + " id: " + id);
        Vehicle.findByIdAndUpdate({ _id: id }, {
            $set: {
                MAKE: vehicleReq.MAKE,
                MODEL: vehicleReq.MODEL,
                CATEGORY: vehicleReq.CATEGORY,
                YEAR: vehicleReq.YEAR,
                REGISTRATION_TAG: vehicleReq.REGISTRATION_TAG,
                MILEAGE: vehicleReq.MILEAGE,
                LAST_SERVICE_DATE: vehicleReq.LAST_SERVICE_DATE,
                VEHICLE_CONDITION: vehicleReq.VEHICLE_CONDITION,
                // RENTAL_LOCATION_ID: { type: ObjectId, ref: "Location", require: true }
            }
        }, { new: true }).then((vehicle) => {
            console.log("Vehicle created: \n" + JSON.stringify(vehicle))
            callback(null, vehicle)
        }).catch(err => {
            console.log("error is", err)
            callback(err, null)
        })
    }
}



module.exports = VehicleService;