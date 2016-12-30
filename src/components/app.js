import React, { Component } from 'react';
import Footer from './footer';
import Board from './board/board';
import Header from './header';
import Rebase from 're-base';

let base = Rebase.createClass({
  apiKey: 'AIzaSyA1cna3Ur0cN1u_FCywR4o4rhH4YZGs0Js',
  authDomain: 'minesweeper-14650.firebaseapp.com',
  databaseURL: 'https://minesweeper-14650.firebaseio.com',
  storageBucket: 'minesweeper-14650.appspot.com',
  messagingSenderId: '916489125324'
}, 'minesweeper');

class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="game">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Board base={base} />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
