import React from "react";

export default function TicTacToe() {
  return (
    <div className="TicTacToe">
      <div className="PLayerContainer">Player1</div>
      <div className="BoardAndResetContainer">
        <button className="ResetButton">RESET</button>
        <div className="Board">
          <div>X</div>
          <div>X</div>
          <div>X</div>
          <div>X</div>
          <div>X</div>
          <div>X</div>
          <div>X</div>
          <div>X</div>
          <div>X</div>
        </div>
      </div>
      <div className="PLayerContainer">Player2</div>
    </div>
  );
}
