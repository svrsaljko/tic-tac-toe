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
    PlayerX: 0
  };

  // componentDidMount() {
  //   console.log("MOUNT");
  // }
  // componentDidUpdate() {
  //   let winner = false;
  //   console.log("UPDATE");
  //   if (this.state.turn === winner) {
  //     console.log("Player X wins!");
  //     this.setState({ PlayerX: this.state.PlayerX++ });
  //     winner = false;
  //   } else {
  //     winner = true;
  //   }
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("props", props);
  //   console.log("state", state);
  // }

  // componentWillReceiveProps(props) {
  //   console.log("componentWillReceiveProps ", props);
  // }

  isGameEnd = state => {
    //let winner = false;
    console.log("game end check: ", state.board);
    let i = 0;
    // console.log("zbroj", N - N);
    // console.log("zbroj", N - (N - 1));
    // console.log("zbroj", N - (N - 1));
    if (
      state.board[i] == "X" &&
      state.board[i + 1] == "X" &&
      state.board[i + 2] == "X"
    ) {
      return true;
    } else {
      return false;
    }
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

    this.setState((prevState, props) => {
      console.log("PREV STATE: ", prevState.board);
      console.log("Props: ", props);
      if (this.isGameEnd(prevState) === true) {
        console.log("PLAYER X WINNER !!");
        this.setState({
          playerX: prevState.PlayerX++,
          disableFields: DISABLED_FIELD_LIST
        });
      }
    });
  };

  onRestartClick = () => {
    this.setState({
      board: EMPTY_BOARD,
      disableFields: ENABLED_FIELD_LIST
    });
  };

  render() {
    //console.log(this.state.disableFields);
    return (
      <div className="App">
        <Header />
        <TicTacToe
          PlayerX={this.state.PlayerX}
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
