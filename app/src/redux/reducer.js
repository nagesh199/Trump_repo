import { TODO } from "./actiontype";


const insitState = {
    Todo_DATA: [],
}
export  const reducer =(state=insitState,{type,payload})=>{
    switch(type){
      case  TODO: {
          return {
               ...state,
               Todo_DATA:[...state.Todo_DATA,payload]
          }
      }
     
      
      default : 
          return state
      
    }
}