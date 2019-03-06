import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import {getUsersError, getFullUserInfo} from './reducers';
import thunk from "redux-thunk";


const store = createStore(
    combineReducers({
        fullUserInfo: getFullUserInfo,
        error: getUsersError    
    }),
    
    {},
    applyMiddleware(logger, thunk),
    
  );
  
// export const urlApi = 'https://api.opendota.com';
export default store;
