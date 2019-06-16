import React from "react";
import "./App.css";
import Header from "./components/Header";
import TicTacToe from "./components/TicTacToe";

const EMPTY_BOARD = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
//const DISABLE_FIELD_LIST = [ false, false ,false ]

class App extends React.Component {
  state = {
    board: EMPTY_BOARD,
    turn: true
    //  fieldLocker:
  };

  onFieldClick = e => {
    const id = e.target.id;
    //console.log(id);
    let counter = 0;
    let turn;
    this.setState(state => {
      const board = state.board.map(field => {
        if (id == counter) {
          if (state.turn === true) {
            field = "X";
            turn = false;
          } else {
            field = "0";
            turn = true;
          }
        }

        counter++;
        return field;
      });
      return {
        board,
        turn
      };
    });
  };

  render() {
    console.log(this.state.turn);
    return (
      <div className="App">
        <Header />
        <TicTacToe onFieldClick={this.onFieldClick} board={this.state.board} />
      </div>
    );
  }
}
export default App;
