import React, { useEffect, useRef, useState } from 'react'
import { BsSearch, BsFillEmojiSmileFill, BsFileEarmarkFill, BsPlusCircleFill } from "react-icons/bs"
import { IoChatbubbleEllipsesSharp, IoCall, IoVideocam, IoEllipsisHorizontal } from "react-icons/io5"
import { HiArchiveBox } from "react-icons/hi2";
import { MdVideoCall } from "react-icons/md";

import { FaThumbsUp, FaStore } from "react-icons/fa"
import { TbMessageCircle2Filled } from "react-icons/tb"

import "./App.scss"

// creating components -> data needed (state management -> backend)`
const useDynamicHeightTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "40px"
      const scrollHeight = textAreaRef.scrollHeight
      textAreaRef.style.height = scrollHeight + "px"
    }
  }, [textAreaRef, value])

}

const App = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [message, setMessage] = useState("")
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setMessage(value)
  }

  useDynamicHeightTextArea(textAreaRef.current, message)

  return (
    <div className='app'>
      <aside className='message-menu'>
        <div className="menu-left">
          <div className="menu-top">
            <div className="icon-space active">
            </div>

            <div className="icon-space">
            </div>

            <div className="icon-space">
            </div>

            <div className="icon-space">
            </div>
          </div>

          <div className="menu-bottom">

            <div className="icon-space active">
            </div>
          </div>
        </div>

        <div className="menu-right">
          <div className="menu-header">
            <h1 className="header-left">Chats</h1>
            <div className="header-right">
              <div className="icon-space"></div>
              <div className="icon-space"></div>
            </div>
          </div>

          <input type="text" name="" id="" className="menu-search" placeholder="🔍 Search (⌘K)" />

          <div className="menu-compose">
            <div className="icon-space"></div>
          </div>

          <div className="menu-body">
            {
              Array(12).fill(null).map(() => <div className="menu-chat"></div>)
            }
          </div>
        </div>
      </aside>
      <main className='message-window'>
        <div className="window-header b">
          <div className="header-info">
            <h3>Conversation Name</h3>
          </div>

          <div className="header-buttons">
            <div className="icon-space"></div>
            <div className="icon-space"></div>
            <div className="icon-space"></div>
          </div>
        </div>

        <div className="window-body">
          <div className="window-scroll">
            <div className="chat-text left">a</div>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
            <p className="chat-text right">012345678901234567890012345678900123456789001234567890</p>
          </div>
        </div>

        <div className="window-input">
          <BsPlusCircleFill size={20} />
          <div className="input-group">
            <textarea onChange={handleTextAreaChange} ref={textAreaRef} className='input-text' rows={1} placeholder="Type a message..." />
            <BsFileEarmarkFill size={20} />
            <BsFillEmojiSmileFill size={20} />
          </div>
          <FaThumbsUp size={20} />
        </div>
      </main >
    </div >
  )
}

export default App