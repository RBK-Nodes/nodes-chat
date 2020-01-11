const messages = require("../controllers/messages");

function handler(socket, cb) {
    socket.on('room', (room) => {
        socket.join(room)
    })

    socket.on('message', ({ user, chatid, text }) => {
        //save to DB
        //emit to all in room

        socket.emit('message', { user, chatid, text });
        messages.Send(text, chatid)
    })
}

module.exports = handler