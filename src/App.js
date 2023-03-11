import React, { Fragment } from 'react'
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Certification from './components/Certification/Certification';

function App() {
  return (
    <Fragment>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
       <Certification />
      </main>
    </Fragment>
  );
}

export default App;
