import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  app: {
    sidebarCollapse: false,
  },
};

export const { reducer, actions } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    sidebarToggle: (state, action) => {
      state.app.sidebarCollapse = action.payload;
    },
  },
});
