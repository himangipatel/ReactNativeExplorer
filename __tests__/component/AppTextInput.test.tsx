import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AppTextInput from '../../src/component/AppTextInput';

describe('AppTextInput', () => {
  test('renders correctly with placeholder', () => {
    const { getByPlaceholderText } = render(<AppTextInput placeholder="Enter text" />);

    expect(getByPlaceholderText('Enter text')).toBeTruthy();
   

  });

 
});
