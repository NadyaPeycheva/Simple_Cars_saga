const initialUserState = {};
export const loginUserReducer = (state = initialUserState, action) => {
  if (action.type === "LOGIN_USER_SUCCESS") {
    return action.payload;
  } else if (action.type === "FIRST_USER_CHECK") {
    return action.payload;
  } else if (action.type === "LOGIN_USER_UNSUCCESS") {
    return {};
  }
  return state;
};
