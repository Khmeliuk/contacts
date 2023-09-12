import { NavLink, Outlet } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { useSelector } from "react-redux";
import { MainNav } from "./NavLinkBarStyled";
import { BiSolidContact } from "react-icons/bi";

export const Navigation = () => {
  const isLogin = useSelector((state) => state.auth.isLoading);
  return (
    <MainNav>
      <NavLink to="/">
        <FcHome size={30} />
      </NavLink>
      {isLogin && (
        <NavLink to="/phonebook">
          <BiSolidContact size={30} />
        </NavLink>
      )}
    </MainNav>
  );
};
