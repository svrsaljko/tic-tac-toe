import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  color: #75fff1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 8rem;
`;

export default function Footer() {
  return <FooterContainer>&copy;Stjepan Vrsaljko</FooterContainer>;
}
