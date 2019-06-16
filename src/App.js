import React from "react";
import "./App.css";
import Header from "./components/Header";
import TicTacToe from "./components/TicTacToe";

const N = 3;
const EMPTY_BOARD = ["", "", "", "", "", "", "", "", ""];
const ENABLED_FIELD_LIST = [
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

const DISABLED_FIELD_LIST = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true
];

class App extends React.Component {
  state = {
    board: EMPTY_BOARD,
    turn: true,
    disableFields: ENABLED_FIELD_LIST,
    turnNumber: 0,
    PlayerX: 0,
    PlayerO: 0,
    Draw: 0
  };

  isGameEnd = () => {
    let i = 0;
    // console.log("zbroj", N - N);
    // console.log("zbroj", N - (N - 1));
    // console.log("zbroj", N - (N - 1));
    if (
      this.state.board[i] === "X" &&
      this.state.board[i + 1] === "X" &&
      this.state.board[i + 2] === "X"
    ) {
      return 0;
    }
    if (
      this.state.board[i] === "O" &&
      this.state.board[i + 1] === "O" &&
      this.state.board[i + 2] === "O"
    ) {
      return 1;
    }
    if (this.state.turnNumber === 9) {
      return 2;
    }
  };

  onFieldClick = e => {
    const id = e.target.id;
    let counter = 0;
    let turn;
    this.setState(
      state => {
        const board = state.board.map(field => {
          if (id == counter) {
            if (state.turn === true) {
              field = "X";
              turn = false;
            } else {
              field = "O";
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
        return {
          disableFields,
          board,
          turn,
          turnNumber: this.state.turnNumber + 1
        };
      },
      () => {
        if (this.isGameEnd() === 0) {
          console.log("PLAYER X WINNER !!");
          this.setState({
            disableFields: DISABLED_FIELD_LIST,
            PlayerX: this.state.PlayerX + 1
          });
        }
        if (this.isGameEnd() === 1) {
          console.log("PLAYER O WINNER !!");
          this.setState({
            disableFields: DISABLED_FIELD_LIST,
            PlayerO: this.state.PlayerO + 1
          });
        } else if (this.isGameEnd() === 2) {
          console.log("DRAW !!");
          this.setState({
            disableFields: DISABLED_FIELD_LIST,
            Draw: this.state.Draw + 1
          });
        }
      }
    );
  };

  onRestartClick = () => {
    this.setState({
      board: EMPTY_BOARD,
      disableFields: ENABLED_FIELD_LIST,
      turnNumber: 0
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <TicTacToe
          PlayerX={this.state.PlayerX}
          PlayerO={this.state.PlayerO}
          Draw={this.state.Draw}
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
