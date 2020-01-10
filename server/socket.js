function handler(socket) {
<<<<<<< HEAD
    socket.on('room', (room) => {
        socket.join(room)
    })

    socket.on('message', (data) => {
=======
    socket.on('room', (room)=>{
        socket.join(room)
    })

    socket.on('message', ({user, chatid, text})=>{
>>>>>>> c10ec224fa27ffaf66fac04fcfac04a4f3414e5a
        //save to DB
        //emit to all in room
    })
}

module.exports = handler