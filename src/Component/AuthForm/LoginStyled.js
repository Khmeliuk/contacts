import styled from "@emotion/styled";

export const LoginStyled = styled.form`
  button {
    background-color: ${(p) => p.theme.colors.primary};
    width: 50%;
    border-radius: 10px;
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: baseline;
  padding: 10px;
  h3 {
    align-self: center;
  }
  input {
    border-radius: 10px;
    background-color: ${(p) => p.theme.colors.background};
  }
`;
