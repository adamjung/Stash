import { combineReducers } from 'redux';

import current from './itemsReducer';

const appReducer =  combineReducers({
  current,
});

export default appReducer;