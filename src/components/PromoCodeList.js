import React, { Component } from 'react'
import { Link } from 'react-router'

import Pagination from './Pagination'

export default class PromoCodeList extends Component {

    componentDidMount() {
        this.props.loadPromoCodes();
    }

    render() {
        const {count, next, previous, results} = this.props;
        return (
            <div>
                <p><Link to="/">Back</Link></p>
                <ul>
                    {results.map(({id, code, start_date, end_date}) => (
                        <li key={id}>
                            {code} {start_date}-{end_date}
                        </li>
                    ))}
                </ul>
                <Pagination
                    count={count}
                    previous={previous}
                    next={next} />
            </div>
        );
    }
}
