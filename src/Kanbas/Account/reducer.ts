import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      // console.log("We are here!")
      state.currentUser = action.payload;
      // console.log(state.currentUser)
    },
    
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;