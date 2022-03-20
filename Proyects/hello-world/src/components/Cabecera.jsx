import React, { Component } from 'react'
import logo from '../logo.svg';

export default class Cabecera extends Component {
    manejaClick = () => {
        const { manejaClick, miau } = this.props
        manejaClick(miau)
    }
    render() {
        const { manejaClick, miau } = this.props
        return ( <
            header className = "App-header" >
            <
            img onClick = { manejaClick }
            onClick = { this.manejaClick }
            src = { logo }

            className = "App-logo"
            alt = "logo" / >
            <
            h1 onClick = { manejaClick }
            className = "App-title" > { miau } < /h1>   < /
            header >
        )
    }
}