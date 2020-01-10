<<<<<<< HEAD
const ChatRoomsModel = require("../models/chatrooms");

function Create(user1, user2) {
  return ChatRoomsModel.CreateRoom(user1, user2)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}
function getroomId(user1, user2) {
  return ChatRoomsModel.findRoom(user1, user2)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}

module.exports.Create = Create;
module.exports.getroomId = getroomId;
=======
const ChatRoomsModel = require("../models/chatrooms");

function Create(user1, user2) {
  return ChatRoomsModel.CreateRoom(user1, user2)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}
function getroomId(user1, user2) {
  return ChatRoomsModel.findRoom(user1, user2)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}

module.exports.Create = Create;
module.exports.getroomId = getroomId;
>>>>>>> c10ec224fa27ffaf66fac04fcfac04a4f3414e5a
