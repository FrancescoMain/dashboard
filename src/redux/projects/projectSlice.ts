import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project, ProjectsState } from "./type";
import { store } from "../store";
import { Employee } from "../employees/type";

export interface UpdateProjectState {
  employees: Employee[]
  project: Project,
  employeeId: number
}

const initialState: ProjectsState = {
  projects: [],
  searchQuery: ''
}

export const ProjectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addToProject: (state, {payload}: PayloadAction<Project>) => {
        const newProject = {
          ...payload,
          id: state.projects.length > 0 ? Math.max(...state.projects.map((project) => project.id)) + 1 : 1
        }
        state.projects.push(newProject);
    },
    deleteProject: (state, {payload}: PayloadAction<number>) => {
      const projectIndex = state.projects.findIndex((project) => project.id === payload);
      if (projectIndex !== -1) {
        state.projects.splice(projectIndex, 1);
      }
    },
    editProject: (state, {payload}: PayloadAction<Project>) => {
      const { id, title, description, deadline, company, assigned_to } = payload;
      const existingProject = state.projects.find(project => project.id === id);
      if (existingProject) {
        existingProject.title = title;
        existingProject.description = description;
        existingProject.deadline = deadline;
        existingProject.company = company;
        existingProject.assigned_to = assigned_to;
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    assignEmployeeToProject: (state, {payload}: PayloadAction<UpdateProjectState>) => {
      const employee = payload.employees[payload.employeeId];
      state.projects[payload.project.id-1].assigned_to.push(employee.name);
    },
    removeEmployeeFromProject: (state, {payload}: PayloadAction<UpdateProjectState>) => {
      const employee = payload.employees[payload.employeeId];
      const index = state.projects[payload.project.id-1].assigned_to.findIndex(name => name === employee.name);
      if (payload.project.id-1 !== -1) {
        state.projects[payload.project.id-1].assigned_to.splice(index, 1);
      }
    }
  }
});

export type RootState = ReturnType<typeof store.getState>
export const getAllProjects = (state: RootState) => state.projects.projects;

export const {addToProject, deleteProject, editProject, setSearchQuery, assignEmployeeToProject, removeEmployeeFromProject} = ProjectSlice.actions;
