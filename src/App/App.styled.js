import styled from "@emotion/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: aqua;
`;

export const RoutesStyled = styled(Routes)`
  background-color: red;
  border: solid 2px;
  margin: 500px;
`;
