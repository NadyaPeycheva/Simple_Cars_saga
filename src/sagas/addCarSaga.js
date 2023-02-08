import { put, take, call } from "redux-saga/effects";
import { addCarSuccess,addCarUnSuccess, getCars } from "../components/catalog/carActions";

export function* addCarSaga(addCarApi){
    while(true){
        const action=yield take('ADD_CAR');

        yield call(addCar,addCarApi,action.payload)
    }
}

function* addCar(addCarApi,data){
    const {car,token}=data;
try{
    const res=yield call(addCarApi,car,token);
    yield put(addCarSuccess(res));
    yield put(getCars())

}catch(error){
    yield put(addCarUnSuccess(error.status));
}
}