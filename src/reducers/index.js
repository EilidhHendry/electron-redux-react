import { combineReducers } from 'redux';
import * as actions from '../actions';

const defaultState = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

export default function promoCodes(state = defaultState, action) {
    switch(action.type) {
        case actions.PROMO_CODES_RECEIVED:
            return {
                ...state,
                count: action.promoCodes.response.count,
                next: action.promoCodes.response.next,
                previous: action.promoCodes.response.previous,
                results: action.promoCodes.response.results
            };
        default:
            return state
    }
}
