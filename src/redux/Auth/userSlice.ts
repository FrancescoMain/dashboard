import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {RegistrationState, User} from "./userType";

export const usersSlice = createSlice({
    name: 'users',
    initialState: [] as User[],
    reducers: {
        addUser: (state, action: PayloadAction<RegistrationState>) => {
            state.push(action.payload);
        }
    }
})

export const {addUser} = usersSlice.actions;