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
                count: action.promoCodes.count,
                next: action.promoCodes.next,
                previous: action.promoCodes.previous,
                results: action.promoCodes.results
            };
        default:
            return state
    }
}
