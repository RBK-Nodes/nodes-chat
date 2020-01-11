const messagesModel = require("../models/messages");

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
