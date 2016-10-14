import { put, take, fork, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga'
import { readPromoCodes } from '../services/api'
import * as actions from '../actions'

export function* loadPromoCodes() {
    const promoCodes = yield readPromoCodes();
    yield put({type:'PROMO_CODES_RECEIVED', promoCodes})
}

export function* watchForLoadPromoCodes() {
    while(true) {
        yield take(actions.LOAD_PROMO_CODES);
        yield call(loadPromoCodes);
    }
}
