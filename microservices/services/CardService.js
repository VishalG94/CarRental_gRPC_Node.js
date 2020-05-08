let Card = require("../models/card");
let User = require("../models/user");

const mongoose = require("mongoose");

let CardService = {
  list: (_, callback) => {
    Card.find({}, function (err, res) {
      if (err) {
        callback(err, null);
        console.log("error is", err);
      } else {
        callback(null, { cards: res });
        console.log(res);
      }
    });
  },
  insert: (call, callback) => {
    console.log("inside microservice insert");
    let cardReq = call.request;
    let id = mongoose.Types.ObjectId();
    console.log(JSON.stringify(cardReq) + " id: " + id);
    Card.create(
      {
        _id: id,
        CARD_NUMBER: cardReq.CARD_NUMBER,
        NAME_ON_CARD: cardReq.NAME_ON_CARD,
        CARD_TYPE: cardReq.CARD_TYPE,
        EXP_MONTH: cardReq.EXP_MONTH,
        EXP_YEAR: cardReq.EXP_YEAR,
      },
      (err, res) => {
        if (err) {
          console.log("error is", err);
          callback(err, null);
        } else {
          User.findOneAndUpdate(
            { _id: cardReq._id },
            {
              $push: {
                CARDS: res,
              },
            }
          );
          console.log("Card created: \n" + res);
          callback(null, res);
        }
      }
    );
  },
  get: (call, callback) => {
    let id = call.request._id;
    console.log("id value: " + id);
    Card.findById(id, (err, res) => {
      if (err) {
        callback(err, null);
        console.log("error is", err);
      } else {
        callback(null, res);
        console.log(res);
      }
    });
  },
  delete: (call, callback) => {
    let id = call.request._id;
    Card.findOneAndRemove({ _id: id }, (err, res) => {
      console.log("res: " + res);
      if (err) {
        callback(err, null);
        console.log("Error occured while removing the record");
      } else {
        callback(null, res);
        console.log(res);
      }
    });
  },
  update: (call, callback) => {
    console.log("inside microservice insert");
    let cardReq = call.request;
    let id = call.request._id;
    console.log(JSON.stringify(cardReq) + " id: " + id);
    Card.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          CARD_NUMBER: cardReq.CARD_NUMBER,
          NAME_ON_CARD: cardReq.NAME_ON_CARD,
          CARD_TYPE: cardReq.CARD_TYPE,
          EXP_MONTH: cardReq.EXP_MONTH,
          EXP_YEAR: cardReq.EXP_YEAR,
        },
      },
      { new: true }
    )
      .then((card) => {
        console.log("Card created: \n" + JSON.stringify(card));
        callback(null, card);
      })
      .catch((err) => {
        console.log("error is", err);
        callback(err, null);
      });
  },
};

module.exports = CardService;
