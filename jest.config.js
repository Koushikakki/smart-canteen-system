module.exports = {
  preset: 'react-native',
  testEnvironment: "react-native",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.styles.ts",
    "!src/**/index.ts",
    "App.tsx"
  ]
};