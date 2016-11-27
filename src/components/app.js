import React, { Component } from 'react';
import Footer from './footer';
import Board from './board/board';
import Header from './header';

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
          <Board />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
