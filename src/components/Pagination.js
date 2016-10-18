import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Pagination extends Component {

    render() {
        const {count, onLoadNextClick, onLoadPreviousClick} = this.props;

        return (
            <div>
                <p>Count: {count}</p>
                <div onClick={onLoadNextClick}>
                    Next
                </div>
                <div onClick={onLoadPreviousClick}>
                    Previous
                </div>
            </div>
        );
    }
}
