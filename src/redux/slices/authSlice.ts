import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../reducer';

export interface User {
  user: {
    email: string;
    password: string;
  }|null;
}

const initialState: User = {
  user: null,
};

// Create the user slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveEmailPassword(state, action: PayloadAction<User>) {
      state.user = action.payload.user;
    },
    logout(state){
      state.user = null;
    }
  },
});

// Export the action creators
export const {saveEmailPassword,logout} = authSlice.actions;

// Export the reducer
export default authSlice.reducer;

// Selector
export const selectUser = (state: RootState) => state.auth.user;
