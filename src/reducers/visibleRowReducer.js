
export const visibleRowReducer=(state=false,action)=>{
    if(action.type==='VISIBLE_ROW'){
        return true;
    }else if(action.type==='INVISIBLE_ROW'){
        return false;
    }
return state;
}