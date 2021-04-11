import axios from 'axios';

import { USER_LOADED, USER_LOADING, AUTH_ERROR } from './types'

// Check token & load user

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'applications/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('/api/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            console.log(err);
            dispatch({
                type: AUTH_ERROR
            });
        });

}