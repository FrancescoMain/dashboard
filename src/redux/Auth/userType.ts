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

export interface LoginDispatch { 
        user: {
            username?: string | undefined;
            email?: string | undefined;
            password?: string | undefined;
            confirmPassword?: string | undefined;
        };
        email: string;
        password: string;
    
}

export interface LoginState { 
       email: string,
       password: string
    }
    

