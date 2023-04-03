import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "./type";

export const ProjectSlice = createSlice({
  name: "projects",
  initialState: [] as Project[] ,
  reducers: {
    addToProject: (state, action: PayloadAction<Project>) => {
        state.push(action.payload)
    }
  },
});

export const {addToProject
 
} = ProjectSlice.actions;
