const deleteCarError = false;
export const deleteCarReducer = (state = deleteCarError, action) => {
  if (action.type === "DELETE_CAR_SUCCESS") {
    return false;
  } else if (action.type === "DELETE_CAR_UNSUCCESS") {
    return action.payload;
  }
  return state;
};
