import authReducer from './authReducer';
import storeReducer from './storeReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    store: storeReducer,
    firestore: firestoreReducer
})

export default rootReducer;