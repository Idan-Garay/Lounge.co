import React, { useEffect, useRef, useState } from 'react'
import "./WindowInput.scss"
import { BsFillEmojiSmileFill, BsFileEarmarkFill, BsPlusCircleFill } from "react-icons/bs"
import { FaThumbsUp } from "react-icons/fa"
import { IoSend } from "react-icons/io5"
import { socket } from "../../socket"

const useDynamicHeightTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string) => {
    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "40px"
            const scrollHeight = textAreaRef.scrollHeight
            textAreaRef.style.height = scrollHeight + "px"
        }
    }, [textAreaRef, value])

}

interface Message {
    text: string
    from: string
}

export default function () {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const [message, setMessage] = useState("")
    const [connected, setConnect] = useState(false)
    const [username, setUsername] = useState("")

    useDynamicHeightTextArea(textAreaRef.current, message)

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target
        setMessage(value)
    }

    const sendMessage = () => {
        console.log('sending message')
        socket.emit("send-message-to-server", { text: textAreaRef.current.value, from: username } as Message)
        textAreaRef.current.value = ""
    }

    useEffect(() => {
        const onConnect = () => setConnect(true)
        const disconnect = () => setConnect(false)

        socket.on("connect", onConnect)
        socket.on("disconnect", disconnect)

        return () => {
            socket.off("connect")
            socket.off("disconnect")
        }
    }, [])

    return <div className="window-input">
        <BsPlusCircleFill size={20} />
        <div className="input-group">
            <textarea onChange={handleTextAreaChange} ref={textAreaRef} className='input-text' rows={1} placeholder="Type a message..." />
            <BsFileEarmarkFill size={20} />
            <BsFillEmojiSmileFill size={20} />
        </div>
        {message.length
            ? <IoSend onClick={sendMessage} size={20} />
            : <FaThumbsUp size={20} />}
    </div>
}