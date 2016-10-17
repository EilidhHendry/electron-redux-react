import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './containers/App'
import HomePage from './containers/HomePage'
import PromoCodeListPage from './containers/PromoCodeListPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/promo-codes" component={PromoCodeListPage} />
    </Route>
);
