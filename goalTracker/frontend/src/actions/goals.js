import axios from 'axios';

import { GET_GOALS, DELETE_GOAL, ADD_GOAL } from './types';

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

export const deleteGoal = (id) => dispatch => {
    axios.delete(`/api/goals/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_GOAL,
                payload: id
            });
        }).catch(err => console.log(err));
}

// ADD GOAL

export const addGoal = (goal) => dispatch => {
    axios.post("/api/goals/", goal)
        .then(res => {
            dispatch({
                type: ADD_GOAL,
                payload: res.data
            });
        }).catch(err => console.log(err));
}