
export const errorReducer=(state='',action)=>{
    if(action.type === 'ERROR'){
        return action.payload
    }else if(action.type === 'REMOVE_ERROR'){
        return ''
    }
return state;
}