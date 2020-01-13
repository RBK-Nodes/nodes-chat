const con = require("../db/db");

const MessagesSchema = `CREATE TABLE IF NOT EXISTS messages(
    text VARCHAR(255),
    username VARCHAR(255),
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    chatroom_id INTEGER NOT NULL
)`;
con.query(MessagesSchema, (err, data) => {
  if (err) console.error(err);
  else console.log("messages Table IS UP");
});
//######################################################## send a message to messages table

function sendMessage(user, text, chatroom_id) {
  return con.query(
    `INSERT into messages (username,text,chatroom_id) VALUES ('${user}', '${text}', '${chatroom_id}')`
  );
}
//######################################################## get all messages of specific room 

function checkMessage(chatroom_id) {
  return con.query(
    `SELECT * FROM messages WHERE chatroom_id  = '${chatroom_id}'`
  );
}
module.exports.sendMessage = sendMessage;
module.exports.checkMessage = checkMessage;
