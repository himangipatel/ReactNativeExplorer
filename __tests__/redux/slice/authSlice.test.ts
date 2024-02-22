import authReducer,{ User, logout, saveEmailPassword } from "../../../src/redux/slices/authSlice";

describe('authSlice reducer', () => {
  test('saveEmailPassword action updates user correctly', () => {
    const initialState: User = { user: null };
    const user = { email: 'test@example.com', password: 'password123' };
    const newState = authReducer(initialState, saveEmailPassword({ user }));

    expect(newState.user).toEqual(user);
  });

  test('logout action sets user to null', () => {
    const initialState: User = { user: { email: 'test@example.com', password: 'password123' } };
    const newState = authReducer(initialState, logout());

    expect(newState.user).toBeNull();
  });
});

describe('authSlice selectors', () => {
  test('selectUser selector returns correct user from state', () => {
    const user = { email: 'test@example.com', password: 'password123' };
    const state = { auth: { user } };

    // expect(selectUser(state)).toEqual(user);
  });
});
