import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
// import { moviesApi } from './slices/movieSlice';
import languageSlice from './slices/languageSlice';
import { moviesApi } from './slices/movieSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  language: languageSlice,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

export default rootReducer;

// Root state type
export type RootState = ReturnType<typeof rootReducer>;
