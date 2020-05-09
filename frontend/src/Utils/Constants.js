module.exports = {
  BACKEND_SERVER: {
    URL: "http://54.242.177.122:3001", // Should have http://
  },
  USER_INFORMATION: {
    USER_ID: localStorage.getItem("userId"),
    USERNAME: localStorage.getItem("userName"),
    USER_TYPE: localStorage.getItem("userType"),
  },
};
