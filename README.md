# react-native-stellar-sdk

This package polyfills the [stellar-sdk](https://github.com/stellar/js-stellar-sdk) for React Native. It is an extension of the [@pigzbe/react-native-stellar-sdk](https://github.com/pigzbe/react-native-stellar-sdk) implementation.

It includes native randomBytes for iOS and Android via [react-native-randombytes](https://github.com/mvayngrib/react-native-randombytes) and a React Native interface for streaming via [react-native-event-source](https://github.com/jordanbyron/react-native-event-source).

Due to the asynchronous nature of React Native's native bridge, this package adds a new asynchronous method to the Stellar Keypair utility `randomAsync` which returns a promise that resolves to the new randomly generated Keypair. The package overrides the Stellar CallBuilder.stream function to provide event streaming.

## Installation

```shell
yarn add @mikeyrf/react-native-stellar-sdk
```

Link native randomBytes module:

```shell
react-native link react-native-randombytes
```

## Usage

```javascript
import {Keypair} from '@mikeyrf/react-native-stellar-sdk';

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
