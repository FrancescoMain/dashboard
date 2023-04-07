import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { HeaderSlice } from "./header/headerSlice";
import { ProjectSlice } from "./projects/projectSlice";
import { usersSlice } from "./Auth/userSlice";
import { authSlice } from "./Auth/authSlice";
import { employeesReducer } from "./employees/employeeSlice";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    header: HeaderSlice.reducer,
    projects: ProjectSlice.reducer,
    users: usersSlice.reducer,
    auth: authSlice.reducer,
    employees: employeesReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunkMiddleware)
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
