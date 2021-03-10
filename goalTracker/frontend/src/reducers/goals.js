import { GET_GOALS } from '../actions/types.js';

const initialState = {
    goals: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GOALS:
            return {
                ...state,
                goals: action.payload
            }
        default:
            return state;
    }
}