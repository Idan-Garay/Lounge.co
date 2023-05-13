export interface User {
    id: number
    username: string
    isOnline: boolean
}

export interface Message {
    fromUserId: number
    toUserId: number
    text: string
}

export interface ChatHistory {
    to: User
    from: User
    messages: Message[]
}

export interface ChatHistories {
    histories: ChatHistory[]
}