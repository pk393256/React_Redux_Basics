import {Add_Item,Remove_Item, Toggle_Item } from "./action";

export const reducer=(store,action)=>{
    switch(action.type){
        case Add_Item:
            return {todos:[...store.todos,action.payload]}
        case Toggle_Item:
            return {todos:store.todos.map((e)=>(
                e.id==action.payload ? {...e,status:!e.status} :e
            ))}
        case Remove_Item:
            return {
                todos:store.todos.filter((e)=>(
                    e.id!=action.payload
                ))
            }
        default:
        return store;
    }
}



//todo=[{id,work,status,}]