import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LoginForm from './components/loginform/LoginForm';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default App;