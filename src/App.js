import React from 'react';
import './App.css';

import Header from './components/Header';
import Title from './components/Title'
import Sobre from './components/Sobre'
import Portfolio from './components/Portfolio';
import Contato from './components/Contato'

function App() {
  return (
    <>
    <Header />
    <Title />
    <Sobre />
    <Portfolio />
    <Contato />
    </>
  );
}

export default App;
