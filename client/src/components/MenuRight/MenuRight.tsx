import React, { useEffect, useMemo, useState } from 'react'
import "./MenuRight.scss"
import { HiPencilAlt } from "react-icons/hi";
import { MdVideoCall } from "react-icons/md";

import ChatBox from "../ChatBox"
import { socket } from '../../socket';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { consumeMessage } from '../../../features/messaging/messagingSlice';
import { Message, User } from '../../../types';

export default function () {
    const inbox = useSelector((state:RootState) => state.messaging.inbox)
    const toUser = useSelector((state:RootState) => state.messaging.toUser)
    const user = useSelector((state:RootState) => {
        let user: User = state.messaging.user
        if (!user) {
            user = {id: -1, username: "", isOnline: false}
        }
        return user
    })
    const dispatch = useDispatch()

    useEffect(() => {
        // socket.on("give-message-to-client", (data: Message) => {
        //     if (data.to.id === user.id || data.from.id === user.id) {
        //         dispatch(consumeMessage(data))
        //     }
        // })
        
        return () => {
            socket.off("give-message-to-client")
        }
    }, [inbox])
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
            {
                inbox.length
                ? inbox.map((chatHistory, index) => {
                    return <ChatBox user={chatHistory.to} key={index} isSelected={toUser && toUser.id === chatHistory.to.id} />
                })
                : <ChatBox user={user} isSelected={true} />
            }
        </div>
    </div>
}