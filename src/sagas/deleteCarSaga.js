import { put, take, call } from "redux-saga/effects";
import { getCars,deleteCarSuccess,deleteCarUnSuccess } from "../components/catalog/carActions";

export function* deleteCarSaga(deteleCarApi){
    while(true){
       const action= yield take('DELETE_CAR');
        yield call(deleteCar,deteleCarApi,action.payload)

    }
}

function* deleteCar(deleteCarApi,payload){
    const{carId,userId,token}=payload
    try{
        const res=yield call(deleteCarApi,carId,userId,token);

        yield put(deleteCarSuccess());
        yield put(getCars())

    }catch(error){
        yield put(deleteCarUnSuccess(error.status));
    }

}