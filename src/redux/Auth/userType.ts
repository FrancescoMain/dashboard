export interface AuthState {
    registration: RegistrationState,
    login: LoginState,
    isAuthenticated: boolean,
}

export interface User {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

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

