import { configureStore, createSlice } from "@reduxjs/toolkit"
import React from "react"
import { Provider } from "react-redux"

export const MockState = {
    user: {
        id: "1",
        username: "User 1",
        profileImage: "https://images.pexels.com/photos/2078467/pexels-photo-2078467.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2",
        isOnline: false,
        hasNewMessages: false,
        messageOverview: "You: I've made I've made loren ipsum made loren ipsum made loren ipsum made loren ipsum made loren ipsum",
        lastMessageDate: "4:25 PM",
        messages: []
    },
    isSelected: false
}

export const MockStore = ({ state, children }) => {
    return <Provider
        store={configureStore({
            reducer: {
                messaging: createSlice({
                    name: "messaging",
                    initialState: state,
                    reducers: {}
                }).reducer
            }
        })}>
        {children}
    </Provider>
}