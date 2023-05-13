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

io.on("connection", (socket) => {
    if (socket.connected) {
        console.log('connected', users)
    } else {
        console.log('not connected')
    }

    socket.on("connect user", (user) => {
        const id = users.length ? users[users.length - 1].id + 1 : 0
        user.id = id
        users.push(user)
        socket.emit("users", users, user)
        let newUser = users.length ? users[users.length - 1] : null
        socket.broadcast.emit("user connected", newUser)
    })


    socket.onAny((event, ...args) => {
        console.log(event, args);
    });

    socket.on("send-message-to-server", (data) => {
        socket.emit("give-message-to-client", data)
    })
})

httpServer.listen(PORT)