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

  border: 3px solid red;
`;

const Message = styled.h3`
  color: red;
  border: 3px solid green;
  text-align: center;
`;

const PLayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 3px solid brown;
`;

const BoardAndPlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 3px solid black;
`;

const Board = styled.div`
  border-radius: 5px;
  border: 3px solid black;
  width: 17rem;
  height: 17rem;

  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

function TicTacToe(props) {
  console.log(props.winnerFieldList);

  const ResetButton = styled.button`
    border: 3px solid yellow;
    width: fit-content;
    align-self: center;
    visibility: ${props.gameEnd ? "visible" : "hidden"};
  `;

  const Field = styled.button`
    border: 4px solid black;
    border-radius: 3px;
    font-size: 20px;
  `;

  return (
    <TicTacToeContainer>
      <MessageAndResetButtonContainer>
        <Message> Player1 winner </Message>
        <ResetButton onClick={props.onRestartClick}>RESET</ResetButton>
      </MessageAndResetButtonContainer>
      <BoardAndPlayerContainer>
        <PLayerContainer>
          <h3>PlayerX</h3>
          <h4>W: {props.PlayerX}</h4>
          <h4>D: {props.Draw}</h4>
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
                  color: props.winnerFieldList[field] ? "yellow" : "black"
                }}
              >
                {props.board[field]}
              </Field>
            );
          })}
        </Board>
        <PLayerContainer>
          <h3>PlayerO</h3>
          <h4>W: {props.PlayerO}</h4>
          <h4>D: {props.Draw}</h4>
        </PLayerContainer>
      </BoardAndPlayerContainer>
    </TicTacToeContainer>
  );
}

export default TicTacToe;
