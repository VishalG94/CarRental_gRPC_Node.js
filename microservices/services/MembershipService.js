let Membership = require('../models/membership');
const mongoose = require('mongoose');

let MembershipService = {    
    insert: (call, callback) => {
        console.log("inside membership microservice insert");
        let membershipReq = call.request
        console.log(membershipReq);
        let id = mongoose.Types.ObjectId()
        console.log(JSON.stringify(membershipReq) + " id: " + id);
        Membership.create({
            _id: id,
            MEMBERSHIP_FEE: membershipReq.MEMBERSHIP_FEE,
        }, (err, res) => {
            if (err) {
                console.log("error is", err)
                callback(err, null)
            }
            else {
                console.log("MEMBERSHIP created: \n" + res)
                callback(null, res)
            }
        })
    },
    get: (_, callback) => {
        Membership.find().limit(1).sort({$natural:-1})
        .then((membership) => {
            let latestFee = membership[0];
            console.log("MEMBERSHIP fetched: \n" + JSON.stringify(latestFee))
            callback(null, latestFee)
        }).catch(err => {
            console.log("error is", err)
            callback(err, null)
        })
    },
    update: (call, callback) => {
        console.log("inside MEMBERSHIP microservice insert");
        let membershipReq = call.request
        let id = call.request._id
        console.log(JSON.stringify(membershipReq) + " id: " + id);
        Membership.find().limit(1).sort({$natural:-1})
        .then((membership) => {
            let latestFee = membership[0];
            console.log("MEMBERSHIP fetched: \n" + JSON.stringify(latestFee.id))
            Membership.findByIdAndUpdate({ _id: latestFee.id }, {
                $set: {
                    MEMBERSHIP_FEE: membershipReq.MEMBERSHIP_FEE,
                }
            }, { new: true }).then((membership) => {
                console.log("MEMBERSHIP updated: \n" + JSON.stringify(membership))
                callback(null, membership)
            }).catch(err => {
                console.log("error is", err)
                callback(err, null)
            })
        }).catch(err => {
            console.log("error is", err)
            callback(err, null)
        })
    }
}



module.exports = MembershipService;