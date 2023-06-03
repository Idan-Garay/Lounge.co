import { Provider } from "react-redux"
import ChatBox from "./ChatBox"
import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit"
import React from "react"
// import component
// export default stories Interface {component, title}
// export individual story {args: {...props}}

const MockState = {
    user: {
        id: "1",
        username: "User 1",
        isOnline: false,
        hasNewMessages: false,
        messages: []
    },
    isSelected: false
}

const MockStore = ({ chatBoxState, children }) => {
    return <Provider
        store={configureStore({
            reducer: {
                chatBox: createSlice({
                    name: 'chatBox',
                    initialState: chatBoxState,
                    reducers: {
                        changeToUserId: (state, action: PayloadAction<string>) => {
                            state.toUserId = action.payload
                        }
                    }
                }).reducer
            }
        })}
    >
        {children}
    </Provider>
}


export default {
    component: ChatBox,
    title: 'ChatBox'
}

export const Selected = {
    decorators: [(story) => <MockStore chatBoxState={MockState}>{story()}</MockStore>],
    args: {
        user: MockState.user,
        isSelected: true
    }
}

export const NotSelected = {
    decorators: [(story) => <MockStore chatBoxState={MockState}>{story()}</MockStore>],
    args: {
        user: "User 1",
        isSelected: false
    }
}