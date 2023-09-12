import { NavLink } from "react-router-dom";

const NavAuth = () => {
  console.log("auth");
  return (
    <nav>
      <NavLink to={"login"}>Log in</NavLink>
      <NavLink to={"registration"}>Registration</NavLink>
    </nav>
  );
};

export default NavAuth;
