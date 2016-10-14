import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions'
import PromoCodeList from '../components/PromoCodeList';

export default connect(
    state => ({
        count: state.count,
        next: state.next,
        previous: state.previous,
        results: state.results
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(PromoCodeList);
