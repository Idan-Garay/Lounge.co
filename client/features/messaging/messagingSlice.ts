import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ChatHistory, Message, User} from "../../types/index"

export interface MessagingState {
    inbox: ChatHistory[]
    user: User | null
    toUser: User | null
    chatHistroyIndex: number
}

export const initialState: MessagingState = {
    inbox: [],
    user: null,
    toUser: null,
    chatHistroyIndex: -1
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
            state.toUser = action.payload
        },
        updateInbox: (state, action: PayloadAction<ChatHistory>) => {
            console.log('inbox', state.inbox)
            state.inbox.push(action.payload)
            console.log('inbox', state.inbox)
        },
        fillInbox: (state, action: PayloadAction<ChatHistory[]>) => {
            state.inbox = action.payload
        },
        consumeMessage: (state, action: PayloadAction<Message>) => {
            const inbox  = state.inbox
            const {from, to} = action.payload
            
            const idx = inbox.findIndex(item => from === item.from.id && to === item.to.id )

            if (idx !== -1) {
                state.inbox[idx].messages.push(action.payload)
            }
        },
    }
})

export const { changeUser, changeToUser, updateInbox, fillInbox, consumeMessage } = messagingSlice.actions

export default messagingSlice.reducer