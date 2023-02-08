const registerError=''
export const registerUserReducer=(state=registerError,action)=>{
    if(action.type === 'REGISTER_USER_SUCCESS'){
        return ''
    }else if(action.type === 'REGISTER_USER_UNSUCCESS'){
        return action.payload
    }
    return state;
}