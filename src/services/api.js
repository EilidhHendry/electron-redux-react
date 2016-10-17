import 'isomorphic-fetch';

const API_ENDPOINT = "http://local.trustedhousesitters.com:8000/"

const getFullUrl = url => {
    return `${API_ENDPOINT}/${url}`;
};

const responseHandler = (fetchPromise) => {
   return fetchPromise.then(function(response) {
       if (!response.ok) {
           throw Error(response.statusText);
       }
       return response;
   }).then(function(response) {
       return response.json();
   }).then(function(json) {
       return { response: json};
   }).catch(function(error) {
       return { error: error.message || 'Something bad happened.' }
   });
}

const api = {
   Post: ( url, data ) => {
       return responseHandler(
           fetch(url, {
               method: 'POST',
               headers: {
                   Accept: 'application/json',
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify(data),
           })
       );
   },
   Get: (url) => {
       return responseHandler(
           fetch(getFullUrl(url), {
               method: 'GET',
               credentials: 'include',
           })
       );
   },
   Delete: (url) => {
       return responseHandler(
           fetch(getFullUrl(url), {
               method: 'DELETE',
               credentials: 'include',
           })
       );
   }
}


// api services
//export const createPromoCode = code => api.Create('v1/session', {code: code});
export const readPromoCodes = () => api.Get('api/v2/admin/promo_codes');
//export const deleteSession = () => api.Delete('v1/session');
