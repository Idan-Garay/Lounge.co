import React, { useState } from 'react'
import "./WindowHeader.scss"
import { BsSearch } from "react-icons/bs"
import { IoCall, IoVideocam, IoEllipsisHorizontal } from "react-icons/io5"
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { RxCaretDown, RxCaretUp } from "react-icons/rx"
import { BiSearch } from "react-icons/bi"

export default function () {
    const [showSearch, setShowSearch] = useState(false)
    const [showOption, setShowOption] = useState(false)
    const [searchResult, setSearchResult] = useState([1, 2]) // make do with this for now
    const userId = useSelector((state: RootState) => {
        return state.messaging?.user?.id ?? "-1"
    })

    const toUser = useSelector((state: RootState) => {
        const toUserId = state.messaging.toUserId
        const users = state.messaging?.users ?? []

        if (toUserId === "-1")
            return
        let toUser = users.find(user => {
            return user.id === toUserId
        })
        return toUser
    })

    const handleSearchClick = (value: boolean) => { setShowSearch(value) }

    return <>
        {showSearch
            ? <div className="window-header-search">
                <div className="search-box">
                    <BiSearch size={25} color="#A7A7A7" />
                    <input type="text" name="" id="" placeholder="Search in Conversation (⌘F)" className="search-box-input" />
                </div>
                <div className="search-buttons">
                    <div className="search-arrow-buttons">
                        {searchResult.length
                            ? <>
                                <div className="up-btn btn-hover"><RxCaretUp size={25} color="black" /></div>
                                <div className="up-btn btn-hover"><RxCaretDown size={25} color="black" /></div>
                            </>
                            : <>
                                <div className="up-btn"><RxCaretUp size={25} color="#A6A6A5" /></div>
                                <div className="up-btn"><RxCaretDown size={25} color="#A6A6A5" /></div>
                            </>}
                    </div>
                    <button className="search-cancel-button" onClick={() => handleSearchClick(false)}>
                        Cancel
                    </button>
                </div>
            </div>
            : <div className="window-header">
                <div className="header-info">
                    <img src={toUser.profileImage} alt="profile" className="info-picture" />
                    <h4>{toUser.username}</h4>
                </div>

                <div className="header-buttons">
                    {toUser.id !== userId
                        ? <>
                            <IoCall className="btn-hover" size={20} />
                            <IoVideocam className="btn-hover" size={22} />
                        </>
                        : null
                    }
                    <BsSearch className="btn-hover" size={18} onClick={() => handleSearchClick(true)} />
                    <IoEllipsisHorizontal className='btn-hover' />
                </div>
            </div>
        }

    </>
}