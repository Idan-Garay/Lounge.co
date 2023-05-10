import React from 'react'

import "./ChatBox.scss"
import { User } from '../../../types'


interface ChatBoxProps {
    user: User
}

const ChatBox = ({user}: ChatBoxProps) => {
    return (
        <div className="menu-chat">
            <div className="chat-picture"></div>
            <div className="chat-info">
                <h5>{user.username} - {user.isOnline ? "online": ""}</h5>
                <p>You: I've made I've made loren ipsum made loren ipsum made loren ipsum made loren ipsum made loren ipsum</p>
            </div>
        </div>
    )
}

export default ChatBox