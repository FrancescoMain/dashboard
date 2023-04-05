import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {PresenzaPayload, RegistrationState, User} from "./userType";

export const usersSlice = createSlice({
    name: 'users',
    initialState: [] as User[],
    reducers: {
        addUser: (state, action: PayloadAction<RegistrationState>) => {
            state.push(action.payload);
        },
        addPresenza: (state, action: PayloadAction<PresenzaPayload>) => {
            const user = state.find((user) => user.email === action.payload.email)
            user?.presenze?.push(action.payload.presenza);
        }
    }
})

export const {addUser, addPresenza} = usersSlice.actions;