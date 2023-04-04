export interface RegistrationState {
    username: string,
    email: string,
    password: string,
    confirmPassword: string 
}

export interface LoginState {
   email: string,
   password: string
}

export interface User {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface AuthState {
    registration: RegistrationState,
    login: LoginState
}