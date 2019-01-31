import authReducer from './authReducer';
import storeReducer from './storeReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    store: storeReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;