import { put, take, fork, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga'
import { readPromoCodes } from '../services/api'
import * as actions from '../actions'

export function* loadPromoCodes() {
    const promoCodes = yield readPromoCodes();
    yield put({type: actions.PROMO_CODES_RECEIVED, promoCodes})
}

export function* watchForLoadPromoCodes() {
    yield takeEvery(actions.LOAD_PROMO_CODES, loadPromoCodes)
}
