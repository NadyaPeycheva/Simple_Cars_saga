const changedCarErr=false
export const changeCarReducer=(state=changedCarErr,action)=>{
    if(action.type==='CHANGE_CAR_SUCCESS'){
        return false
    }
    return state
}