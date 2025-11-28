module.exports = {
  root: true,
  
  extends: '@react-native',
  
  overrides: [
    {
      files: [
        '**/*.test.{js,ts,tsx}', 
        '**/__tests__/**', 
        'jest.setup.js' 
      ],
      env: {
        jest: true,
      },
      
    },
  ],
};