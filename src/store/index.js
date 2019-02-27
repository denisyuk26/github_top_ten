import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import {getUsersList, getFullUserInfo, getTotalUserStars} from './reducers';
import thunk from "redux-thunk";


const store = createStore(
    combineReducers({
        
        users: getUsersList,
        fullUserInfo: getFullUserInfo,
        totalStars: getTotalUserStars,
        error: getUsersList
        
    }),
    
    {},
    applyMiddleware(logger, thunk),
    
  );
  
// export const urlApi = 'https://api.opendota.com';
export default store;
