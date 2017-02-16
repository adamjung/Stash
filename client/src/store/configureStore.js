import { createStore } from 'redux';
import stores from '../reducers/itemsReducer.js';
import rootReducer from '../reducers/index.js';

// const initialState = {
//   stores: {},
//   // closet: {},
// };

// This will be used at the entry point of our application
export default function configureStore() {
  return createStore(
    // itemsReducer,
    rootReducer
    // initialState,
  );
}