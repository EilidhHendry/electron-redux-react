import { call, put } from 'redux-saga';
import * as actions from '../actions'

function fetchPromoCode(promo_code_id) {
    return fetch('../../data/codes.json').then(response => response.json());
}

function fetchPromoCodes() {
  return fetch('../../data/codes.json')
    .then(response => response.json())
    .then(promo_codes => promo_codes.map(promo_code_id => ({
        id: promo_code_id,
        loaded: false,
        loading: false
      })));
}

function* watchRequestPromoCodes(getState) {
  while(true) {
    const { limit } = yield take(actions.REQUEST_PROMO_CODES);
    try {
      const allPromoCodes = yield call(fetchPromoCodes);
      yield put(actions.fetchedPromoCodes(allPromoCodes));

      const promoCodes = allPromoCodes.filter(promo_code => {
        const promoFromState = getState().promo_codes.find(s => s.id === promo_code.id);
        if (!promoFromState) {
          return true;
        }
        if (!promoFromState.loaded) {
          return true;
        }
        return false;
      }).slice(0, limit);

      yield promoCodes.map(function* (promo_code) {
        yield call(updatePromoCode, promo_code)
      });
    } catch (ex) {
      console.log('error while fetching promo codes', ex);
    }
  }
}

function* updatePromoCode(promo_code) {
  yield put(actions.fetchingPromoCode(promo_code));
  try {
    const data = yield call(fetchPromoCode, promo_code.id);
    yield put(actions.fetchedPromoCode(data));
  } catch (e) {

  }
}

function* watchRequestPromoCode() {
  while (true) {
    const { promo } = yield take(actions.REQUEST_UPDATE_PROMO_CODE);
    yield fork(updatePromoCode, promo);
  }
}

export default function* root() {
  const { store } = yield take('APP_INIT');
  yield fork(watchRequestPromoCodes, store.getState);
  yield fork(watchRequestUpdatePromoCode);
  yield put(actions.requestPromoCodes());
}
