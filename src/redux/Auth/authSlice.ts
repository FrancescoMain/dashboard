import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RegistrationState, LoginState, AuthState } from "./userType";

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
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateRegistrationData: (state, action: PayloadAction<RegistrationState>) => {
            state.registration = action.payload;
        },
        updateLoginData: (state, action: PayloadAction<LoginState>) => {
            state.login = action.payload;
        }
    }
})

export const {updateRegistrationData, updateLoginData} = authSlice.actions;