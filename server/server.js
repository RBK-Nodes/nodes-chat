require("dotenv").config();
const express = require("express");
const app = express();
const Friend = require("../controllers/Friends");
const Pending = require("../controllers/Pending");
const Chatroom = require("../controllers/chatrooms");
// require("../db/models/Chatroom");
// require("../db/models/messages");

const requests = require("./requests");
const http = require("http").Server(app);
const cors = require("cors");
var io = require("socket.io")(http);
const auth = require("./auth");

app.use(cors());

app.use(express.json());
// app.use(auth.middleware);
// io.use(auth.socketMiddleware)


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

app.use(cors());
app.use(express.json());

app.post("/finduser", requests.findUser);
app.post("/sendfriendrequest", requests.sendRequest);
app.post("/rejectfriendrequest", requests.rejectRequest);
app.post("/acceptfriendrequest", requests.approveRequest);
app.post("/showfriendrequest", requests.getAllRequests);
app.post("/getmessages", requests.getChat);
app.post("/getfriends", requests.getAllFriends);

app.post("/sendmessage", function (req, res) {
    var user1 = req.body.user1;
    var user2 = req.body.user2;
    var text = req.body.data;
    Chatroom.getroomId(user1, user2).then(data => {
        var id = data.rows[0].idno;
        messages.Send(text, id).then(data => {
            res.send("message sent successfuly");
        });
    });
});


