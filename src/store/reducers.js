import { combineReducers } from 'redux';
import PeopleState from './people/reducer';

const reducers = combineReducers({
  PeopleState,
});
export default reducers;
