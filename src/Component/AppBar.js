import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { refreshTokenAsyncThunk } from "../redux/auth/authOperation.js";
import NavAuth from "../navigation/NavAuth.js";

import { Navigation } from "../navigation/Navigatio.js";

import { AppBarStyled } from "./AppBarStyled.js";
import UserMenu from "./UserMenu/UserMenu.js";

function AppBar() {
  const isLogin = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshTokenAsyncThunk());
  }, []);

  return (
    <AppBarStyled>
      <Navigation />
      {isLogin ? <UserMenu /> : <NavAuth />}
    </AppBarStyled>
  );
}

export default AppBar;
