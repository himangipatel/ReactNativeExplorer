import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../reducer';

export const Language = {
  ENGLISH:'en',
  ARABIC:'ar'
}
interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: Language.ENGLISH, // Default language
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
export const selectLanguage = (state: RootState) => state.language.language;
