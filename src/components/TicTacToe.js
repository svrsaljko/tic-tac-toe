import React from "react";
import styled from "styled-components";

const Fields = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const TicTacToeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageAndResetButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  // border: 3px solid red;
`;

const PLayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //border: 3px solid brown;
`;

const BoardAndPlayerContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  //border: 3px solid black;
`;

const Board = styled.div`
  border-radius: 5px;
  border: 3px solid #21242c;
  width: 17rem;
  height: 17rem;

  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

const Statistics = styled.h3`
  color: white;
`;

function TicTacToe(props) {
  // console.log(props.winnerFieldList);
  const Field = styled.button`
    border: 5px solid #21242c;
    background-color: #282c34;
    font-size: 30px;
    cursor: pointer;
  `;
  const ResetButton = styled.button`
    //border: 3px solid yellow;
    width: fit-content;
    align-self: center;
    visibility: ${props.gameEnd ? "visible" : "visible"};
  `;

  const Message = styled.h3`
    color: #75fff1;
    //border: 3px solid green;
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
        <ResetButton onClick={props.onRestartClick}>RESET</ResetButton>
      </MessageAndResetButtonContainer>
      <BoardAndPlayerContainer>
        <PLayerContainer>
          <PlayerX>PlayerX</PlayerX>
          <Statistics>W: {props.PlayerX}</Statistics>
          <Statistics>D: {props.Draw}</Statistics>
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
          <Statistics>W: {props.PlayerO}</Statistics>
          <Statistics>D: {props.Draw}</Statistics>
        </PLayerContainer>
      </BoardAndPlayerContainer>
    </TicTacToeContainer>
  );
}

export default TicTacToe;
