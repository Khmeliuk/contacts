import styled from "@emotion/styled";

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px;

  background: none;
  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: end;
  }
  label {
    display: flex;
    gap: 8px;
  }
  button {
    padding: 4px;
    display: flex;
    background-color: ${(div) => div.theme.colors.primary};
    justify-content: center;
    width: 50%;
    border-radius: 10px;
  }
  input {
    border-radius: 10px;
    background-color: ${(p) => p.theme.colors.background};
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: baseline;
  padding: 10px;
  h2 {
    align-self: center;
  }
`;
