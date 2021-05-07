import { combineReducers } from 'redux'

import counterReducder from './counterReducer';
import loggedReducer from './loggedReducer';


const allReducers = combineReducers({
  counter: counterReducder,
  logged: loggedReducer
});

export default allReducers;

export type RootState = {
  counter: number,
  logged: boolean
}