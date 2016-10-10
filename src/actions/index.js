export const REQUEST_PROMO_CODES = 'REQUEST_PROMO_CODES';
export const FETCHED_PROMO_CODES = 'FETCHED_PROMO_CODES';

export const FETCHING_PROMO_CODE = 'FETCHING_PROMO_CODE';
export const FETCHED_PROMO_CODE = 'FETCHED_PROMO_CODE';

export const REQUEST_UPDATE_PROMO_CODE = 'REQUEST_UPDATE_PROMO_CODE';

export function requestPromoCodes(limit = 50) {
  return {
    type: REQUEST_PROMO_CODES,
    limit
  };
}

export function fetchedPromoCodes(promo_codes) {
  return {
    type: FETCHED_PROMO_CODES,
    promo_codes
  };
}

export function fetchingPromoCode(promo_code) {
  return {
    type: FETCHING_PROMO_CODE,
    promo_code
  };
}

export function requestUpdatePromoCode(promo_code) {
  return {
    type: REQUEST_UPDATE_PROMO_CODE,
    promo_code
  }
}
