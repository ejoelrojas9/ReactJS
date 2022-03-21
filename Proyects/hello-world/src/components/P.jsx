import React, { Component } from 'react';

export default class P extends Component {
    render() {
        const { childen } = this.props

        return ( <
            p className = "App-intro" > { childen } <
            /p>
        )
    }
}