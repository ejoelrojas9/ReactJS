import React, { Component } from 'react'
import logo from '../logo.svg';
/*
.App-header {
    background-color: #282c34;
    height: 150px;
    padding: 40px;
    color: white;
}
*/

const styles = {
    header: {
        backgroundColor: '#282c34',
        height: '150px',
        padding: '40px',
        color: 'white'
    }

}

export default class Cabecera extends Component {
    manejaClick = () => {
        const { manejaClick, miau } = this.props
        manejaClick(miau)
    }
    render() {
        const { manejaClick, miau } = this.props
        return ( <
            header style = { styles.header } >
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