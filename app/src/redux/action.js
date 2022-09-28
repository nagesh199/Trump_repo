import { TODO } from "./actiontype";


export const todo = (payload)=>{
    console.log(payload,"payload")
    return {
        type:TODO,
        payload
    }
}


