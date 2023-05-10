import React, { useEffect, useState } from 'react'
import "./WindowBody.scss"

import { socket } from "../../socket"

interface Message {
    text: string
    from: string
}


export default function () {
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        socket.on("give-message-to-client", (data: Message) => {
            setMessages(state => [...state, data])
        })
        return () => {
            socket.off("give-message-to-client")
        }
    }, [])


    return <div className="window-body">
        <div className="window-scroll">
            <p className="chat-text left">a</p>
            {
                messages.map((item: Message, index) => <p key={index} className="chat-text right">{item.text}</p>)
            }
        </div>
    </div>
}