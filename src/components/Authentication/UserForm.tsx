import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { updateRegistrationData } from '../../redux/Auth/authSlice';
import * as z from 'zod';
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Container, Form, Input, SignIn } from './UserFormStyle';
import { addUser } from '../../redux/Auth/userSlice';

const User = z.object({
    username: 
    z.string()
    .min(3, { message: "L'username deve contenere un minimo di 3 caratteri" })
    .max(10, { message: "L'username deve contenere un massimo di 10 caratteri"}),
    email:
    z.string()
    .email({ message: "Inserire una email valida"})
    .min(5, { message: "L'email deve contenere un minimo di 5 caratteri"}),
    password: z.string()
    .regex(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/, { message: "La password deve contenere almeno un numero e un carattere speciale e dev'essere lunga almeno 8 caratteri"}),
    confirmPassword: z.string().regex(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/, { message: "La password deve contenere almeno un numero e un carattere speciale e dev'essere lunga almeno 8 caratteri" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Le password non coincidono",
    path: ["confirmPassword"]
  });

type FormUserType = z.infer<typeof User>;

interface FormData {
  username: string,
  email: string,
  password: string,
  confirmPassword: string
}
  
const UserForm = () => {
  const dispatch = useDispatch();
  const { zodResolver } = require('@hookform/resolvers/zod');
  const { register, handleSubmit, formState: { errors } } = useForm<FormUserType>({ resolver: zodResolver(User)});

  const [success, setSuccess] = useState(false);

    const onSubmit = (data: FormData) => {
    setSuccess(true);
    dispatch(updateRegistrationData(data));
    dispatch(addUser(data));
    console.log(data);
    }

  return (
    <>
      <Container>
      {success ? (
      <Form style={{justifyContent: 'center'}}>
        <h1 style={{textAlign: 'center'}}>Ti sei registrato correttamente!</h1>
        <SignIn href="#">Login</SignIn>
      </Form>
      ) : (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Create a new account</h2>
        <div className='mb-1'>
          <div>
            <label
            htmlFor="username">Username:</label>
          </div>
          <Input
          type="text"
          id="username"
          placeholder="Your username"
          {...register("username")}
          />
          {errors.username && (
          <small className="text-danger">{errors.username.message}</small>
          )}{" "}
        </div>
        <div className='mb-1'>
          <div>      
          <label
          htmlFor="email">Email:</label>
          </div>
          <Input 
          type="email"
          id="email"
          placeholder="user@company.com"
          {...register("email", { required: "Campo obbligatorio"})}
          />
          {errors.email && (
          <small className="text-danger">{errors.email.message}</small>
          )}{" "}
        </div>
        <div className='mb-1'>
          <div>
          <label htmlFor="password">Password:</label>
          </div>
          <Input
          type="password"
          placeholder="Your password"
          {...register("password", { required: "Campo obbligatorio"})}
          />
          {errors.password && (
          <small className="text-danger">{errors.password.message}</small>
          )}{" "}
        </div>
        <div className='mb-1'>
          <div>
          <label htmlFor="confirmPassword">Conferma password:</label>
          </div>
          <Input
          type="password"
          placeholder="Confirm your password"
          {...register("confirmPassword", { required: "Campo obbligatorio"})}
          />
          {errors.confirmPassword && (
          <small className="text-danger">{errors.confirmPassword.message}</small>
          )}{" "}
        </div>
        <Button className='mt-1' type="submit">Register</Button>
      </Form>
        )
      }
    </Container>
    </>
  )
}

export default UserForm