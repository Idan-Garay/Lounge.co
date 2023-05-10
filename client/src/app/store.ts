import {configureStore} from '@reduxjs/toolkit'
import messagingReducer from "../../features/messaging/messagingSlice"

export const store = configureStore({
    reducer: {messaging: messagingReducer},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch