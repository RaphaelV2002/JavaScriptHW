import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  users: [],
};

const usersReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsersToStore(state, actions) {
      const { users, loaded } = actions.payload;
      state.users = users;
      state.isLoading = loaded;
    },
  },
});

export const { addUsersToStore } = usersReducer.actions;

export default usersReducer.reducer;
