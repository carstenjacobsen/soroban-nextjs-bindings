# Soroban smart contracts in Next.js
Soroban enables developers to build smart contracts on the Stellar blockchain, and incorporate the advanced assets and payment features of Stellar, in their own dApps. This tutorial shows how to invoke smart contracts from a simple web application, built with Next.js.

## Deploy Hello World smart contract
The default Hello World described in the documentation is used in this tutorial, without any modifications. All needed to setup and test bindings is a smart contract that can accept a text string and respond with a value. It’s less important what the smart contract actually does. For full installation guide see [Setup](https://developers.stellar.org/docs/build/smart-contracts/getting-started/setup) or skip to the [Hello](https://developers.stellar.org/docs/build/smart-contracts/getting-started/hello-world) World section if the Stellar CLI is already installed.

## TypeScript bindings
The Stellar CLI can generate bindings for different programming languages (see [documentation](https://developers.stellar.org/docs/tools/developer-tools/cli/stellar-cli#stellar-contract-bindings)), so there’s no need for writing code to communicate directly with the smart contract through RPC. The Stellar CLI will create a TypeScript package, easy to implement in a TypeScript project. In a terminal, run this command:

```bash
stellar contract bindings typescript \
  --network testnet \
  --contract-id <your-contract-id> \
  --output-dir package/hello_world
```

