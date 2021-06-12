import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return (
    <SFooter>
      <BrowserRouter>&copy; 2021 test inc.</BrowserRouter>
    </SFooter>
  );
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
