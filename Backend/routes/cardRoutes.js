const express = require("express");
const cardRouter = express.Router();
const cardController = require("../controllers/cardController");
const { GET_CARDS_ROUTE, GET_CARDBYID_ROUTE, POST_CARD_ROUTE, DELETE_CARD_ROUTE, UPDATE_CARD_ROUTE } = require("../constants/iconstants");

cardRouter.route(GET_CARDS_ROUTE).get(cardController.getCards);
cardRouter.route(GET_CARDBYID_ROUTE).get(cardController.getCardById);
cardRouter.route(POST_CARD_ROUTE).post(cardController.postCard);
cardRouter.route(DELETE_CARD_ROUTE).delete(cardController.deleteCard);
cardRouter.route(UPDATE_CARD_ROUTE).put(cardController.updateCard);

module.exports = cardRouter;