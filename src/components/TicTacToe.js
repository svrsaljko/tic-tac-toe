import React from "react";
import styled from "styled-components";

const TicTacToeContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const PLayerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoardAndResetContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Board = styled.div`
  margin-top: 2rem;
  border-radius: 5px;
  border: 3px solid black;
  width: 17rem;
  height: 17rem;

  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

const Field = styled.button`
  border: 4px solid black;
  border-radius: 3px;
  font-size: 20px;
`;

export default function TicTacToe(props) {
  //console.log(props);
  return (
    <TicTacToeContainer>
      <PLayerContainer>
        <h3>PlayerX</h3>
        <h4>W: {props.PlayerX}</h4>
        <h4>D: {props.Draw}</h4>
      </PLayerContainer>
      <BoardAndResetContainer>
        <Field onClick={props.onRestartClick} className="ResetButton">
          RESET
        </Field>
        <Board>
          <Field
            id="0"
            disabled={props.disableFields[0]}
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[0]}
          </Field>
          <Field
            disabled={props.disableFields[1]}
            id="1"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[1]}
          </Field>
          <Field
            disabled={props.disableFields[2]}
            id="2"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[2]}
          </Field>
          <Field
            disabled={props.disableFields[3]}
            id="3"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[3]}
          </Field>
          <Field
            disabled={props.disableFields[4]}
            id="4"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[4]}
          </Field>
          <Field
            disabled={props.disableFields[5]}
            id="5"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[5]}
          </Field>
          <Field
            disabled={props.disableFields[6]}
            id="6"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[6]}
          </Field>
          <Field
            disabled={props.disableFields[7]}
            id="7"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[7]}
          </Field>
          <Field
            disabled={props.disableFields[8]}
            id="8"
            onClick={props.onFieldClick}
            className="Field"
          >
            {props.board[8]}
          </Field>
        </Board>
      </BoardAndResetContainer>
      <PLayerContainer>
        <h3>PlayerO</h3>
        <h4>W: {props.PlayerO}</h4>
        <h4>D: {props.Draw}</h4>
      </PLayerContainer>
    </TicTacToeContainer>
  );
}
