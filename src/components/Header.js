import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  border-bottom: 1px solid #75fff1;
  text-align: center;
  color: #75fff1;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h2>TIC-TAC-TOE</h2>
    </HeaderContainer>
  );
}
