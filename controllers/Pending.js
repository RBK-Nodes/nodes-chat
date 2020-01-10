<<<<<<< HEAD
const PendingModel = require("../models/Pending");

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
      return data;
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
      return data;
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
>>>>>>> c10ec224fa27ffaf66fac04fcfac04a4f3414e5a
