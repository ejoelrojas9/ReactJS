import React, { Component } from 'react';
import Cabecera from './components/Cabecera'
import P from './components/P';

import './App.css';

class App extends Component {
    state = {
        miau: 'Bienvenido a miau'
    }
    cambiarTextoDelEstado = () => {
        this.setState({ miau: 'Hola mundo' })
        console.log('Voy Bien')
    }
    manejaClick = texto => {
        console.log(texto)
    }
    render() {
        const { miau } = this.state
        const texto = 'Bienvenido miau'
        const guau = 'Bienvenido guau'
        return ( <
            div className = "App" >
            <
            Cabecera miau = { texto }
            manejaClick = { this.manejaClick }
            />  <
            Cabecera miau = { guau }
            manejaClick = { this.manejaClick }
            /> <
            p > { miau } <
            /p> <
            /
            div >
        );
    }
}

export default App;