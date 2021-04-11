import { combineReducers } from 'redux';
import goals from './goals';
import errors from './errors';
import auth from "./auth";


export default combineReducers({
    goals,
    errors,
    auth,
});