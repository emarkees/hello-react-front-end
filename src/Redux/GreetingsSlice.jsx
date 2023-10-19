import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  randomgreetings: [],
  isLoading: false,
  errors: null
};

export const fetchGreetings = createAsyncThunk('greeting/fetchGreetings', async () => {
  const resp = await axios.get(url);
  return resp.data
})

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