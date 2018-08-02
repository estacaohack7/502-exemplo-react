import React, { Component } from 'react';
import './Footer.css';
import imgFB from './facebook.png';
import imgInsta from './instagram.jpg';
import imgTwi from './twitter.png';
import Navbar from '../navbar/Navbar';

class Footer extends Component {
    clicar(){
        prompt("Digite aqui seu email para que possamos te mandar muitos SPAMs e emailmarketings!!!!");
    }

    render() {
        return (
            <footer>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, natus nobis. Laudantium ipsum, doloribus illum temporibus nobis beatae debitis quaerat odit, deserunt tempore modi, nulla rerum ipsam esse quod rem!</p>
                <Navbar links={[]}/>
                <div className="botoes">
                    <button onClick={this.clicar}>Fale Conosco!</button>
                    <div className="social">
                        <img src={imgFB} alt="Facebook" />
                        <img src={imgInsta} alt="Instagram" />
                        <img src={imgTwi} alt="Twitter" />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;