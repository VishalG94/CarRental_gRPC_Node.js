module.exports = {
    FRONTEND_URL: "http://localhost:3001",

    /** Vehicle routes */
    GET_VEHICLES_ROUTE: "/vehicles",
    GET_VEHICLEBYID_ROUTE: "/vehicle",
    POST_VEHICLE_ROUTE: "/vehicle",
    //DELETE_VEHICLE_ROUTE: "/vehicle/:id",
    UPDATE_VEHICLE_ROUTE: "/vehicle",
    DELETE_VEHICLE_ROUTE: "/vehicle",

    /** Address routes */
    GET_ADDRESSESS_ROUTE: "/addresses",
    GET_ADDRESSBYID_ROUTE: "/address",
    POST_ADDRESS_ROUTE: "/address",
    UPDATE_ADDRESS_ROUTE: "/address",
    DELETE_ADDRESS_ROUTE: "/address",

    /** Card routes */
    GET_CARDS_ROUTE: "/cards",
    GET_CARDBYID_ROUTE: "/card",
    POST_CARD_ROUTE: "/card",
    UPDATE_CARD_ROUTE: "/card",
    DELETE_CARD_ROUTE: "/card",

    /** CATEGORY routes */
    GET_CATEGORIES_ROUTE: "/categories",
    GET_CATEGORYBYID_ROUTE: "/category",
    POST_CATEGORY_ROUTE: "/category",
    UPDATE_CATEGORY_ROUTE: "/category",
    DELETE_CATEGORY_ROUTE: "/category",

    /** LOCATION routes */
    GET_LOCATIONS_ROUTE: "/locations",
    GET_LOCATIONBYID_ROUTE: "/location",
    POST_LOCATION_ROUTE: "/location",
    UPDATE_LOCATION_ROUTE: "/location",
    DELETE_LOCATION_ROUTE: "/location",

    /** Reservation routes */
    GET_RESERVATIONS_ROUTE: "/reservations",
    GET_RESERVATIONBYID_ROUTE: "/reservation",
    POST_RESERVATION_ROUTE: "/reservation",
    UPDATE_RESERVATION_ROUTE: "/reservation",
    DELETE_RESERVATION_ROUTE: "/reservation",

    /** User routes */
    GET_USERS_ROUTE: "/users",
    POST_USERBYID_ROUTE: "/userID",
    POST_USER_ROUTE: "/user",
    UPDATE_USER_ROUTE: "/user",
    DELETE_USER_ROUTE: "/user",

    /** string constants */
    CONTENT_TYPE: "Content-Type",
    APP_JSON: "application/json",
    TEXT_PLAIN: "text/plain",
    RETURN_BUFFER: "return_buffers",

    /* Server Ports*/
    SERVER_PORT: 3001,
    REDIS_PORT: 6379,

    CACHE_TIMEOUT: 5,

    /**Response status codes */
    RES_UNKNOWN_ERROR: 502,
    RES_BAD_REQUEST: 400,
    RES_NOT_FOUND: 404,
    RES_DUPLICATE_RESOURCE: 409,
    RES_SUCCESS: 200,
    RES_INTERNAL_SERVER_ERROR: 500
};