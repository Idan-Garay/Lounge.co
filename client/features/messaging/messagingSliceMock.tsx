import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit"
import React from "react"
import { Provider } from "react-redux"
const mockUsernames = ["Anne", "Bill", "Caleb", "Dave", "Ehrlrich", "Glady", "Hart", "Irish", "Jones"]

const generateUsers = (usernames) => usernames.map((name, index) => ({
    id: `${index + 2}`,
    username: name,
    profileImage: "https://images.pexels.com/photos/2078467/pexels-photo-2078467.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2",
    isOnline: false,
    hasNewMessages: false,
    messageOverview: "Joshua: I've made I've made loren ipsum made loren ipsum made loren ipsum made loren ipsum made loren ipsum",
    lastMessageDate: "4:25 PM",
    messages: [{
        fromUserId: "1",
        toUserId: `${index + 2}`,
        text: "I've made I've made loren ipsum made loren ipsum made loren ipsum made loren ipsum made loren ipsum"
    }]
}))

export const MockState = {
    user: {
        id: "1",
        username: "Joshua",
        profileImage: "https://images.pexels.com/photos/2078467/pexels-photo-2078467.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2",
        isOnline: false,
        hasNewMessages: false,
        messageOverview: "You: I've made I've made loren ipsum made loren ipsum made loren ipsum made loren ipsum made loren ipsum",
        lastMessageDate: "4:25 PM",
        messages: []
    },
    users: generateUsers(mockUsernames),
    toUserId: "-1",
}

export const MockStore = ({ state, children }) => {
    return <Provider
        store={configureStore({
            reducer: {
                messaging: createSlice({
                    name: "messaging",
                    initialState: state,
                    reducers: {
                        changeToUserId: (state, action: PayloadAction<string>) => {
                            state.toUserId = action.payload
                        },
                    }
                }).reducer
            }
        })}>
        {children}
    </Provider>
}