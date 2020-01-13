const messagesModel = require("../models/messages");
//######################################################## this takes  username , text , chatroom id and passes them to the function that adds them to the messages table 
function Send(user, text, chatroom) {
  return messagesModel
    .sendMessage(user, text, chatroom)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}
//######################################################## this takes  chatroom id and passes it to the function that returns all messages in that chatroom
function Fetch(chatroom_id) {
  return messagesModel
    .checkMessage(chatroom_id)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}

module.exports.Send = Send;
module.exports.Fetch = Fetch;
