import React, { useState } from 'react'

import "./ChatBox.scss"
import { User } from '../../../types'


interface ChatBoxProps {
    user: User
    isSelected: boolean
    handleClick: () => void
}

const ChatBox = ({ user, isSelected, handleClick }: ChatBoxProps) => {
    return (
        <div className="menu-chat" data-selected={isSelected} onClick={handleClick}>
            <img src={user.profileImage} alt="profile" className="chat-avatar" />
            <div className="chat-info">
                <h5>{user.username}</h5>
                <div className="overview">
                    <p className="overview-message">{user.messageOverview}</p>
                    <p className="overview-interpunct">·</p>
                    <p className="overview-date">{user.lastMessageDate}</p>
                </div>
            </div>
        </div>
    )
}

export default ChatBox