const initialState={newCar:'',error:''}
export const addCarReducer=(state=initialState,action)=>{
if(action.type==='ADD_CAR_SUCCESS'){
    return {newCar:action.payload,error:''}
}
return state;
}