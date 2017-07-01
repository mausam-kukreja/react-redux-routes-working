import React, { Component } from 'react';
import Board from './Board';
import Result from './Result';
import './main.css';

class TicTacTeoPage extends Component {
  constructor(props) {
    super(props);
    this.state=  {
	  board: {
	    0: ['', '', ''],
	    1: ['', '', ''],
	    2: ['', '', '']
	  },
	  won: undefined,
	  draw: false,
	  turn: 'o'
	};
  }
  render() {
    return (
     <div className="app">
      <Board {...this.state} />
      <Result {...this.state} />
    </div>
    );
  }
}
export default TicTacTeoPage;