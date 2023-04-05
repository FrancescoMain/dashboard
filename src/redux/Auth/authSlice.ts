import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RegistrationState, LoginState, AuthState, LoginDispatch } from "./userType";
import { usersSlice } from "./userSlice";
import { useAppSelector } from "../store";

const initialState: AuthState = {
    registration: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    },
    login: {
        email: '',
        password: ''
    },
    isAuthenticated: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateRegistrationData: (state, action: PayloadAction<RegistrationState>) => {
            state.registration = action.payload;
        },
        updateLoginData: (state, action: PayloadAction<LoginDispatch>) => {
 
            const {email, password} = action.payload 
            state.login.email = email;
            state.login.password = password;  
                                
            if (email && password) {
                state.isAuthenticated = true;
            }
        },
        updateLogout: (state) => {
            state.login = { email: '', password: ''};
            state.isAuthenticated = false;
        }
    }
})

export const {updateRegistrationData, updateLoginData} = authSlice.actions;