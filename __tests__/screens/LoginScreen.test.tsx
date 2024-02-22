import React from 'react';
import LoginScreen from '../../src/screens/login/LoginScreen';
import {fireEvent, render} from '@testing-library/react-native';
import {renderWithProviders} from '../test_utils';

const mockNavigation: any = {
  replace: jest.fn(),
};
// const mockRoute: any = jest.fn();
// const mockDispatch = jest.fn();

// jest.mock('react-redux', () => ({
// useSelector: jest.fn(),
// useDispatch: () => mockDispatch,
// }));

describe('Login', () => {
  it('renders correctly', () => {
    const loginUI = renderWithProviders(
      <LoginScreen navigation={mockNavigation} />,
    );

    expect(loginUI.toJSON()).toMatchSnapshot();
  });
});
