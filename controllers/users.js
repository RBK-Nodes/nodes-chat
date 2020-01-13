const usersModel = require("../models/users");
//######################################################## this takes a username and passes it to the function that checks if user exists

function finduser(username) {
  return usersModel
    .find(username)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}

module.exports.finduser = finduser;
