import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
} from "../Registration/RegistrationFormStyle";
import { Form, LoginFailed, Username, Welcome } from "./LoginFormStyle";
import { useDispatch } from "react-redux";
import { updateLoginData } from "../../../redux/Auth/authSlice";
import { LoginState } from "../../../redux/Auth/userType";
import { useAppSelector } from "../../../redux/store";

const LoginForm = () => {
  const dispatch = useDispatch();
  const users = useAppSelector((state) => state.users);
  const [failed, setFailed] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loginState, setLoginState] = useState<LoginState>({
    email: "",
    password: "",
  });

  const getName = (email: string) => {
    const user = users.find((user) => user.email === email);
    return user?.username;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginState;
    const data = { email, password };
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
    const loginDispatch = { ...data, user: { ...user } };
    dispatch(updateLoginData(loginDispatch));
    setSuccess(true);
    } else {
      setFailed(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginState((prevState) => ({ ...prevState, [id]: value }));
  };

  return (
    <>
      <Container>
        {success ? (
          <Form style={{ justifyContent: "center" }}>
          <h1 style={{ textAlign: "center" }}>Login avvenuto con successo!</h1>
          <Welcome>Ciao <Username>{getName(loginState.email)}</Username>!</Welcome>
        </Form>
        ): (
        <Form onSubmit={handleSubmit}>
          <h2>Login</h2>
          {failed ? 
          <LoginFailed className="mb-1">
            Email o password errati
          </LoginFailed> 
          : ''}
          <div className="mb-1">
            <div>
              <label htmlFor="email">Email:</label>
            </div>
            <Input
              type="email"
              id="email"
              placeholder="name@company.com"
              value={loginState.email}
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="mb-1">
            <div>
              <label htmlFor="password">Password:</label>
            </div>
            <Input
              type="password"
              id="password"
              placeholder="Your password"
              value={loginState.password}
              onChange={handleInputChange}
            ></Input>
          </div>
          <Button className="mt-1" type="submit">
            Login
          </Button>
        </Form>
        )}
      </Container>
    </>
  );
};

export default LoginForm;
