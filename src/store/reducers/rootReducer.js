import { combineReducers } from 'redux';
import {listItemReducer} from './ListItemReducer'

const rootReducer = combineReducers({
  items: listItemReducer
});

export default rootReducer