import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './containers/App'
import AboutPage from './containers/AboutPage'
import PromoCodeListPage from './containers/PromoCodeListPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PromoCodeListPage}/>
        <Route path="/about" component={AboutPage} />
    </Route>
);
