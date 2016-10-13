import { put, take, fork, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga'
import { fetchPromoCodes } from '../api'
import * as actions from '../actions'

export function* loadPromoCodes() {
    const promoCodes = yield fetchPromoCodes();
    yield put({type:'PROMO_CODES_RECEIVED', promoCodes})
}

export function* watchForLoadPromoCodes() {
    while(true) {
        yield take(actions.LOAD_PROMO_CODES);
        yield call(loadPromoCodes);
    }
}
