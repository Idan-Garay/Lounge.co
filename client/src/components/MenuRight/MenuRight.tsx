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
        console.log('inbox', inbox)
        // socket.on("user-disconnect", (arg: User) => {
        //     dispatch(logout(arg))
        // })

        // socket.on("give-message-to-client", (data: Message) => {
        //     if (data.to.id === user.id || data.from.id === user.id) {
        //         dispatch(consumeMessage(data))
        //     }
        // })
        
        return () => {
            socket.off("user-connects")
            socket.off("user-disconnect")
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
                ? inbox.map((item, index) => {
                    return <ChatBox user={item.to} key={index} />
                })
                : <ChatBox user={user} />
            }
        </div>
    </div>
}