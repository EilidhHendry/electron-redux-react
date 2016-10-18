import React, { Component } from 'react'
import { Link } from 'react-router'

import Pagination from './Pagination'

export default class PromoCodeList extends Component {
    constructor(props) {
        super(props)
        this.handleloadNextClick = this.handleloadNextClick.bind(this)
        this.handleloadPreviousClick = this.handleloadPreviousClick.bind(this)
    }

    componentDidMount() {
        this.props.loadPromoCodes();
    }

    handleloadNextClick() {
        this.props.loadPromoCodes(this.props.next);
    }

    handleloadPreviousClick(){
        this.props.loadPromoCodes(this.props.previous)
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
                    onLoadNextClick={this.handleloadNextClick}
                    onLoadPreviousClick={this.handleloadPreviousClick}/>
            </div>
        );
    }
}
