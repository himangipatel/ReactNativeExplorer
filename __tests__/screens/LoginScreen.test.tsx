import React from 'react';
import {render, screen} from '@testing-library/react-native';
import LoginScreen from '../../src/screens/login/LoginScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../src/navigation/Navigation';

const mockNavigation= {
    navigate: jest.fn(),
  };
  
describe('Login', () => {
  
    
  test('renders Login correctly', async () => {
    render(<LoginScreen navigation={mockNavigation as any}/>)
  });
});