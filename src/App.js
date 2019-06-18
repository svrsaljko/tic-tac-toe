import React from "react";
import "./App.css";
import Header from "./components/Header";
import TicTacToe from "./components/TicTacToe";
import styled from "styled-components";

const AppContainer = styled.div`
  styled.display: flex;
  flex-direction: column;
`;

const winnerFieldPainter = [];
const N = 3;
const EMPTY_BOARD = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "O",
  "X",
  "11",
  "O",
  "13",
  "14",
  "X"
];
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
    turnPrevious: true,
    disableFields: ENABLED_FIELD_LIST,
    turnNumber: 0,
    PlayerX: 0,
    PlayerO: 0,
    Draw: 0,
    gameEnd: false,
    winnerFieldList: ENABLED_FIELD_LIST
  };

  isGameEnd = fieldChar => {
    //console.log("N =", N);

    let fieldChecker;

    //CHECK ROWS
    for (let i = N - N; i < N; i++) {
      fieldChecker = 0;
      for (let j = i * N; j < N * (i + 1); j++) {
        if (this.state.board[j] === fieldChar) {
          //console.log("i: ", i, "j: ", j);
          fieldChecker++;
          winnerFieldPainter[fieldChecker - 1] = j;
        }
      }
      if (fieldChecker === N) {
        return this.returnWinner(fieldChar);
      }
    }

    //CHECK COLUMNS
    for (let i = N - N; i < N; i++) {
      fieldChecker = 0;
      for (let j = i; j < N * N; j = j + N) {
        if (this.state.board[j] === fieldChar) {
          fieldChecker++;
          winnerFieldPainter[fieldChecker - 1] = j;
        }
      }
      if (fieldChecker === N) {
        // console.log("tuu");
        // console.log("paint winner", winnerFieldPainter);
        return this.returnWinner(fieldChar);
      }
    }

    //CHECK DIAGONALS
    //CHECK 1. DIAGONAL
    fieldChecker = 0;
    for (let i = N - N; i < N * N; i = i + N + 1) {
      if (this.state.board[i] === fieldChar) {
        fieldChecker++;
        winnerFieldPainter[fieldChecker - 1] = i;
      }
    }
    if (fieldChecker === N) {
      // console.log("tuu");
      // console.log("paint winner", winnerFieldPainter);
      return this.returnWinner(fieldChar);
    }
    //CHECK 2. DIAGONAL
    fieldChecker = 0;
    for (let i = N - 1; i <= (N - 1) * N; i = i + N - 1) {
      if (this.state.board[i] === fieldChar) {
        fieldChecker++;
        winnerFieldPainter[fieldChecker - 1] = i;
      }
    }
    if (fieldChecker === N) {
      // console.log("tuu");
      // console.log("paint winner", winnerFieldPainter);
      return this.returnWinner(fieldChar);
    }
  };

  returnWinner = fieldChar => {
    if (fieldChar === "X") {
      return 0;
    }
    if (fieldChar === "O") {
      return 1;
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
          turnPrevious: !this.state.turn,
          turnNumber: this.state.turnNumber + 1
        };
      },

      () => {
        if (this.state.turnPrevious === false) {
          if (this.isGameEnd("X") === 0) {
            console.log("PLAYER X WINNER !!");
            this.setState(state => {
              let fieldIndex = 0;
              const winnerFieldList = state.winnerFieldList.map(field => {
                for (let i = 0; i < N; i++) {
                  if (winnerFieldPainter[i] === fieldIndex) {
                    field = true;
                  }
                }
                fieldIndex++;
                return field;
              });
              return {
                winnerFieldList,
                gameEnd: true,
                turn: true,
                disableFields: DISABLED_FIELD_LIST,
                PlayerX: this.state.PlayerX + 1
              };
            });
          }
        }

        if (this.state.turnPrevious === true) {
          if (this.isGameEnd("O") === 1) {
            console.log("PLAYER O WINNER !!");
            this.setState(state => {
              let fieldIndex = 0;
              const winnerFieldList = state.winnerFieldList.map(field => {
                for (let i = 0; i < N; i++) {
                  if (winnerFieldPainter[i] === fieldIndex) {
                    field = true;
                  }
                }
                fieldIndex++;
                return field;
              });
              return {
                winnerFieldList,
                gameEnd: true,
                turn: true,
                disableFields: DISABLED_FIELD_LIST,
                PlayerO: this.state.PlayerO + 1
              };
            });
          }
        }
        if (this.state.turnNumber === 9) {
          console.log("DRAW !!");
          this.setState({
            gameEnd: true,
            disableFields: DISABLED_FIELD_LIST,
            Draw: this.state.Draw + 1
          });
        }
      }
    );
  };

  onRestartClick = () => {
    this.setState({
      gameEnd: false,
      board: EMPTY_BOARD,
      disableFields: ENABLED_FIELD_LIST,
      turnNumber: 0,
      winnerFieldList: ENABLED_FIELD_LIST
    });
  };

  render() {
    //console.log("winner painter: ", winnerFieldPainter);
    //console.log("WINNER FIELD LIST :", this.state.winnerFieldList);
    return (
      <AppContainer>
        <Header />
        <TicTacToe
          PlayerX={this.state.PlayerX}
          PlayerO={this.state.PlayerO}
          Draw={this.state.Draw}
          onRestartClick={this.onRestartClick}
          disableFields={this.state.disableFields}
          onFieldClick={this.onFieldClick}
          board={this.state.board}
          gameEnd={this.state.gameEnd}
          winnerFieldList={this.state.winnerFieldList}
        />
      </AppContainer>
    );
  }
}
export default App;
