export const ActionWithPayload = (type="",payload=[])=>{
    return{
        type:type,
        payload:payload,
    }
}
export const ActionWithoutPayload = (type="")=>{
    return{
        type:type,
        payload:[],
    }
}