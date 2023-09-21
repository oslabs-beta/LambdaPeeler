modules.exports = {
  testEnviroment: 'node',
  roots: ['<rootDir>/__test__'], 
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
}