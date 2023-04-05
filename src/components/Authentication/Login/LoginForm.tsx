import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
} from "../Registration/RegistrationFormStyle";
import { Form } from "./LoginFormStyle";
import { useDispatch } from "react-redux";
import { updateLoginData } from "../../../redux/Auth/authSlice";
import { LoginState } from "../../../redux/Auth/userType";
import { useAppSelector } from "../../../redux/store";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState<LoginState>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginState;
    const data = { email, password };
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);

    const loginDispatch = { ...data, user: { ...user } };

    dispatch(updateLoginData(loginDispatch));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(id);

    setLoginState((prevState) => ({ ...prevState, [id]: value }));
  };

  const users = useAppSelector((state) => state.users);

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
      </Container>
    </>
  );
};

export default LoginForm;
