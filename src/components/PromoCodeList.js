import React, { Component } from 'react'
import { Link } from 'react-router'

export default class PromoCodeList extends Component {

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
        );
    }
}
