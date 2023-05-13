import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ChatHistory, Message, User} from "../../types/index"

export interface MessagingState {
    inbox: ChatHistory[]
    user: User | null
    toUser: User | null
    inboxIndex: number
}

export const initialState: MessagingState = {
    inbox: [],
    user: null,
    toUser: null,
    inboxIndex: -1
}

export const messagingSlice = createSlice({
    name: 'messaging',
    initialState,
    reducers: {
        changeUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            console.log(state.user, 'stateUser')
        },
        changeToUser: (state, action: PayloadAction<User>) => {
            const toUser = action.payload
            state.toUser = toUser
            console.log(state.inbox[0].from, state.user.id, 'length')
            const idx = state.inbox.findIndex(({from, to}) => {
                return state.user && from.id === state.user.id && toUser.id === to.id
            })

            if (idx !== -1) {
                state.inboxIndex = idx
            }
        },
        updateInbox: (state, action: PayloadAction<ChatHistory>) => {
            console.log('inbox', state.inbox)
            state.inbox.push(action.payload)
            console.log('inbox', state.inbox)
        },
        fillInbox: (state, action: PayloadAction<ChatHistory[]>) => {
            state.inbox = action.payload
            console.log('stateInbox', state.inbox)
        },
        consumeMessage: (state, action: PayloadAction<Message>) => {
            const inbox  = state.inbox
            const {fromUserId, toUserId} = action.payload
            
            const idx = inbox.findIndex(item => fromUserId === item.from.id && toUserId === item.to.id )

            if (idx !== -1) {
                state.inbox[idx].messages.push(action.payload)
            }
        },
    }
})

export const { changeUser, changeToUser, updateInbox, fillInbox, consumeMessage } = messagingSlice.actions

export default messagingSlice.reducer