import styled from "@emotion/styled";

export const ContactsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 8px;
  overflow: auto;
  padding: 0;
  margin: 0;
  height: 150px;
  width: 100%;
  li {
    display: flex;
    gap: 30px;
    justify-content: space-between;
  }
  button {
    background-color: inherit;
    border: solid 1px;
    border-color: ${(ul) => ul.theme.colors.primary};
  }
  h2 {
    margin: 0;
  }
  
`;
