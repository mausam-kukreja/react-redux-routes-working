import React, { Component } from 'react';
import Y from './Y';
import X from './X';
import O from './O';
import { makeYourMove } from '../../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class Board extends Component {
  makeYourMove (rowIndex, columnIndex) {
    this.props.makeYourMove(rowIndex, columnIndex,this.props.turn);
  }
  getXO(rowIndex, columnIndex, xo) {

    if (xo === 'x') {
      return <X key={columnIndex} columnIndex={columnIndex} />;
    }
    if (xo === 'o') {
      return <O key={columnIndex} columnIndex={columnIndex} />;
    }
    return <Y key={columnIndex} makeYourMove={this.makeYourMove.bind(this, rowIndex, columnIndex)} turn={this.props.turn} />;
  }
  render() {
    return (
      <div className='board'>
         {
          Object.keys(this.props.board)
            .map(rowIndex => {
              return (
                <div className='row' key={rowIndex}>
                  {
                    this.props.board[rowIndex].map((xo, columnIndex) => {
                      return this.getXO(rowIndex, columnIndex, xo);
                    })
                  }
                </div>
              );
            })
        }
      </div>
    );
  }
}
function mapAction(dispatch){
  return bindActionCreators({makeYourMove}, dispatch); 
}
export default connect(state=>(state),mapAction)(Board);