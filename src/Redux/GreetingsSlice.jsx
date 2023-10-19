import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  randomgreetings: [],
  isLoading: false,
  errors: null
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducer: {},
  extraReducer(builder) {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.randomgreetings = action.payload;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      });
  }
});

export default greetingSlice.reducer