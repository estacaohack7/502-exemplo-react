import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav>
            <a href="">Home</a>
            <a href="">Sobre nós</a>
            <a href="">Promoções</a>
            <a href="">Contato</a>
        </nav>
    );
  }
}

export default Navbar;