import React from "react";

export default function TicTacToe(props) {
  //console.log(props);
  return (
    <div className="TicTacToe">
      <div className="PLayerContainer">
        <h3>PlayerX</h3>
        <h4>W: {props.PlayerX}</h4>
        <h4>D: {props.Draw}</h4>
      </div>
      <div className="BoardAndResetContainer">
        <button onClick={props.onRestartClick} className="ResetButton">
          RESET
        </button>
        <div className="Board">
          <button
            id="0"
            disabled={props.disableFields[0]}
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[0]}
          </button>
          <button
            disabled={props.disableFields[1]}
            id="1"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[1]}
          </button>
          <button
            disabled={props.disableFields[2]}
            id="2"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[2]}
          </button>
          <button
            disabled={props.disableFields[3]}
            id="3"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[3]}
          </button>
          <button
            disabled={props.disableFields[4]}
            id="4"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[4]}
          </button>
          <button
            disabled={props.disableFields[5]}
            id="5"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[5]}
          </button>
          <button
            disabled={props.disableFields[6]}
            id="6"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[6]}
          </button>
          <button
            disabled={props.disableFields[7]}
            id="7"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[7]}
          </button>
          <button
            disabled={props.disableFields[8]}
            id="8"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[8]}
          </button>
        </div>
      </div>
      <div className="PLayerContainer">
        <h3>PlayerO</h3>
        <h4>W: {props.PlayerO}</h4>
        <h4>D: {props.Draw}</h4>
      </div>
    </div>
  );
}
