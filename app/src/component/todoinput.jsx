import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { todo } from "../redux/action";
import { Todoitem } from "./todoitem";


export const Todoinput = ()=>{
    const [text,setText] = useState('');
    const dispatch = useDispatch()
    const handleClick =()=>{
        dispatch(todo(text))
    }
    return <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleClick}>Submit</button>
        <Todoitem/>
    </div>
}