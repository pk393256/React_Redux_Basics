import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem } from '../Redux/action';
import { toggleItem } from '../Redux/action';
import { useEffect } from 'react';

export const TodoList=()=>{
    const {todos}=useSelector((state)=>state);
    console.log('todos',todos)
   
    // useEffect((()=>get(todos,fill)),[todos])
    const dispatch=useDispatch();

    return (
        <div>
            {todos.map((todo)=>(
                <div key={todo.id}>
                    <p >{todo.title}{'-->'}{todo.status?"Complete":"Incomplete"}</p>
                    <button onClick={()=>dispatch(toggleItem(todo.id))}>Toggle</button>
                    <button onClick={()=>dispatch(removeItem(todo.id))}>Delete</button>
                </div>
            ))}
        </div>
    )

}