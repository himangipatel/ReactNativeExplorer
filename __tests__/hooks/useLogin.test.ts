import {saveEmailPassword, logout} from '../../src/redux/slices/authSlice';
import {act, renderHook} from '@testing-library/react-native';
import useLogin from '../../src/hooks/useLogin';
import {useDispatch} from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('useLogin', () => {
  test('adduser dispatches saveEmailPassword action with correct payload', () => {
    const dispatch = jest.fn();
    (useDispatch as any as jest.Mock).mockReturnValue(dispatch);

    const {result} = renderHook(() => useLogin());

    act(() => {
      result.current.adduser('test@example.com', 'password123');
    });

    expect(dispatch).toHaveBeenCalledWith(
      saveEmailPassword({
        user: {email: 'test@example.com', password: 'password123'},
      }),
    );
  });

  test('logoutUser dispatches logout action', () => {
    const dispatch = jest.fn();
    (useDispatch as any as jest.Mock).mockReturnValue(dispatch);

    const {result} = renderHook(() => useLogin());

    act(() => {
      result.current.logout();
    });

    expect(dispatch).toHaveBeenCalledWith(logout());
  });
});
