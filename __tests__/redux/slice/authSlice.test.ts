import { use } from 'i18next';
import authReducer, {
  User,
  logout,
  saveEmailPassword,
  selectUser,
} from '../../../src/redux/slices/authSlice';

describe('authSlice reducer', () => {
  test('saveEmailPassword action updates user correctly', () => {
    const initialState: User = {user: null};
    const user = {email: 'test@example.com', password: 'password123'};
    const newState = authReducer(initialState, saveEmailPassword({user}));

    expect(newState.user).toEqual(user);
  });

  test('logout action sets user to null', () => {
    const initialState: User = {
      user: {email: 'test@example.com', password: 'password123'},
    };
    const newState = authReducer(initialState, logout());

    expect(newState.user).toBeNull();
  });
});

