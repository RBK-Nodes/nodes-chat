const con = require("../db/db");

const PendingSchema = `CREATE TABLE IF NOT EXISTS pending(
    requester VARCHAR(255) NOT NULL,
    target VARCHAR(255) NOT NULL
)`;
con.query(PendingSchema, (err, data) => {
  if (err) console.error(err);
  else console.log("Pending Table IS UP");
});
//######################################################## Add friendship request into pending friendship requests table

function SendFriendRequest(requester, target) {
  return con.query(
    `INSERT into pending(requester,target) VALUES ('${requester}', '${target}')`
  );
}
//######################################################## get all friend requests of a specific user 

function CheckFriendRequest(username) {
  return con.query(`SELECT * FROM pending WHERE target = '${username}'`);
}

//######################################################## remove a friend request from the pending table 

function DeleteFriendRequest(requester, target) {
  return con.query(
    `DELETE FROM Pending WHERE requester = '${requester}' AND target = '${target}'`
  );
}

module.exports.SendFriendRequest = SendFriendRequest;
module.exports.CheckFriendRequest = CheckFriendRequest;
module.exports.DeleteFriendRequest = DeleteFriendRequest;
