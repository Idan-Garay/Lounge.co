import React from "react"
import MenuLeft from "./MenuLeft"
import { Provider } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"

export default {
    component: MenuLeft,
    title: "MenuLeft",
}

const MockState = {
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

const MockStore = ({ state, children }) => {
    alert(`${JSON.stringify(state)} hello`)

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

export const Default = {
    decorators: [(story) => <MockStore state={MockState}>{story()}</MockStore>]
}