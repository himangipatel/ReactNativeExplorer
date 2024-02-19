import AsyncStorage from '@react-native-async-storage/async-storage';

// Mock AsyncStorage methods
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  // Add other AsyncStorage methods as needed
}));

