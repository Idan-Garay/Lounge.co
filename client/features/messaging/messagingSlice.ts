import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {User} from "../../types/index"

export interface MessagingState {
    inbox: User[],
    user: User | null
}

export const initialState: MessagingState = {
    inbox: [],
    user: null
}

export const messagingSlice = createSlice({
    name: 'messagin',
    initialState,
    reducers: {
        addToInbox: (state, action: PayloadAction<User>) => {
            state.inbox = state.inbox.concat(action.payload)
        },
        logout: (state, action: PayloadAction<User>) => {
            const idx = state.inbox.findIndex(user => user.username === action.payload.username)
            if (idx !== -1) {
                state.inbox[idx].isOnline = false
            }
        },
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
    }
})

export const { addToInbox, logout } = messagingSlice.actions

export default messagingSlice.reducer