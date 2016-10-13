export const PROMO_CODES_LOADED = "PROMO_CODES_LOADED";
export const LOAD_PROMO_CODES = "LOAD_PROMO_CODES";
export const PROMO_CODES_RECEIVED = "PROMO_CODES_RECEIVED"

export function loadPromoCodes() {
  return {
    type: LOAD_PROMO_CODES,
  }
}
