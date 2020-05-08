let Category = require('../models/category');
const mongoose = require('mongoose');

let CategoryService = {
    list: (_, callback) => {
        Category.find({}, function (err, res) {
            if (err) {
                callback(err, null);
                console.log("error is", err);
            }
            else {
                callback(null, { categories: res });
                console.log(res);
            }
        })
    },
    insert: (call, callback) => {
        console.log("inside microservice insert");
        let categoryReq = call.request
        let id = mongoose.Types.ObjectId()
        console.log(JSON.stringify(categoryReq) + " id: " + id);
        Category.create({
            _id: id,
            CATEGORY_NAME: categoryReq.CATEGORY_NAME,
            LATE_FEE: categoryReq.LATE_FEE,
            HOURLY_FEE: categoryReq.HOURLY_FEE,
        }, (err, res) => {
            if (err) {
                console.log("error is", err)
                callback(err, null)
            }
            else {
                console.log("Category created: \n" + res)
                callback(null, res)
            }
        })
    },
    get: (call, callback) => {
        let id = call.request._id
        console.log("id value: " + id);
        Category.findById(id, (err, res) => {
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
        Category.findOneAndRemove({ _id: id }, (err, res) => {
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
        let categoryReq = call.request
        let id = call.request._id
        console.log(JSON.stringify(categoryReq) + " id: " + id);
        Category.findByIdAndUpdate({ _id: id }, {
            $set: {
                CATEGORY_NAME: categoryReq.CATEGORY_NAME,
                LATE_FEE: categoryReq.LATE_FEE,
                HOURLY_FEE: categoryReq.HOURLY_FEE,
            }
        }, { new: true }).then((category) => {
            console.log("Category updated: \n" + JSON.stringify(category))
            callback(null, category)
        }).catch(err => {
            console.log("error is", err)
            callback(err, null)
        })
    }
}



module.exports = CategoryService;