# react-native-stellar-sdk

It includes native randomBytes for iOS and Android via [react-native-randombytes](https://github.com/mvayngrib/react-native-randombytes).

Due to the asynchronous nature of React Native's native bridge, this package adds a new asynchronous method to the Stellar Keypair utility `randomAsync` which returns a promise that resolves to the new randomly generated Keypair.

## Installation

```shell
yarn add @pigzbe/react-native-stellar-sdk
```

Link native randomBytes module:

```shell
react-native link react-native-randombytes
```

## Usage

```javascript
import {Keypair} from '@pigzbe/react-native-stellar-sdk';

const keypair = Keypair.randomAsync().then(keypair => {
    const publicKey = keypair.publicKey();
    const secretKey = keypair.secret();
});

...

// No changes to existing code are necessary
var es = server.payments()
  .cursor('now')
  .stream({
    onmessage: function (message) {
      console.log(message);
    }
  })
```
