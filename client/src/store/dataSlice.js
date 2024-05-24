import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   storeData : [{}] ,
};

const dataSlice = createSlice({
   name: "server",
   initialState,
   reducers: {
      setData: (state, action) => {
         state.storeData = action.payload;
      },
   },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
