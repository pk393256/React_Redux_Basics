import React from 'react';
import {v4 as uuid} from 'uuid';
import {useDispatch} from 'react-redux';
import { addItem } from '../Redux/action';
export const TodoInput=()=>{
    const [inputValue,setInputValue]=React.useState('')
    const dispatch=useDispatch();
    const handler=()=>{
        let payload={
            title:inputValue,
            status:false,
            id:uuid()
        };
        dispatch(addItem(payload))
        // console.log(payload)
    }
    return (
        <>
        <input type='text' placeholder='add' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={handler}>Add</button>
        </>
    )


}