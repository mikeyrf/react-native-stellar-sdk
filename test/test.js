import StellarSdk from '../stellar-sdk';

describe('Test', () => {
    it('Creates Keypair', () => {
        expect.assertions(1);
        return expect(StellarSdk.Keypair.randomAsync()).resolves.toHaveProperty('secret');
    });

    it('Throws Error', () => {
        expect(() => StellarSdk.Keypair.random()).toThrow();
    });
});
