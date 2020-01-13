const ChatRoomsModel = require("../models/chatrooms");
//######################################################## this takes  2 users and passes them to the function that creates a room for them in the chatrooms table
function Create(user1, user2) {
  return ChatRoomsModel.CreateRoom(user1, user2)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}
//######################################################## this takes 2 users and passes them to the function that returns their chatroom id
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
