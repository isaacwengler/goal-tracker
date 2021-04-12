import axios from 'axios';

import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, GET_ERRORS, REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_GOALS } from './types'

// Check token & load user

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    axios.get('/api/auth/user', tokenConfig(getState))
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

// Login
export const login = (username, password) => dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body
    const body = JSON.stringify({ username, password });

    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            const errors = {
                msg: "Username or password is incorrect",
                status: err.response.status,
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })

            dispatch({
                type: LOGIN_FAIL
            });
        });

}

// Register
export const register = ({ username, password, email }) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Request Body
    const body = JSON.stringify({ username, email, password });

    axios
        .post('/api/auth/register', body, config)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
        }).catch(err => {
            console.log(err);
            const errors = {
                msg: "Username or email already exists",
                status: err.response.status,
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })

            dispatch({
                type: REGISTER_FAIL
            });
        });

}

export const failRegister = () => dispatch => {
    const errors = {
        msg: "Passwords do not match",

    }
    dispatch({
        type: GET_ERRORS,
        payload: errors
    })

    dispatch({
        type: REGISTER_FAIL
    });
}

// Logout
export const logout = () => (dispatch, getState) => {

    axios.post('/api/auth/logout/', null, tokenConfig(getState))
        .then(res => {
            dispatch({ type: CLEAR_GOALS })
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        }).catch(err => {
            console.log(err);
        });

}


export const tokenConfig = (getState) => {
    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    } else {
        return null;
    }
    return config;
}