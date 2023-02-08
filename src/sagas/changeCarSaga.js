import { put, take, call } from "redux-saga/effects";
import { changeCarSuccess,changeCarUnSuccess, getCars } from "../components/catalog/carActions";

export function*changeCarSaga(changeCarApi){

    while(true){
        const action=yield take('CHANGE_CAR');

        yield call(changeCar,changeCarApi, action.payload)
    }

}

function*changeCar(changeCarApi,payload){
    const {newCarData,userId,token}=payload;
    try{
        const response=yield call(changeCarApi,newCarData,userId,token);
console.log(response);
        yield put(changeCarSuccess());
        yield put(getCars());

    }catch(error){
        yield put(changeCarUnSuccess(error.status));
    }
}