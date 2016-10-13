const API_ENDPOINT_LOCAL = "http://localhost:3000/promo_codes.json"
const API_ENDPOINT = "http://local.trustedhousesitters.com:8000/api/v2/admin/promo_codes/?format=json"

export const fetchPromoCodes = () => {
    return fetch(API_ENDPOINT).then(function (response) {
        return response.json().then(function (json) {
            return json
        })
    })
}
