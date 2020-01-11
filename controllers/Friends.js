const FriendsModel = require("../models/Friends");

function Make(friend1, friend2) {
  return FriendsModel.CheckIfFriends(friend1, friend2)
    .then(data => {
      if (!data.rowCount > 0) {
        MakeFriends(friend1, friend2);
      } else {
        throw "already friends";
      }
    })
    .catch(err => {
      throw err;
    });
}

function MakeFriends(friend1, friend2) {
  return FriendsModel.MakeFriends(friend1, friend2)
    .then(() => {
      return true;
    })
    .catch(err => {
      throw err;
    });
}

function Check(username) {
  return FriendsModel.CheckFriends(username)
    .then(data => {
      if(data.rowCount<1) throw [];
      var friends = data.rows.reduce((acc, row)=>{
        if(row.friend1 === username) 
          acc.push(row.friend2) 
        else 
          acc.push(row.friend1);
        return acc;
      }, [])
      return friends
    })
    .catch((err) => {
      throw err;
    }); 
}

module.exports.Make = Make;
module.exports.Check = Check;
