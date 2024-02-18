import React from 'react';
import { render } from '@testing-library/react-native';
import Navigation from '../src/navigation/Navigation';

// Mock the redux-persist/integration/react library to prevent it from interfering with tests
jest.mock('redux-persist/integration/react', () => ({
  PersistGate: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('Navigation component', () => {
  it('renders SplashScreen by default', () => {
    const { getByTestId } = render(<Navigation />);

    // Check if SplashScreen is rendered
    expect(getByTestId('splash-screen')).toBeTruthy();
  });

  // Add more test cases to ensure navigation works as expected
  it('navigates to LoginScreen correctly', () => {
    // Write test case for navigating to LoginScreen
  });

  it('navigates to PopularMoviesScreen correctly', () => {
    // Write test case for navigating to PopularMoviesScreen
  });

  // You can add more test cases for other navigation scenarios
});
