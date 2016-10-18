import { put, take, fork, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga'
import { readPromoCodes } from '../services/api'
import * as actions from '../actions'

export function* loadPromoCodes(action) {
    const page = action.page
    if (page) {
        const promoCodes = yield call(readPromoCodes, page)
        yield put({type: actions.PROMO_CODES_RECEIVED, promoCodes})
    } else {
        const promoCodes = yield call(readPromoCodes, 'http://local.trustedhousesitters.com:8000/api/v2/admin/promo_codes/?page=1')
        yield put({type: actions.PROMO_CODES_RECEIVED, promoCodes})
    }
}

export function* watchForLoadPromoCodes() {
    yield takeEvery(actions.LOAD_PROMO_CODES, loadPromoCodes)
}
