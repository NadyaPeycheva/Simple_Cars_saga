import { take, call, put } from "redux-saga/effects";
import { loginUserSuccess,loginUserUnSuccess } from "../components/login/loginAction";

export function* loginSaga(loginApi) {
  while (true) {
    const action = yield take("LOGIN_USER");

    yield call(loginUser, loginApi, action.payload);
  }
}

function* loginUser(loginApi, userData) {
  try {
    const res = yield call(loginApi,userData);
    const user= {
      id:res.user.id,
      username:res.user.username,
      firstName:res.user.firstName,
      lastName:res.user.lastName,
      token:res.jwtToken
  }
    yield put(loginUserSuccess(user));
    yield localStorage.setItem('user',JSON.stringify(user));
  } catch (err) {
    yield put(loginUserUnSuccess(err.status));
  }
}
