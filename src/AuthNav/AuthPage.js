import { Outlet } from "react-router-dom";
import { Nav } from "../navigation/NavLinkBarStyled";
import { Box } from "../App/Box";
import Login from "../Component/AuthForm/Login";

const AuthPage = () => {
  return (
    <>
      <Box as="nav" display="flex" border="solid 1px " borderRadius="4px">
        <Login />
      </Box>
    </>
  );
};
export default AuthPage;
