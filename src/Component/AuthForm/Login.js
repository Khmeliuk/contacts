import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginAsyncThunk } from "../../redux/auth/authOperation";
import { BiLogIn } from "react-icons/bi";
import { LoginStyled } from "./LoginStyled";

const Login = () => {
  const dispatch = useDispatch();
  const [login, setlogin] = useState({ email: "", password: "" });

  const onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setlogin((pref) => ({ ...pref, [name]: value }));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(login);
    dispatch(loginAsyncThunk(login));
  };

  return (
    <LoginStyled onSubmit={loginHandler}>
      <h3>Log in</h3>
      <label htmlFor="email">
        <input
          name="email"
          onChange={onChange}
          type="email"
          value={login.email}
        />
        User email
      </label>{" "}
      <label htmlFor="password">
        <input
          name="password"
          onChange={onChange}
          type="password"
          value={login.password}
        />
        User password
      </label>
      <button onChange={onChange} type="submit">
        <BiLogIn size={20} color="white" />
      </button>
    </LoginStyled>
  );
};
export default Login;
