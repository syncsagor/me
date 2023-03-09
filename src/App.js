import React, { Fragment } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <Fragment>
      <Header />

      <main className='main'>
        <Home />
      </main>
    </Fragment>
  );
}

export default App;
