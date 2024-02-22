import languageReducer, { selectLanguage, setLanguage } from "../../../src/redux/slices/languageSlice";

describe('language reducer', () => {
  test('should return the initial state', () => {
    const initialState = { language: 'en' };
    expect(languageReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('should handle setLanguage', () => {
    const prevState = { language: 'en' };
    const newState = languageReducer(prevState, setLanguage('ar'));
    expect(newState.language).toBe('ar');
  });
});

describe('language selector', () => {
  test('should select the language from the state', () => {
    const state = { language: { language: 'ar' } };
    expect(selectLanguage(state as any)).toBe('ar');
  });
});
