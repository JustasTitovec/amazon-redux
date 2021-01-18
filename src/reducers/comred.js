import { addToBasket } from './index';
import { combineReducers } from 'redux';
import { red } from '@material-ui/core/colors';

const reducer = combineReducers({
  basket: addToBasket,
});

export default reducer;
