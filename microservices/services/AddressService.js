let Address = require('../models/address');
const mongoose = require('mongoose');

let AddressService = {
    list: (_, callback) => {
        Address.find({}, function (err, res) {
            if (err) {
                callback(err, null);
                console.log("error is", err);
            }
            else {
                callback(null, { addresses: res });
                console.log(res);
            }
        })
    },
    insert: (call, callback) => {
        console.log("inside microservice insert");
        let addressReq = call.request
        console.log(addressReq);
        let id = mongoose.Types.ObjectId()
        console.log(JSON.stringify(addressReq) + " id: " + id);
        Address.create({
            _id: id,
            STREET: addressReq.STREET,
            STATE: addressReq.STATE,
            COUNTRY: addressReq.COUNTRY,
            PIN: addressReq.PIN,
            LATITUDE: addressReq.LATITUDE,
            LONGITUDE: addressReq.LONGITUDE
        }, (err, res) => {
            if (err) {
                console.log("error is", err)
                callback(err, null)
            }
            else {
                console.log("Address created: \n" + res)
                callback(null, res)
            }
        })
    },
    get: (call, callback) => {
        let id = call.request._id
        console.log("id value: " + id);
        Address.findById(id, (err, res) => {
            if (err) {
                callback(err, null);
                console.log("error is", err);
            }
            else {
                callback(null, res);
                console.log(res);
            }
        })
    },
    delete: (call, callback) => {
        let id = call.request._id
        Address.findOneAndRemove({ _id: id }, (err, res) => {
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
        let addressReq = call.request
        let id = call.request._id
        console.log(JSON.stringify(addressReq) + " id: " + id);
        Address.findByIdAndUpdate({ _id: id }, {
            $set: {
                STREET: addressReq.STREET,
                STATE: addressReq.STATE,
                COUNTRY: addressReq.COUNTRY,
                PIN: addressReq.PIN,
                LATITUDE: addressReq.LATITUDE,
                LONGITUDE: addressReq.LONGITUDE
            }
        }, { new: true }).then((address) => {
            console.log("Address created: \n" + JSON.stringify(address))
            callback(null, address)
        }).catch(err => {
            console.log("error is", err)
            callback(err, null)
        })
    }
}



module.exports = AddressService;