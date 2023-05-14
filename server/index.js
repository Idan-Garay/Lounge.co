import { createServer } from "http"
import { Server } from "socket.io"

const PORT = 3000

const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:8080"
    }
})

const users = []

io.use((socket, next) => {
    socket.handshake.auth.user.id = users.length ? users[users.length - 1].id + 1 : 0
    var user = socket.handshake.auth.user

    if (!user) {
        return next(new Error("Invalid user"))
    }

    console.log(user)
    socket.user = user // any atttribute except id, handshake can be reuse when attached
    next()
})

io.on("connection", (socket) => {
    if (socket.connected) {
        console.log('connected', users)
    } else {
        console.log('not connected')
    }

    const user = socket.user
    users.push(user)
    socket.emit("users", users, user)
    let newUser = users.length ? users[users.length - 1] : null
    socket.broadcast.emit("user connected", socket.user, newUser)


    socket.onAny((event, ...args) => {
        console.log(event, args);
    });

    socket.on("send-message-to-server", (data) => {
        socket.emit("give-message-to-client", data, socket.user)
    })
})

httpServer.listen(PORT)