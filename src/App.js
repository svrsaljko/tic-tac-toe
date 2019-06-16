import React from "react";
import "./App.css";
import Header from "./components/Header";
import TicTacToe from "./components/TicTacToe";

const EMPTY_BOARD = ["", "", "", "", "", "", "", "", ""];
const DISABLE_FIELD_LIST = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];

class App extends React.Component {
  state = {
    board: EMPTY_BOARD,
    turn: true,
    disableFields: DISABLE_FIELD_LIST
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
      counter = 0;
      const disableFields = state.disableFields.map(field => {
        if (id == counter) {
          field = true;
        }
        counter++;
        return field;
      });

      return { disableFields, board, turn };
    });
  };

  onRestartClick = () => {
    this.setState({
      board: EMPTY_BOARD,
      disableFields: DISABLE_FIELD_LIST
    });
  };

  render() {
    console.log(this.state.disableFields);
    return (
      <div className="App">
        <Header />
        <TicTacToe
          onRestartClick={this.onRestartClick}
          disableFields={this.state.disableFields}
          onFieldClick={this.onFieldClick}
          board={this.state.board}
        />
      </div>
    );
  }
}
export default App;
