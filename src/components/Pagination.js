import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Pagination extends Component {

    render() {
        const {count, next, previous} = this.props;

        return (
            <div>
                <p>Count: {count}</p>
                { next ? <p>Next: { next }</p> : false }
                { previous ? <p>Previous: { previous }</p> : false }
            </div>
        );
    }
}
