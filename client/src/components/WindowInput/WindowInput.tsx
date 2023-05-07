import React, { useEffect, useRef, useState } from 'react'
import "./WindowInput.scss"
import { BsFillEmojiSmileFill, BsFileEarmarkFill, BsPlusCircleFill } from "react-icons/bs"
import { FaThumbsUp } from "react-icons/fa"

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

    useDynamicHeightTextArea(textAreaRef.current, message)

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target
        setMessage(value)
    }

    return <div className="window-input">
        <BsPlusCircleFill size={20} />
        <div className="input-group">
            <textarea onChange={handleTextAreaChange} ref={textAreaRef} className='input-text' rows={1} placeholder="Type a message..." />
            <BsFileEarmarkFill size={20} />
            <BsFillEmojiSmileFill size={20} />
        </div>
        <FaThumbsUp size={20} />
    </div>
}