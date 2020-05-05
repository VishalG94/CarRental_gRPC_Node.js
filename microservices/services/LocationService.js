let Location = require('../models/location');
let Address = require('../models/address');
let Vehicle = require('../models/vehicles');

const mongoose = require('mongoose');

let LocationService = {
    list: (_, callback) => {
        Location.find({}, function (err, res) {
            if (err) {
                callback(err, null);
                console.log("error is", err);
            }
            else {
                callback(null, { locations: res });
                console.log(res);
            }
        }).populate('ADDRESS')
    },
    insert: (call, callback) => {
        console.log("inside microservice insert");
        let locationReq = call.request;
        let id = mongoose.Types.ObjectId();
        let addr_id = mongoose.Types.ObjectId();
        console.log(JSON.stringify(locationReq.ADDRESS) + " id: " + id);
        Address.create({
            _id: addr_id,
            STREET: locationReq.ADDRESS.STREET,
            STATE: locationReq.ADDRESS.STATE,
            COUNTRY: locationReq.ADDRESS.COUNTRY,
            PIN: locationReq.ADDRESS.PIN,
            LATITUDE: locationReq.ADDRESS.LATITUDE,
            LONGITUDE: locationReq.ADDRESS.LONGITUDE
        }, (err, res) => {
            if (err) {
                console.log("error is", err)
                callback(err, null)
            }
            else {
                console.log("Address created: \n" + res)
                let addressId = res._id;
                Location.create({
                    _id: id,
                    NAME: locationReq.NAME,
                    ADDRESS: addressId,
                    CURRENT_CAPACITY: locationReq.CURRENT_CAPACITY,
                    VEHICLE_CAPACITY: locationReq.VEHICLE_CAPACITY
                }, (error, response) => {
                    if (error) {
                        console.log("error is", error)
                        callback(error, null)
                    }
                    else {
                        console.log("Location created: \n" + response)
                        /*  Returning the location with populating the address. 
                            can also directly return response if only address objectId needs to be returned. */
                        Location.findById(response._id, (erro, resp) => {
                            if (erro) {
                                callback(erro, null);
                                console.log("error record not created", err);
                            }
                            else {
                                callback(null, resp);
                                console.log(resp);
                            }
                        }).populate("ADDRESS")
                    }
                })
            }
        })

    },
    // get: (call, callback) => {
    //     let id = call.request._id
    //     console.log("id value: " + id);
    //     // Location.findById(id);



    //     Location.findById(id, (err, res) => {
    //         if (err) {
    //             callback(err, null);
    //             console.log("error is", err);
    //         }
    //         else {

    //             callback(null, res);
    //             console.log(res);
    //         }
    //     }).populate('ADDRESS').populate("VEHICLES");
    // },

    get: (call, callback) => {
        let id = call.request._id
        console.log("id value: " + id);
        Location.findById(id, (err, res) => {
            if (err) {
                callback(err, null);
                console.log("error is", err);
            }
            else {
                callback(null, res);
                console.log(res);
            }
        }).populate("ADDRESS")
            .populate("VEHICLES")

    },
    delete: (call, callback) => {
        console.log(call.request)
        let id = call.request._id
        Location.findOneAndRemove({ _id: id }, (err, res) => {
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
        let locationReq = call.request
        let id = call.request._id
        console.log(JSON.stringify(locationReq) + " id: " + id);
        Location.findByIdAndUpdate({ _id: id }, {
            $set: {
                NAME: locationReq.NAME,
                //Address ADDRESS = 3;
                CURRENT_CAPACITY: locationReq.CURRENT_CAPACITY,
                VEHICLE_CAPACITY: locationReq.VEHICLE_CAPACITY
            }
        }, { new: true }).then((location) => {
            console.log("Location created: \n" + JSON.stringify(location))
            callback(null, location)
        }).catch(err => {
            console.log("error is", err)
            callback(err, null)
        })
    },
    addVehicle: (call, callback) => {
        console.log("inside microservice add vehicle" + JSON.stringify(call.request));
        let vehicleId
        Vehicle.findOne({ _id: call.request.VEHICLE }).then((foundVehicle) => {
            vehicleId = foundVehicle;
            console.log(JSON.stringify(foundVehicle));
        }).then(() => {
            // console.log("found vehicle " + JSON.stringify(vehicleId));
            let id = call.request._id
            console.log(Location + " id: " + id);
            Location.findOneAndUpdate({ _id: id }, {
                $push: {

                    VEHICLES: vehicleId,
                   
                },
                $inc: {
                    CURRENT_CAPACITY: 1,
                  }

            }, { new: true }).then((location) => {
                console.log("Vehicle Added to Location: \n" + JSON.stringify(location))
                callback(null, location)
            }).catch(err => {
                console.log("error is", err)
                callback(err, null)
            })

        })
    },

    
    
    
    reassignVehicle: (call, callback) => {
        console.log("inside microservice reassign vehicle" + JSON.stringify(call.request));

        let vehicleId
        Vehicle.findOne({ _id: call.request._id }).then((foundVehicle) => {
            vehicleId = foundVehicle;
            console.log(JSON.stringify(foundVehicle));
        }).then(() => {
            console.log("found vehicle " + JSON.stringify(vehicleId));
            let id = call.request._id
            // console.log("Location id: " + id);
            console.log("current location:"+call.request.currentLocation);
            console.log("new loaction: "+call.request.newLocation);
            console.log("_id: "+call.request._id);
            let loc_id = call.request.currentLocation;
            Location.findOneAndUpdate({ _id: loc_id }, {   
                $pull: {
                    VEHICLES: id  
                },
                $inc: {
                    CURRENT_CAPACITY: -1,
                  }
            }, { new: true }).then((location) => {
                console.log("Vehicle removed from Location: \n" + JSON.stringify(location));

                Vehicle.findOne({ _id: call.request._id }).then((foundVehicle) => {
                    vehicleId = foundVehicle;
                    console.log(JSON.stringify(foundVehicle));
                }).then(() => {
                    // console.log("found vehicle " + JSON.stringify(vehicleId));
                    let new_loc = call.request.newLocation
                    console.log(Location + " id: " + new_loc);
                    Location.findOneAndUpdate({ _id: new_loc }, {
                        $push: {
                            VEHICLES: vehicleId
                        },
                        $inc: {
                            CURRENT_CAPACITY: 1,
                          }
        
                    }, { new: true }).then((location) => {
                        console.log("Vehicle reassigned to Location: \n" + JSON.stringify(location))
                        callback(null, location)
                    }).catch(err => {
                        console.log("error is", err)
                        callback(err, null)
                    })
                })
                
            }).catch(err => {
                console.log("error is", err)
                
            })
        })
    }


}




module.exports = LocationService;