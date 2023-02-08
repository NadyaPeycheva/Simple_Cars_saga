
export const getAllCarsReducer=(state=[],action)=>{
    if(action.type ==='GET_ALL_CARS_SUCCESS'){
        return action.payload;
    }else if(action.type ==='GET_ALL_CARS_UNSUCCESS'){
        return [];
    }
    return state;
}