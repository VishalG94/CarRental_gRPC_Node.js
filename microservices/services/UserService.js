let User = require('../models/user');
let Address = require('../models/address');
let Card = require('../models/card');
const mongoose = require('mongoose');

let UserService = {
    list: (_, callback) => {
        User.find({}, function (err, res) {
            if (err) {
                callback(err, null);
                console.log("error is", err);
            }
            else {
                callback(null, { users: res });
                console.log(res);
            }
        })
            .populate("CARDS")
            .populate("ADDRESS")
            .populate("RESERVATIONS")
    },
    insert: (call, callback) => {
        console.log("inside microservice insert");
        let userReq = call.request
        let id = mongoose.Types.ObjectId();
        let addressId = mongoose.Types.ObjectId();
        let cardId = mongoose.Types.ObjectId();
        console.log(JSON.stringify(userReq) + " id: " + id);
        Address.create({
            _id: addressId,
            STREET: userReq.ADDRESS.STREET,
            STATE: userReq.ADDRESS.STATE,
            COUNTRY: userReq.ADDRESS.COUNTRY,
            PIN: userReq.ADDRESS.PIN,
            LATITUDE: userReq.ADDRESS.LATITUDE,
            LONGITUDE: userReq.ADDRESS.LONGITUDE
        }, (err, res) => {
            if (err) {
                console.log("error is", err)
                callback(err, null)
            }
            else {
                console.log("Address created: \n" + res)
                addressId = res._id;
                // Card.create({
                //     _id: cardId,
                //     CARD_NUMBER: userReq.CARDS.CARD_NUMBER,
                //     NAME_ON_CARD: userReq.CARDS.NAME_ON_CARD,
                //     CARD_TYPE: userReq.CARDS.CARD_TYPE,
                //     EXP_MONTH: userReq.CARDS.EXP_MONTH,
                //     EXP_YEAR: userReq.CARDS.EXP_YEAR
                // }, (error, response) => {
                // if (error) {
                //     console.log("error is", error)
                //     callback(error, null)
                // }
                // else {
                // console.log("Card created: \n" + response)
                /*  Returning the location with populating the address. 
                    can also directly return response if only address objectId needs to be returned. */

                User.create({
                    _id: id,
                    NAME: userReq.NAME,
                    DL_STATE: userReq.DL_STATE,
                    DL_NUMBER: userReq.DL_NUMBER,
                    EMAIL: userReq.EMAIL,
                    PHONE: userReq.PHONE,
                    PASSWORD: userReq.PASSWORD,
                    ADDRESS: addressId,
                    MEMBERSHIP_START: userReq.MEMBERSHIP_START,
                    RESERVATIONS: userReq.RESERVATION_ID,
                    CREATED: userReq.CREATED,
                    MODIFIED: userReq.MODIFIED,
                    USER_TYPE: userReq.USER_TYPE
                }, (err, resp) => {
                    if (err) {
                        console.log(userReq);
                        console.log("error is", err)
                        callback(err, null)
                    }
                    else {
                        console.log("User created: \n" + resp)
                        callback(null, resp)
                    }
                })
                // Location.findById(response._id, (erro, resp) => {
                //     if (erro) {
                //         callback(erro, null);
                //         console.log("error record not created", err);
                //     }
                //     else {
                //         callback(null, resp);
                //         console.log(resp);
                //     }
                // }).populate("ADDRESS")
                // }
                // })
            }
        })


    },
    get: (call, callback) => {
        let id = call.request.email
        console.log("id value: " + id);
        User.find({ EMAIL: id }, (err, res) => {
            if (err) {
                callback(err, null);
                console.log("error is", err);
            }
            else {
                if (res.length > 0) {
                    console.log(res[0]);
                    if (res[0].PASSWORD === call.request.password) {
                        callback(null, res[0]);
                        console.log("Password Verified");
                    }
                    else {
                        callback(err, null);
                        console.log("Password Incorrect");
                    }
                }
                else {
                    callback(err, null);
                    console.log("Email not found");
                }
            }
        }).populate("CARDS")
            .populate("ADDRESS")
            .populate("RESERVATIONS")
    },
    delete: (call, callback) => {
        let id = call.request._id
        // Person.findOneAndRemove({_id: req.body._id}, (err, response) => {
        //     // note that if you have populated the Event documents to
        //     // the person documents, you have to extract the id from the
        //     // req.body.eventsAttended object 
        //     Event.remove({_id: { $in: req.body.eventsAttended }}, (err, res) => {
        //        ...
        //     })
        // })
        User.findOneAndRemove({ _id: id }, (err, res) => {
            console.log("res: " + res);
            if (err) {
                callback(err, null);
                console.log("Error occured while removing the record");
            }
            else {
                Card.deleteMany({ _id: { $in: res.CARDS } }, (err, res) => {
                    if (err) {
                        // callback(err, null);
                        console.log("Error occured while removing the record");
                    }
                    else {
                        // callback(null, res);
                        console.log(res);
                    }
                })
                Address.deleteOne({ _id: { $in: res.ADDRESS } }, (err, res) => {
                    if (err) {
                        // callback(err, null);
                        console.log("Error occured while removing the record");
                    }
                    else {
                        // callback(null, res);
                        console.log(res);
                    }
                })
                callback(null, res);
                console.log(res);
            }
        })
    },
    update: (call, callback) => {
        console.log("inside microservice update");
        let userReq = call.request
        let id = call.request._id
        console.log(JSON.stringify(userReq) + " id: " + id);
        Address.findByIdAndUpdate({ _id: call.request.ADDRESS._id }, {
            $set: {
                ...call.request.ADDRESS
            }
        }).then(
            User.findByIdAndUpdate({ _id: id }, {
                $set: {
                    NAME: userReq.NAME,
                    DL_STATE: userReq.DL_STATE,
                    DL_NUMBER: userReq.DL_NUMBER,
                    //  EMAIL: userReq.EMAIL,
                    PHONE: userReq.PHONE,
                    //  PASSWORD: userReq.PASSWORD,
                    ADDRESS: userReq.ADDRESS,
                    //MEMBERSHIP_START: userReq.MEMBERSHIP_START,
                    // RESERVATION_ID: userReq.RESERVATION_ID,
                    // CARD: userReq.CARD,
                    // CREATED: userReq.CREATED,
                    // MODIFIED: userReq.MODIFIED,
                }
            }, { new: true }).then((user) => {
                console.log("User Updated: \n" + JSON.stringify(user))
                callback(null, user)
            }).catch(err => {
                console.log("error is", err)
                callback(err, null)
            }))
    },

    updateMembership: (call, callback) => {
        console.log("inside microservice insert");
        let userReq = call.request
        let id = call.request._id
        console.log(JSON.stringify(userReq) + " id: " + id);
        User.findByIdAndUpdate({ _id: id }, {
            $set: {
                MEMBERSHIP_START: userReq.MEMBERSHIP_START,
            }
        }, { new: true }).then((user) => {
            console.log("Membership Updated: \n" + JSON.stringify(user))
            callback(null, user)
        }).catch(err => {
            console.log("error is", err)
            callback(err, null)
        })
    },

    getRes: (call, callback) => {
        let id = call.request._id
        console.log("id value: " + JSON.stringify(call.request));
        User.findById(id, (err, res) => {
            if (err) {
                callback(err, null);
                console.log("error is", err);
            }
            else {

                callback(null, res);
                console.log("Reservations found");

            }
        }).populate("CARDS")
            .populate("ADDRESS")
            .populate({ path: "RESERVATIONS", populate: { path: 'VEHICLE' } })
            .populate({ path: "RESERVATIONS", populate: { path: 'LOCATION', populate: { path: 'ADDRESS' } } })
    }
}



module.exports = UserService;