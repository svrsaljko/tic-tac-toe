import React from "react";

export default function TicTacToe(props) {
  //console.log(props);
  return (
    <div className="TicTacToe">
      <div className="PLayerContainer">Player1 W D</div>
      <div className="BoardAndResetContainer">
        <button className="ResetButton">RESET</button>
        <div className="Board">
          <button id="0" onClick={props.onFieldClick} className="Field">
            {props.board[0]}
          </button>
          <button id="1" onClick={props.onFieldClick} className="Field">
            {props.board[1]}
          </button>
          <button id="2" onClick={props.onFieldClick} className="Field">
            {props.board[2]}
          </button>
          <button id="3" onClick={props.onFieldClick} className="Field">
            {props.board[3]}
          </button>
          <button id="4" onClick={props.onFieldClick} className="Field">
            {props.board[4]}
          </button>
          <button id="5" onClick={props.onFieldClick} className="Field">
            {props.board[5]}
          </button>
          <button id="6" onClick={props.onFieldClick} className="Field">
            {props.board[6]}
          </button>
          <button id="7" onClick={props.onFieldClick} className="Field">
            {props.board[7]}
          </button>
          <button id="8" onClick={props.onFieldClick} className="Field">
            {props.board[8]}
          </button>
        </div>
      </div>
      <div className="PLayerContainer">Player2 W D</div>
    </div>
  );
}
