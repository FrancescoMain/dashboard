import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Employee, EmployeesState, PushProjectsPayload } from './type';
import { store } from '../store';
import WritableDraft from 'immer';
import { useSelector } from 'react-redux';
import { getAllProjects } from '../projects/projectSlice';

function UseProjects() {
    const projects = useSelector(getAllProjects);
    return projects
}

const initialState: EmployeesState = {
    employees: [],
    status: 'idle',
    error: null
}

const API_URL = 'https://jsonplaceholder.typicode.com/users';
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
            const newProjectAssigned = {
                ...payload.project,
                assigned_to: [employee.name]
            };
            employee?.projects_assigned.push(newProjectAssigned)
            const projects = UseProjects();
            // const projectIndex = state.projects.findIndex(project => project.id === payload.project.id);
            // if (projectIndex !== -1) {
            //     projects[projectIndex].assigned_to = [employee.name];
            // }
            // (state as WritableDraft<EmployeesState>).projects = projects;
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
