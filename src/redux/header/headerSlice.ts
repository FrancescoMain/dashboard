import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Header{
  title:string
  activeTab: number,
}

export const HeaderSlice = createSlice({
  name: "Header",
  initialState: {} as Header,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      return { ...state, title: action.payload };
    },
    setTab: (state, action: PayloadAction<number>) => {
      return {...state, activeTab: action.payload}
    }
  }
});

export const {setTitle, setTab
 
} = HeaderSlice.actions;
