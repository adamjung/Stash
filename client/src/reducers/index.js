import { combineReducers } from 'redux';

import current from './itemsReducer';
import closet from './closetReducer';
import isLoading from './loadingReducer';

const appReducer =  combineReducers({
  current,
  closet,
  isLoading,
});

export default appReducer;