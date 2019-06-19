import React from "react";
import styled from "styled-components";
import { N } from "../App.js";

const Fields = [];

const TicTacToeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageAndResetButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PLayerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoardAndPlayerContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Statistics = styled.h3`
  color: white;
`;

function TicTacToe(props) {
  for (let i = 0; i < N * N; i++) {
    Fields[i] = i;
  }
  const Board = styled.div`
    border-radius: 5px;
    border: 3px solid #21242c;
    width: 17rem;
    height: 17rem;
    display: grid;
    grid-template: repeat(${N}, 1fr) / repeat(${N}, 1fr);
  `;

  const Field = styled.button`
    border: 5px solid #21242c;
    background-color: #282c34;
    font-size: 30px;
    font-weight: bold;
    &:hover {
      cursor: ${!props.gameEnd ? "pointer" : "mouse"};
    }
  `;

  const ResetButton = styled.button`
    width: auto;
    height: auto;
    align-self: center;
    font-size: 30px;
    font-weight: bold;
    background-color: #282c34;
    border: ${props.gameEnd ? "4px solid white " : " 4px solid #21242c"};
    border-radius: 10px;
    color: ${props.gameEnd ? "white" : " #21242c"};
    visibility: ${props.gameEnd ? "visible" : "visible"};
    &:hover {
      cursor: ${props.gameEnd ? "pointer" : "mouse"};
      border: ${props.gameEnd ? "4px solid #75fff1" : " 4px solid #21242c"};
      color: ${props.gameEnd ? "#75fff1" : " #21242c"};
    }
  `;

  const Message = styled.h3`
    color: #75fff1;
    text-align: center;
    visibility: ${props.gameEnd ? "visible" : "visible"};
  `;

  const PlayerX = styled.h2`
    color: ${props.turn ? " #75fff1" : "white"};
  `;

  const PlayerO = styled.h2`
    color: ${props.turn ? "white" : " #75fff1"};
  `;

  return (
    <TicTacToeContainer>
      <MessageAndResetButtonContainer>
        <Message>{props.message}</Message>
        <ResetButton disabled={!props.gameEnd} onClick={props.onRestartClick}>
          NEXT ROUND
        </ResetButton>
      </MessageAndResetButtonContainer>
      <BoardAndPlayerContainer>
        <PLayerContainer>
          <PlayerX>PlayerX</PlayerX>
          <Statistics>W: {props.playerXWin}</Statistics>
          <Statistics>D: {props.draw}</Statistics>
        </PLayerContainer>
        <Board>
          {Fields.map(field => {
            return (
              <Field
                key={field}
                id={field}
                disabled={props.disableFields[field]}
                onClick={props.onFieldClick}
                style={{
                  color: props.winnerFieldList[field] ? " #75fff1" : "white"
                }}
              >
                {props.board[field]}
              </Field>
            );
          })}
        </Board>
        <PLayerContainer>
          <PlayerO>PlayerO</PlayerO>
          <Statistics>W: {props.playerOWin}</Statistics>
          <Statistics>D: {props.draw}</Statistics>
        </PLayerContainer>
      </BoardAndPlayerContainer>
    </TicTacToeContainer>
  );
}

export default TicTacToe;
