module.exports = {
  preset: 'react-native',
  setupFiles: ['./jestSetup.ts'],
  testPathIgnorePatterns: ['/__mocks__/', '/test_utils.tsx'],
  transformIgnorePatterns: ['node_modules/?!(@react-navigation)'],
  "moduleNameMapper": {
    "^.+\\.svg$": "<rootDir>/__mocks__/svgMock.js"
}
// "moduleNameMapper": {
//   "^.+\\.svg$": "/svgMock.js"
// }
  
};

