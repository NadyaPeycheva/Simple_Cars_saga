const changedCarErr=false
export const changeCarReducer=(state=changedCarErr,action)=>{
    if(action.type==='CHANGE_CAR_SUCCESS'){
        return false
    }else if(action.type==='CHANGE_CAR_UNSUCCESS'){
        return action.payload
    }
    return state
}