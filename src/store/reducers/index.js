import { GET_FULL_USER_SUCCESS, FETCH_USERLIST_ERROR } from "../types";
const initialState = {
  status: false,
  data: []
};
export function getUsersError(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERLIST_ERROR:
      return { status: true, error: "Too many connections" };
    default:
      return state;
  }
}

export function getFullUserInfo(state = [], action) {
  switch (action.type) {
    case GET_FULL_USER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
