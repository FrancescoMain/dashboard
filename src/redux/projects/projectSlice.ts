import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project, ProjectsState } from "./type";


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
  }
});

export const {addToProject, deleteProject, editProject, setSearchQuery} = ProjectSlice.actions;
