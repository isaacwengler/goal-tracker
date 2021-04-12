import axios from 'axios';
import { tokenConfig } from './auth';

import { GET_GOALS, DELETE_GOAL, ADD_GOAL, COMPLETE_GOAL, GET_ERRORS } from './types';

// GET GOALS 
export const getGoals = () => (dispatch, getState) => {
    axios.get('/api/goals/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_GOALS,
                payload: res.data
            });
        }).catch(err => {
            const errors = {
                msg: "Log in to view goals",
                status: err.response.status,
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        });
}


// DELETE GOAL

export const deleteGoal = (id) => (dispatch, getState) => {
    axios.delete(`/api/goals/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_GOAL,
                payload: id
            });
        }).catch(err => console.log(err));
}

// ADD GOAL

export const addGoal = (goal) => (dispatch, getState) => {
    axios.post("/api/goals/", goal, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_GOAL,
                payload: res.data
            });
        }).catch(err => {
            const errors = {
                msg: "Goal is required",
                status: err.response.status,
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        });
}

// COMPLETE GOAL

export const completeGoal = (id, goal, status) => (dispatch, getState) => {
    const modify = {
        id: id,
        name: goal,
        complete: status
    }
    axios.put(`/api/goals/${id}/`, modify, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: COMPLETE_GOAL,
                payload: modify
            });
        }).catch(err => console.log(err));
}

// RETURN ERRORS
const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
    }
}