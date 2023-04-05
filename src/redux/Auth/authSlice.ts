import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RegistrationState, LoginState, AuthState } from "./userType";
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
        updateLoginData: (state, action: PayloadAction<LoginState>) => {
            state.login = action.payload;
            const { email, password } = state.login;
            const users = useAppSelector((state) => state.users);
            // const user = state.usersSlice.users.find((user) => user.email === email && user.password === password);
            const user = users.find((user) => user.email === email && user.password === password);
            if (user) {
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