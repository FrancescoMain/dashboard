import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "./type";

export const ProjectSlice = createSlice({
  name: "projects",
  initialState: [] as Project[] ,
  reducers: {
    addToProject: (state, action: PayloadAction<Project>) => {
        state.push(action.payload);
    },
    deleteProject: (state, {payload}: PayloadAction<number>) => {
      const projectIndex = state.findIndex((project) => project.id === payload);
      if (projectIndex !== -1) {
        state.splice(projectIndex, 1);
      }
    }
  },
});

export const {addToProject, deleteProject} = ProjectSlice.actions;
