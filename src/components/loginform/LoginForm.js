import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return (
        <section className="login">
            <h2>Digite suas credenciais para fazer login</h2>
            <input type="text" placeholder="Digite o seu nome de usuário" />
            <input type="password" placeholder="Digite a sua senha" />
            <button>Login!</button>
        </section>
    );
  }
}

export default LoginForm;