import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  border-bottom: 3px solid black;
  text-align: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h2>TIC TAC TOE</h2>
    </HeaderContainer>
  );
}
