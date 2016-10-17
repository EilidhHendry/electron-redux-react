import React, { Component } from 'react'
import { Link } from 'react-router'

export default class HomePage extends Component{

    render() {
        return (
            <div>
                <Link to="/promo-codes">Promo Codes</Link>
            </div>

        )
    }
}
