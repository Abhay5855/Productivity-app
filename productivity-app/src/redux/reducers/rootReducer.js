
import { combineReducers } from 'redux'
import authReducer from './authReducer';
import {firestoreReducer} from 'redux-firestore'




const rootReducer = combineReducers({

      auth : authReducer,
      firestore : firestoreReducer,
      
})


export default rootReducer;