import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { HeaderSlice } from "./header/headerSlice";
import { ProjectSlice } from "./projects/projectSlice";
import { usersSlice } from "./Auth/userSlice";
import { authSlice } from "./Auth/authSlice";


export const store = configureStore({
  reducer: {
    header: HeaderSlice.reducer,
    projects: ProjectSlice.reducer,
    users: usersSlice.reducer,
    auth: authSlice.reducer
  }
})

export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
