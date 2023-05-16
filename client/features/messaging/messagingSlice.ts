import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Message, User} from "../../types/index"

export interface MessagingState {
    user: User | null
    users: User[]
    toUserId: number
}

export const initialState: MessagingState = {
    user: null,
    users: [],
    toUserId: -1,
}

export const messagingSlice = createSlice({
    name: 'messaging',
    initialState,
    reducers: {
        changeUser: (state, action: PayloadAction<User>) => {
            const user = action.payload
            user.hasNewMessages = false
            state.user = user
            console.log(state.user, 'stateUser')
        },
        changeToUserId: (state, action: PayloadAction<number>) => {
            state.toUserId = action.payload
        },
        sendMessage: (state, action: PayloadAction<Message>) => {
            const message = action.payload
            const toUserIdx = state.users.findIndex(user => user.id === message.toUserId)
            if (toUserIdx !== -1) {
                state.users[toUserIdx].messages.push(message)
                console.log('message pushed')
            }
        },
        changeUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload
        },
        addUserToUsers: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload)
        },
        receiveMessage: (state, action: PayloadAction<Message>) => {
            const message = action.payload
            const fromUserIdIndex = state.users.findIndex(user => user.id === message.fromUserId)
            if (fromUserIdIndex !== -1) {
                state.users[fromUserIdIndex].messages.push(message)
                state.users[fromUserIdIndex].hasNewMessages = true
            }

        }
    }
})

export const { changeUser, changeToUserId, changeUsers, addUserToUsers, receiveMessage, sendMessage} = messagingSlice.actions

export default messagingSlice.reducer