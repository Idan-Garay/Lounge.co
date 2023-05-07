import React from 'react'
import "./MenuRight.scss"
import { HiPencilAlt } from "react-icons/hi";
import { MdVideoCall } from "react-icons/md";

import ChatBox from "../ChatBox"

export default function () {
    return <div className="menu-right">
        <div className="menu-header">
            <h3 className="header-left">Chats</h3>
            <div className="header-right">
                <MdVideoCall size={22} />
                <HiPencilAlt size={20} />
            </div>
        </div>

        <input type="text" name="" id="" className="menu-search" placeholder="🔍 Search (⌘K)" />

        <div className="menu-compose">
            <HiPencilAlt size={22} />
        </div>

        <div className="menu-body">
            <div className="menu-chat active">
                <div className="chat-picture"></div>
                <div className="chat-info">
                    <h5>Convo Name</h5>
                    <p>You: 123 I've made ...</p>
                </div>
            </div>
            {
                Array(12).fill(null).map(() => <ChatBox />)
            }
        </div>
    </div>
}