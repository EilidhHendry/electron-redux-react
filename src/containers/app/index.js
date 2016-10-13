import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'

export class App extends Component {
    componentDidMount() {
        this.props.loadPromoCodes();
    }
    render() {
        const {count, next, previous, results} = this.props;
        return (
            <div>
                <h3>Nav</h3>
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                </ul>
                Count: {count},
                Next: <a href={next}>{next}</a>,
                Previous: {previous}
                <ul>
                    {results.map(({id, code, start_date, end_date}) => (
                        <li key={id}>
                            {code} {start_date}-{end_date}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default connect(
    state => ({
        count: state.count,
        next: state.next,
        previous: state.previous,
        results: state.results
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(App)
