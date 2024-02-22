import { act, renderHook } from '@testing-library/react-native';
import useValidateEmailPass from '../../src/hooks/useValidateIDPass';

describe('useValidateEmailPass', () => {
  test('isValidEmail updates correctly when validateEmail is called', () => {
    const { result } = renderHook(() => useValidateEmailPass());

    expect(result.current.isValidEmail).toBe(false);

    act(() => {
      result.current.validateEmail('test@example.com');
    });

    expect(result.current.isValidEmail).toBe(true);
  });

  test('isValidPassword updates correctly when validatePassword is called', () => {
    const { result } = renderHook(() => useValidateEmailPass());

    expect(result.current.isValidPassword).toBe(false);

    act(() => {
      result.current.validatePassword('Password@123');
    });

    expect(result.current.isValidPassword).toBe(true);
  });

  test('email and password states update correctly', () => {
    const { result } = renderHook(() => useValidateEmailPass());

    act(() => {
      result.current.setEmail('test@example.com');
      result.current.setPassword('Password@123');
    });

    expect(result.current.email).toBe('test@example.com');
    expect(result.current.password).toBe('Password@123');
  });
});
