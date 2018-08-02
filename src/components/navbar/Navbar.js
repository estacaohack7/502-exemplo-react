import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {

    console.log(this.props.links);

    return (
        <nav>
          {this.props.links.map((link, posicao) => <a key={posicao} href="">{link}</a>)}
        </nav>
    );
  }
}

export default Navbar;