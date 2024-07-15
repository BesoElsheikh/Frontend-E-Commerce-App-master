import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
const initailState = {}

const meddleware = [thunk]

const store = createStore(rootReducer, initailState, composeWithDevTools(applyMiddleware(...meddleware)))

export default store



// import {configureStore} from '@reduxjs/toolkit';
// import categoryReducer from './reducers/categoryReducer'


// const store = configureStore({
// reducer:{
  
//   category:categoryReducer,

//  }
// }); 

// export default store;