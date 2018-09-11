import React, { Component } from 'react';

import NavContainer from './components/Nav/NavContainer';
import Home from './Pages/Home';
import Me from './Pages/Me';
import School from './Pages/School'
import NavItem from './components/Nav/NavItem';
import logo from './images/test.svg';
import s from './App.css';


class App extends Component {
  render() {
    return (
      <div className={s.app} >
        <section>
          <Home/>
        </section>
        <section>
          <Me/>
        </section>
        <section>
          <School/>
        </section>
      </div>
      
    );
  }
}

export default App;
