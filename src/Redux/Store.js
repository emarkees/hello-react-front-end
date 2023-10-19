import { configureStore } from "@reduxjs/toolkit";
import GreetingReducer from './GreetingsSlice'

const store = configureStore ({
  reducer: {
    greetings: GreetingReducer
  }
});

export default store;