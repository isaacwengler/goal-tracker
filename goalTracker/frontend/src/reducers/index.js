import { combineReducers } from 'redux';
import goals from './goals';
import errors from './errors';


export default combineReducers({
    goals,
    errors,
});