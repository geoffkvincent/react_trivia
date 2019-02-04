import { combineReducers } from 'redux';
import categories from './categories';
import cards from './cards'
import games from './games'

const rootReducer = combineReducers({
  categories,
  cards,
  games
});

export default rootReducer;
