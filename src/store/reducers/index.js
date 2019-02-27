import {FETCH_USERSLIST_SUCCESFUL, GET_FULL_USER_SUCCES, GET_TOTAL_USER_STARS_SUCCES, FETCH_USERLIST_ERROR} from '../types'
const initialState = {
  status: false,
  data: []
};
export function getUsersList(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERSLIST_SUCCESFUL:
    return {status: false, data: [...action.payload]};
    case FETCH_USERLIST_ERROR:
    return {status: true, error: 'Too many connections'};
    default:
      return state;

  }
}

export function getFullUserInfo (state = [], action) {
  switch (action.type) {
    case GET_FULL_USER_SUCCES:
      return action.payload;
    default:
      return state;
  }
}

export function getTotalUserStars (state = [], action) {
  switch (action.type) {
    case GET_TOTAL_USER_STARS_SUCCES:
      return action.payload;
    default:
      return state;
  }
}