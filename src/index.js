import {randomBytesAsync} from './crypto';
import StellarSdk, {Keypair} from 'stellar-sdk';

Keypair.randomAsync = function randomAsync() {
    return randomBytesAsync(32)
        .then(secret => Keypair.fromRawEd25519Seed(secret));
};

Keypair.random = function random() {
    throw new Error('Use Stellar.Keypair.randomAsync for React Native');
};

module.exports = {...StellarSdk, randomBytesAsync};
