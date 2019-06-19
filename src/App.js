import React from "react";
import Header from "./components/Header";
import TicTacToe from "./components/TicTacToe";
import Footer from "./components/Footer";
import styled from "styled-components";

const N = 3;
const winnerFieldPainter = [];
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

const AppContainer = styled.div`
  styled.display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    message: "PlayerX on turn...",
    board: EMPTY_BOARD,
    turn: true,
    turnPrevious: true,
    disableFields: ENABLED_FIELD_LIST,
    turnNumber: 0,
    playerXWin: 0,
    playerOWin: 0,
    draw: 0,
    gameEnd: false,
    winnerFieldList: ENABLED_FIELD_LIST
  };

  isRoundOver = fieldChar => {
    let fieldChecker;

    //CHECK ROWS
    for (let i = N - N; i < N; i++) {
      fieldChecker = 0;
      for (let j = i * N; j < N * (i + 1); j++) {
        if (this.state.board[j] === fieldChar) {
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
    let isDraw = false;
    let isXWinner = false;
    let isOWinner = false;
    let message = "";
    let counter = 0;
    let turn;

    this.setState(
      state => {
        const board = state.board.map(field => {
          if (id == counter) {
            if (state.turn === true) {
              field = "X";
              message = "PlayerO on turn...";
              turn = false;
            } else {
              field = "O";
              message = "PlayerX on turn...";
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
          message,
          disableFields,
          board,
          turn,
          turnPrevious: !this.state.turn,
          turnNumber: this.state.turnNumber + 1
        };
      },

      () => {
        if (this.state.turnPrevious === false) {
          if (this.isRoundOver("X") === 0) {
            isXWinner = true;

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
                message: "PlayerX WINS!!",
                gameEnd: true,
                turn: true,
                disableFields: DISABLED_FIELD_LIST,
                playerXWin: this.state.playerXWin + 1
              };
            });
          } else if (this.state.turnNumber === 9 && isOWinner === false) {
            isDraw = true;
          }
        }

        if (this.state.turnPrevious === true) {
          if (this.isRoundOver("O") === 1) {
            isOWinner = true;
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
                message: "PlayerO WINS!!",
                gameEnd: true,
                turn: false,
                disableFields: DISABLED_FIELD_LIST,
                playerOWin: this.state.playerOWin + 1
              };
            });
          } else if (this.state.turnNumber === 9 && isXWinner === false) {
            isDraw = true;
          }
        }

        if (isDraw === true) {
          this.setState({
            message: "DRAW!!",
            gameEnd: true,
            disableFields: DISABLED_FIELD_LIST,
            draw: this.state.draw + 1
          });
        }
      }
    );
  };

  onRestartClick = () => {
    let message = "";
    if (this.state.turn === true) {
      message = "PlayerX on turn...";
    } else {
      message = "PlayerO on turn...";
    }
    this.setState({
      message,
      gameEnd: false,
      board: EMPTY_BOARD,
      disableFields: ENABLED_FIELD_LIST,
      turnNumber: 0,
      winnerFieldList: ENABLED_FIELD_LIST
    });
  };

  render() {
    return (
      <AppContainer>
        <Header />
        <TicTacToe
          message={this.state.message}
          playerXWin={this.state.playerXWin}
          playerOWin={this.state.playerOWin}
          draw={this.state.draw}
          disableFields={this.state.disableFields}
          board={this.state.board}
          gameEnd={this.state.gameEnd}
          winnerFieldList={this.state.winnerFieldList}
          turn={this.state.turn}
          onRestartClick={this.onRestartClick}
          onFieldClick={this.onFieldClick}
        />
        <Footer />
      </AppContainer>
    );
  }
}
export default App;
