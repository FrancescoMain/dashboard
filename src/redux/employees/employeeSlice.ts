import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, {AxiosError} from 'axios';
import { Employee, EmployeesState, PushProjectsPayload } from './type';
import { store } from '../store';
import { Project } from '../projects/type';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState: EmployeesState = {
    employees: [],
    status: 'idle',
    error: null
}

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
    const response = await axios.get(API_URL);
    return response.data
})

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addProjectsToEmployees: (state, {payload}: PayloadAction<PushProjectsPayload>) => {
            const employee = state.employees[payload.employeeId];
            const newProjectAssigned = {...payload.Projects};
            employee?.projects_assigned.push(newProjectAssigned)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchEmployees.fulfilled, (state, {payload}: PayloadAction<Employee[]>) => {
                state.status = 'succeeded'
                const loadedEmployees = payload.map((employee) => {
                    employee.projects_assigned = [];
                    employee.role = "";
                    return employee
                });
                state.employees = state.employees.concat(loadedEmployees);
            })
            .addCase(fetchEmployees.rejected, (state, action: PayloadAction<any>) => {
                state.status = 'failed';
                state.error = action.payload
            })
    }
})

export const employeesReducer = employeesSlice.reducer

export type RootState = ReturnType<typeof store.getState>
export const getAllEmployees = (state: RootState) => state.employees.employees;
export const getEmployeesStatus = (state: RootState) => state.employees.status
export const getEmployeeError = (state: RootState) => state.employees.error;

export const {addProjectsToEmployees} = employeesSlice.actions;
