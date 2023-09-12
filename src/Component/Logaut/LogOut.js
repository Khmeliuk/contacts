import { useDispatch } from "react-redux";
import { logOutAsyncThunk } from "../../redux/auth/authOperation";
import styled from "@emotion/styled";
import { BiLogOut } from "react-icons/bi";

const LogOut = () => {
  const dispatch = useDispatch();
  const logPutHandler = (e) => {
    e.preventDefault();
    dispatch(logOutAsyncThunk());
  };

  return (
    <LogoutBtn onClick={logPutHandler} type="button">
      <BiLogOut size={30} />
    </LogoutBtn>
  );
};
export default LogOut;

const LogoutBtn = styled.button`
  padding: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.white};
`;
