import { useSelector } from "react-redux";
import LogOut from "../Logaut/LogOut";
import UserMenuStyled from "./UserMenuStyled";

const UserMenu = () => {
  const name = useSelector((s) => s.auth.user.name);
  return (
    <UserMenuStyled>
      <p>{`Welcome, ${name}`}</p>
      <LogOut />
    </UserMenuStyled>
  );
};

export default UserMenu;
