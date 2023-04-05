import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "./type";

export const ProjectSlice = createSlice({
  name: "projects",
  initialState: [] as Project[] ,
  reducers: {
    addToProject: (state, {payload}: PayloadAction<Project>) => {
        const newProject = {
          ...payload,
          id: state.length > 0 ? Math.max(...state.map((project) => project.id)) + 1 : 1
        }
        state.push(newProject);
    },
    deleteProject: (state, {payload}: PayloadAction<number>) => {
      const projectIndex = state.findIndex((project) => project.id === payload);
      if (projectIndex !== -1) {
        state.splice(projectIndex, 1);
      }
    },
    // editProject: (state, {payload}: PayloadAction<Project>) => {
    //   const { id, title, description, deadline, company, assigned_to } = payload;
    //   const existingProject = state.find(project => project.id === id);
    //   if (existingProject) {
    //     existingProject.title = title,
    //     existingProject.description = description,
    //     existingProject.deadline = deadline,
    //     existingProject.company = company,
    //     existingProject.assigned_to = assigned_to
    //   }
    // }
  },
});

export const {addToProject, deleteProject} = ProjectSlice.actions;
