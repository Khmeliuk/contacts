import styled from "@emotion/styled";
export const AppBarStyled = styled("header")`
  display: flex;
  border: solid 2px;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
`;
