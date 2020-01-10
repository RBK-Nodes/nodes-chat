require("dotenv").config();
const express = require("express");
const app = express();
const Friend = require("../controllers/Friends");
const Pending = require("../controllers/Pending");
const Chatroom = require("../controllers/chatrooms");
// require("../db/models/Chatroom");
// require("../db/models/messages");

const http = require("http").Server(app);
const cors = require("cors");
var io = require("socket.io")(http);
const auth = require("./auth");

app.use(cors());

app.use(express.json());
// app.use(auth.middleware);
// io.use(auth.socketMiddleware)

app.post("/MakeFriends", function (req, res) {
    var friend1 = req.body.friend1;
    var friend2 = req.body.friend2;
    Friend.Make(friend1, friend2)
        .then(data => {
            console.log("success");
            res.send("success");
        })
        .catch(err => {
            console.log(err);
            res.send("you are friends already");
        });
});
app.post("/SendFriendRequest", function (req, res) {
    var requester = req.body.requester;
    var target = req.body.target;
    Pending.Send(requester, target)
        .then(data => {
            console.log("success");
            res.send("success");
        })
        .catch(err => {
            console.log(err);
            res.send("friend request was sent");
        });
});
app.post("/AcceptFriendRequest", function (req, res) {
    var requester = req.body.requester;
    var target = req.body.target;
    Pending.DeleteFromPending(requester, target)
        .then(data => {
            // console.log(data);
            // res.send(data);
            if (data.rowCount > 0) {
                Friend.Make(requester, target)
                    .then(data => {
                        // console.log("success");
                        //
                        Chatroom.Create(requester, target)
                            .then(data => {
                                console.log("new room created");
                                res.send(data);
                            })
                            .catch(err => {
                                console.log(err);
                                res.send(err);
                            });
                    })
                    .catch(err => {
                        console.log(err);
                        res.send("you are friends already");
                    });
            }
        })
        .catch(err => {
            console.log(err);
            res.send("nigga something happend like very bad thing");
        });
});
app.post("/ShowFriendRequest/:user", function (req, res) {
    console.log(req.params.user)
    var username = req.params.user

    Pending.Fetch(username)
        .then(data => {
            console.log(data);
            res.send(data.row);
        })
        .catch(err => {
            console.log(err);
            res.send("opps! something went wrong");
        });
});

const port = process.env.PORT || 5001;

var server = http.listen(port, () => {
    console.log('socketIO is running on port', server.address().port);
});
const roomTest = io.of('/room1')
roomTest.on('connection', (socket) => {
    console.log(`user connected`)
    socket.on('MESSAGE', (data) => {
        console.log(`${data.message}`)
        //store in the database
        socket.emit('MESSAGES', data)
    })
    socket.on('disconnect', () => {
        console.log('disconnect!')
    })

})