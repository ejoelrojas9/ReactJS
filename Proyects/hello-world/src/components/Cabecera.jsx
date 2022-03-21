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
    header: ({ backgroundColor }) => ({
        backgroundColor,
        height: '150px',
        padding: '40px',
        color: 'white'
    })

}

export default class Cabecera extends Component {
    state = {
        backgroundColor: '#222',
    }
    cambiaColorHeader = () => {
        this.setState({ backgroundColor: '#f00' })
    }

    manejaClick = () => {
        const { manejaClick, miau } = this.props
        manejaClick(miau)
    }
    render() {
        const { manejaClick, miau } = this.props
        const { backgroundColor } = this.state
        return ( <
            header onClick = { this.cambiaColorHeader }
            style = { styles.header({ backgroundColor }) } >
            <
            img onClick = { this.manejaClick }
            src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <
            h1 className = "App-title" > { miau } < /h1> <
            /header>
        )
    }
}