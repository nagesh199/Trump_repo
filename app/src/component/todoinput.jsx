import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { todo } from "../redux/action";
import { Todoitem } from "./todoitem";
import { Button, TextField } from "@mui/material";

export const Todoinput = ()=>{
    const [text,setText] = useState('');
    const dispatch = useDispatch()
    const handleClick =()=>{
        dispatch(todo(text))
    }
    return <div style={{marginTop:"30px"}}>
         <TextField size="small" variant="outlined" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
          <Button variant="contained" onClick={handleClick}>Submit</Button>
        <Todoitem/>
    </div>
}