import { combineReducers } from 'redux';

import current from './itemsReducer';
import isLoading from './loadingReducer';

const appReducer =  combineReducers({
  current,
  isLoading,
});

export default appReducer;