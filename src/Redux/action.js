export const Add_Item='Add_Item';
export const Toggle_Item="Toggle_Item";
export const Remove_Item="Remove_Item";

export const addItem=(payload)=>({
    type:Add_Item,
    payload
})
export const toggleItem=(data)=>({
    type:Toggle_Item,
    payload:data
})
export const removeItem=(data)=>({
    type:Remove_Item,
    payload:data
})