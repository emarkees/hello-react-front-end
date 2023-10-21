import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  randomGreeting: '',
  isLoading: false,
  errors: null,
};

export const fetchGreetings = createAsyncThunk('greeting/fetchGreetings', async () => {
  const resp = await axios.get('http://127.0.0.1:3000/messages');
  return resp.data;
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.randomGreeting = action.payload;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      });
  },
});

export default greetingSlice.reducer;
