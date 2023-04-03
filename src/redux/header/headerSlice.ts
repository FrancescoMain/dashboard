import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const HeaderSlice = createSlice({
  name: "Header",
  initialState: { title: "" },
    reducers: {
        setTitle: (state, action) => {
            return { ...state, title: action.payload };
    }
    
  },
});

export const {setTitle
 
} = HeaderSlice.actions;
