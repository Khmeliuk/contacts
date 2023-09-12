import { Nav } from "./NavLinkBarStyled";
import { Box } from "../App/Box";
import LogOut from "../Component/Logaut/LogOut";
import { Outlet } from "react-router-dom";

const PhonebookNavigation = () => {
  return (
    <>
      <Box as="nav" display="flex">
        <Nav to={"contacts"}>Contacts</Nav>
        <Nav to={"add"}>Add contacts</Nav>
        <Nav to={"find"}>Find contacts by name</Nav>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default PhonebookNavigation;
