import React from 'react';
import LoginScreen from '../../src/screens/login/LoginScreen';
import {fireEvent, render} from '@testing-library/react-native';
import {renderWithProviders} from '../test_utils';
import PopularMoviesScreen from '../../src/screens/popularMovies/PopularMoviesScreen';

const mockNavigation: any = {
  replace: jest.fn(),
};

describe('PopularMovies', () => {
  it('renders correctly', () => {
    const popularMovie = renderWithProviders(
      <PopularMoviesScreen navigation={mockNavigation} />,
    );

    expect(popularMovie.toJSON()).toMatchSnapshot();
  });
});
