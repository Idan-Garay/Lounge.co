import { io } from 'socket.io-client';

const URL: string = 'http://localhost:3000'

export const socket = io(URL, {autoConnect: false});


socket.onAny((event, ...args) => {
    console.log(event, args);
});