import { combineReducers } from 'redux';
import {listItemReducer, msgReducer, stopReducer} from './ListItemReducer'

const rootReducer = combineReducers({
  items: listItemReducer,
  msgs: msgReducer,
  stop: stopReducer,
});

export default rootReducer