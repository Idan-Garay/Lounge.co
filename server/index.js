import { createServer } from "http"
import { Server } from "socket.io"

const PORT = 3000

const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:8080"
    }
})

io.use((socket, next) => {
    socket.handshake.auth.user.id = socket.id
    var user = socket.handshake.auth.user

    if (!user) {
        return next(new Error("Invalid user"))
    }

    console.log(user, socket.id)
    socket.user = user // any atttribute except id, handshake can be reuse when attached
    next()
})

io.on("connection", (socket) => {
    if (socket.connected) {
        console.log('connected')
    } else {
        console.log('not connected')
    }

    const users = [] 

    for (let [id, socket] of io.of("/").sockets) {
        const user = {...socket.user, id: id,}
        users.push(user)
    }

    socket.emit("users", users, socket.user)
    // let newUser = users.length ? users[users.length - 1] : null
    socket.broadcast.emit("user connected", socket.user)

    socket.onAny((event, ...args) => {
        console.log(event, args);
    });

    socket.on("send private message", (message) => {
        console.log('send-message', message.fromUserId, message.toUserId)
        message.fromUserId = socket.id
        socket.to(message.toUserId).emit("private message", message)
        console.log('send-message-done', message.toUserId)
    })

    socket.on("disconnect", () => {
        socket.broadcast.emit("user disconnect", socket.id)
    })
})

httpServer.listen(PORT)