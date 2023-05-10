import { createServer } from "http"
import { Server } from "socket.io"

const PORT = 3000

const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:8080"
    }
})

io.on("connection", (socket) => {
    if (socket.connected) {
        console.log('connected')
    } else {
        console.log('not connected')
    }

    socket.on("login", (data) => {
        io.emit("user-connects", data)
    })

    socket.on("disconnect 2", (data) => {
        console.log('disconnect 2', data)
        const idx = usernames.findIndex(item => item.username === data)
        if (idx !== -1) {
            usernames[idx].isOnline = false
        }
        socket.emit("user-disconnect", usernames)
    })

    socket.on("send-message-to-server", (data) => {
        console.log('here', data)
        // socket.send(data)
        socket.emit("give-message-to-client", data)
    })
})


httpServer.listen(PORT)