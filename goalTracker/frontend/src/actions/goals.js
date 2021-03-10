import axios from 'axios';

import { GET_GOALS } from './types';

// GET GOALS 
export const getGoals = () => dispatch => {
    axios.get('/api/goals/')
        .then(res => {
            dispatch({
                type: GET_GOALS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}