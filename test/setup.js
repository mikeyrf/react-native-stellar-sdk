require('react-native').NativeModules.RNRandomBytes = {
  randomBytes: (length, cb) => cb(null, 'i5gOos0YivqmiLBVAsWTbU9VWBausxF43ghv2C+n9y4=')
};

global.window = global;

window.XMLHttpRequest = jest.fn().mockImplementation(() => ({
  open: jest.fn(),
  send: jest.fn(),
  setRequestHeader: jest.fn(),
  abort: jest.fn()
}));
