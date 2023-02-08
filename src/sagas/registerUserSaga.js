import { take, call,put } from "redux-saga/effects";
import { registerSuccess,registerUnSuccess } from "../components/register/registerAction";

export default function* registerUserSaga(registerApi) {
  while (true) {
    const action = yield take("REGISTER_USER");

    yield call(registerUser, registerApi, action.payload);
  }
}

function*registerUser(registerApi, userData) {
  try {
    const res = yield call(registerApi,userData);

    yield put(registerSuccess());

  } catch (error) {
    yield put(registerUnSuccess(error.status));
  }
}
