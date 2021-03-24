import { GET_GOALS, DELETE_GOAL, ADD_GOAL, COMPLETE_GOAL } from '../actions/types.js';

const initialState = {
    goals: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GOALS:
            return {
                ...state,
                goals: action.payload
            };
        case DELETE_GOAL:
            return {
                ...state,
                goals: state.goals.filter(goal => goal.id !== action.payload)
            };
        case ADD_GOAL:
            return {
                ...state,
                goals: [...state.goals, action.payload]
            }
        case COMPLETE_GOAL:
            return {
                ...state,
                goals: state.goals.map(goal => (goal.id === action.payload.id) ? action.payload : goal),
            }
        default:
            return state;
    }
}