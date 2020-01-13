const con = require("../db/db");

const FriendsSchema = `CREATE TABLE IF NOT EXISTS friends(
    friend1 VARCHAR(255) NOT NULL,
    friend2 VARCHAR(255) NOT NULL
);`;
con.query(FriendsSchema, (err, data) => {
  if (err) console.error(err);
  else console.log("Friends Table IS UP");
});
//######################################################## Create friends relationship in friends table 
function MakeFriends(friend1, friend2) {
  return con.query(
    `INSERT into friends(friend1,friend2) VALUES ('${friend1}', '${friend2}')`
  );
}
//######################################################## check of two are already friends

function CheckIfFriends(friend1, friend2) {
  return con.query(
    `SELECT * from friends WHERE friend1 = '${friend1}' AND friend2 = '${friend2}' OR friend1 = '${friend2}' AND friend2 = '${friend1}'`
  );
}
//######################################################## bring all friends of a specific user

function CheckFriends(username) {
  return con.query(
    `SELECT * FROM friends WHERE friend1 = '${username}' OR friend2= '${username}'`
  );
}

module.exports.CheckIfFriends = CheckIfFriends;
module.exports.MakeFriends = MakeFriends;
module.exports.CheckFriends = CheckFriends;
