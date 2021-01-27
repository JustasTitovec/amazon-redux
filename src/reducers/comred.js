import { appReducer } from './index';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  cbc: appReducer,
});

export default reducer;
