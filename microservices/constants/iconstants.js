module.exports = {
    FRONTEND_URL: "http://localhost:3000",

    /** MongoDB connection string  */
    USERNAME: 'admin',
    PASSWORD: 'admin',
    DATABASE_NAME: 'CarRental',
    // MONGODB_CONNECTION_STRING: 'mongodb+srv://' + this.USERNAME + ':' + this.PASSWORD + '@cluster0-lzng9.mongodb.net/' + this.DATABASE_NAME + '?retryWrites=true&w=majority',

    /** string constants */
    CONTENT_TYPE: "Content-Type",
    APP_JSON: "application/json",
    RETURN_BUFFER: "return_buffers",

    /* Server Ports*/
    SERVER_PORT: 3000,
    REDIS_PORT: 6379,

    CACHE_TIMEOUT: 5,

    /**Response status codes */
    RES_UNKNOWN_ERROR: 502,
    RES_SUCCESS: 200,
    RES_INTERNAL_SERVER_ERROR: 500
};