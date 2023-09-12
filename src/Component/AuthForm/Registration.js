import { useDispatch } from "react-redux";
import { useState } from "react";
import { registrationAsyncThunk } from "../../redux/auth/authOperation";
import { LoginStyled } from "./LoginStyled";
import { MdAppRegistration } from "react-icons/md";

const Registration = () => {
  const dispatch = useDispatch();
  const [login, setlogin] = useState({ name: "", email: "", password: "" });

  const onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setlogin((pref) => ({ ...pref, [name]: value }));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(login);

    dispatch(registrationAsyncThunk(login));
  };

  return (
    <LoginStyled onSubmit={loginHandler}>
      <h3>Registration</h3>
      <label htmlFor="name">
        <input name="name" onChange={onChange} type="text" value={login.name} />
        User name
      </label>
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
      <button type="submit">
        <MdAppRegistration color="white" size={20} />
      </button>
    </LoginStyled>
  );
};
export default Registration;
