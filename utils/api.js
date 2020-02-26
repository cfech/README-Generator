const api = {
  getUser(userName) {
    const queryUrl = `https://api.github.com/users/${userName}/repos?per_page=100`;
    console.log(queryUrl)
    axios
    .get(queryUrl)
    .then(function(res){
        console.log(res.data)
    })
  }
};

module.exports = api;

// resarch axios 