import { put, take, call } from "redux-saga/effects";
import { getCarsSuccess,getCarsUnSuccess } from "../components/catalog/carActions";

export default function* getAllCarsSaga(getCarsApi) {
  while (true) {
    yield take("GET_ALL_CARS");
    yield call(getAllCars, getCarsApi);
  }
}

function* getAllCars(getCarsApi) {
  try {
    const res = yield call(getCarsApi);
    yield put(getCarsSuccess(res));
  } catch (error) {
    yield put(getCarsUnSuccess(error));
  }
}
