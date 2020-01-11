<<<<<<< HEAD
const PendingModel = require("../models/Pending");
/*
module.exports.SendFriendRequest = SendFriendRequest;
module.exports.CheckFriendRequest = CheckFriendRequest;
module.exports.DeleteFriendRequest = DeleteFriendRequest;
 */
function Send(requester, target) {
  return PendingModel.SendFriendRequest(requester, target)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    })
}
function Fetch(username) {
  return PendingModel.CheckFriendRequest(username)
    .then(data => {
      console.log(data.rows)
      var friendRequests = data.rows.map(row => {
        return row.requester
      })
      return friendRequests;
    })
    .catch(err => {
      throw err;
    });
}
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
=======
const PendingModel = require("../models/Pending");
/*
module.exports.SendFriendRequest = SendFriendRequest;
module.exports.CheckFriendRequest = CheckFriendRequest;
module.exports.DeleteFriendRequest = DeleteFriendRequest;
 */
function Send(requester, target) {
  return PendingModel.SendFriendRequest(requester, target)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}
function Fetch(username) {
  return PendingModel.CheckFriendRequest(username)
    .then(data => {
      return data.rows.map(row=>row.requester);
    })
    .catch(err => {
      throw err;
    });
}
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
>>>>>>> 9c827a722aa4ce68b363e570ae218517302e62e4
