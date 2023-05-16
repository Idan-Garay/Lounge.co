import React, { useEffect, useRef, useState } from 'react'
import "./WindowInput.scss"
import { BsFillEmojiSmileFill, BsFileEarmarkFill, BsPlusCircleFill } from "react-icons/bs"
import { FaThumbsUp } from "react-icons/fa"
import { IoSend } from "react-icons/io5"
import { socket } from "../../socket"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Message, User } from '../../../types'
import { sendMessage } from '../../../features/messaging/messagingSlice'

const useDynamicHeightTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string) => {
    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "40px"
            const scrollHeight = textAreaRef.scrollHeight
            textAreaRef.style.height = scrollHeight + "px"
        }
    }, [textAreaRef, value])

}

export default function () {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const [message, setMessage] = useState("")
    const toUserId = useSelector((state: RootState) => state.messaging.toUserId)
    const fromUserId = useSelector((state: RootState) => {
        const user = state.messaging.user
        return user? user.id: null
    })
    const dispatch = useDispatch()
    
    useDynamicHeightTextArea(textAreaRef.current, message)

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target
        setMessage(value)
    }

    const handleSendMessage = () => {
        console.log('sending message')
        const message: Message = { text: textAreaRef.current.value, fromUserId: fromUserId, toUserId: toUserId }
        socket.emit("send private message", message)
        dispatch(sendMessage(message))
        textAreaRef.current.value = ""
    }
    

    return <div className="window-input">
        <BsPlusCircleFill size={20} />
        <div className="input-group">
            <textarea onChange={handleTextAreaChange} ref={textAreaRef} className='input-text' rows={1} placeholder="Type a message..." />
            <BsFileEarmarkFill size={20} />
            <BsFillEmojiSmileFill size={20} />
        </div>
        {message.length
            ? <IoSend onClick={handleSendMessage} size={20} />
            : <FaThumbsUp size={20} />}
    </div>
}