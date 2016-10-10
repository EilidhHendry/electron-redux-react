import { combineReducers } from 'redux';
import * as actions from '../actions';

const promoCodesInitialState = [];
const promoCodesReducer = (state = promoCodesInitialState, action) => {
  switch (action.type) {
    case actions.FETCHED_PROMO_CODES:
      return action.promo_codes.map(promo_code => {
        const statePromoCode = state.find(s => s.id === promo_code.id);
        if (statePromoCode && statePromoCode.loaded) {
          return statePromoCode;
        }
        return promo_code;
      });
    case actions.FETCHING_PROMO_CODE:
      action.promo_code = {
        ...action.promo_code,
        loading: true
      };
      return state.map(promo_code => {
        if (promo_code.id === action.promo_code.id) {
          return action.promo_code;
        }
        return promo_code;
      });
    case actions.FETCHED_PROMO_CODE:
      action.promo_code = {
        ...action.promo_code,
        updated: new Date(),
        loading: false,
        loaded: true
      };
      if (!action.promo_code.url) {
        action.promo_code.url = '';
      }
      return state.map(promo_code => {
        if (promo_code.id === action.promo_code.id) {
          return {
            ...promo_code,
            ...action.promo_code,
          };
        }
        return promo_code;
      });
  }
}
export default promoCodesReducer;
