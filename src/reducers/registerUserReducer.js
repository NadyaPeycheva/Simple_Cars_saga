const registerError=''
export const registerUserReducer=(state=registerError,action)=>{
    if(action.type === 'REGISTER_USER_SUCCESS'){
        return ''
    }
    return state;
}