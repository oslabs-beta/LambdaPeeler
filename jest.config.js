module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/__tests__'], 
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/']
}