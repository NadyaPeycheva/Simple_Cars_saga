const initialState={newCar:'',error:''}
export const addCarReducer=(state=initialState,action)=>{
if(action.type==='ADD_CAR_SUCCESS'){
    return {newCar:action.payload,error:''}
}else if(action.type==='ADD_CAR_UNSUCCESS'){
    return {newCar:'',error:action.payload}
}
return state;
}