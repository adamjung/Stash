import { combineReducers } from 'redux';

import user from './userReducer';
import current from './itemsReducer';
import closet from './closetReducer';
import isLoading from './loadingReducer';

const appReducer =  combineReducers({
  user,
  current,
  closet,
  isLoading,
});

export default appReducer;