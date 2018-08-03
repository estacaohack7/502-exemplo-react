import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      usuario: '',
      senha: '',
      autenticado: false
    }
  }

  fazerLogin = () => {
    fetch(`http://localhost:5000/login/${this.state.usuario}`).then(resposta => resposta.json()).then(dados => {
      console.log(dados);
      if(dados.nome && dados.senha === this.state.senha){
        alert("SUCESSO");
        this.setState({
          autenticado: true
        });
      }
      else{
        alert("FRACASSO");
      }
    });
  }

  render() {
    if(this.state.autenticado){
      return(
        <h1>OLÁ, SEJA BEM VINDO AO ROLÊ</h1>
      )
    }
    else{
      return (
        <section className="login">
            <h2>Digite suas credenciais para fazer login</h2>
            <input onChange={evento => this.setState({usuario: evento.target.value})} value={this.state.usuario} type="text" placeholder="Digite o seu nome de usuário" />
            <input onChange={evento => this.setState({senha: evento.target.value})}value={this.state.senha} type="password" placeholder="Digite a sua senha" />
            <button onClick={this.fazerLogin}>Login!</button>
        </section>
    );
    }
  }
}

export default LoginForm;