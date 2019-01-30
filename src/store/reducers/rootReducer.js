import storeReducer from './storeReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    store: storeReducer
})

export default rootReducer;