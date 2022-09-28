import React from "react";
import { useSelector } from "react-redux";

export const Todoitem = ()=>{
     const item = useSelector((store)=>store.Todo_DATA);

    return <div>
        {item.map((el)=>{
            return <h2>{el}</h2>
        })}
            
    </div>
}