import responsive, { deviceHeight, deviceWidth } from '../../src/utils/responsive';

// Mocking Dimensions and PixelRatio modules
jest.mock('react-native', () => ({
  Dimensions: {
    get: jest.fn().mockReturnValue({ width: 375, height: 667 }), // Mock device width and height
    screen: { width: 750, height: 1334 }, // Mock screen width and height
  },
  PixelRatio: {
    roundToNearestPixel: jest.fn((value) => value), // Mock roundToNearestPixel to return the input value
  },
}));

describe('responsive utility', () => {
  test('width function scales width correctly', () => {
    expect(responsive.width(100)).toBe(100);
    expect(responsive.width(200)).toBe(200);
  });

  test('height function scales height correctly', () => {
    expect(responsive.height(100)).toBe(100); 
    expect(responsive.height(200)).toBe(200);
  });

  test('margin function scales margin correctly', () => {
    expect(responsive.margin(10)).toBe(10); 
    expect(responsive.margin(20)).toBe(20);
  });

  test('padding function scales padding correctly', () => {
    expect(responsive.padding(10)).toBe(10); 
    expect(responsive.padding(20)).toBe(20); 
  });

  test('pHeight function calculates percentage of screen height correctly', () => {
    expect(responsive.pHeight(50)).toBe(667 / 2); 
    expect(responsive.pHeight(25)).toBe(667 / 4); 
  });

  
  test('deviceHeight and deviceWidth values match the mocked Dimensions', () => {
    expect(deviceHeight).toBe(667); // Mocked device height
    expect(deviceWidth).toBe(375); // Mocked device width
  });

  test('fontSize function scales font size correctly', () => {
    expect(responsive.fontSize(16)).toBe(16); 
    expect(responsive.fontSize(20)).toBe(20); 
  });
});
