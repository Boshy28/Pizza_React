import { combineReducers } from '@reduxjs/toolkit';

import filters from './filters';
import pizzas from './pizzas';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  pizzas,
  cart,
});

export default rootReducer;
