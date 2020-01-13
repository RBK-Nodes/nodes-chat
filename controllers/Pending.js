const PendingModel = require("../models/Pending");
//######################################################## this takes  2 users and passes them to the function that addes them both and pending friend requests table
function Send(requester, target) {
  return PendingModel.SendFriendRequest(requester, target)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}
//######################################################## this takes a username passes it to the function that returns all friend requests to a certain user 
function Fetch(username) {
  return PendingModel.CheckFriendRequest(username)
    .then(data => {
      return data.rows.map(row => row.requester);
    })
    .catch(err => {
      throw err;
    });
}
//######################################################## this takes a two users and passes them to a function that deletes them from pending table 

function DeleteFromPending(requester, target) {
  return PendingModel.DeleteFriendRequest(requester, target)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}

module.exports.Send = Send;
module.exports.Fetch = Fetch;
module.exports.DeleteFromPending = DeleteFromPending;
