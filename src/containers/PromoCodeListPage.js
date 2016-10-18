import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions'
import PromoCodeList from '../components/PromoCodeList';


function mapStateToProps(state) {
    return ({
        count: state.count,
        next: state.next,
        previous: state.previous,
        results: state.results,
    })
}
export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(actions, dispatch)
)(PromoCodeList);
