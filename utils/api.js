//Required packages 
var axios = require ("axios")
// api call 
const api = {
  getUser(userName) {
    const queryUrl = `https://api.github.com/users/${userName}`;
    console.log(queryUrl)
    return axios
    .get(queryUrl)
  }
};

module.exports = api;

