import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import Status from './Status';

export default combineReducers(new Status() as any);