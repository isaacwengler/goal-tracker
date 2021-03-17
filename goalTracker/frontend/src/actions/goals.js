import axios from 'axios';

import { GET_GOALS, DELETE_GOAL } from './types';

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

// DELETE GOAL

export const deleteGoal = () => dispatch => {
    axios.delete(`/api/goals/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_GOAL,
                payload: res.data
            });
        }).catch(err => console.log(err));
}