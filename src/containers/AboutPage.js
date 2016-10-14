import React, { Component } from 'react'
import { Link } from 'react-router'

export default class AboutPage extends Component{

    render() {
        return (
            <div>
                <h3> About </h3>
                <Link to="/">Back</Link>
            </div>

        )
    }
}
