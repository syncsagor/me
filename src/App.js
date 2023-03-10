import React, { Fragment } from 'react'
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <Fragment>
      <Header />

      <main className='main'>
        <Home />
        <About />
      </main>
    </Fragment>
  );
}

export default App;
