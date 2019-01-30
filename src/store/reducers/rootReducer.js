import authReducer from './authReducer';
import storeReducer from './storeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    store: storeReducer
})

export default rootReducer;