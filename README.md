# Soroban smart contracts in Next.js
Soroban enables developers to build smart contracts on the Stellar blockchain, and incorporate the advanced assets and payment features of Stellar, in their own dApps. This tutorial shows how to invoke smart contracts from a simple web application, built with Next.js.

## Deploy Hello World smart contract
The default Hello World described in the documentation is used in this tutorial, without any modifications. All needed to setup and test bindings is a smart contract that can accept a text string and respond with a value. It’s less important what the smart contract actually does. For full installation guide see [Setup](https://developers.stellar.org/docs/build/smart-contracts/getting-started/setup) or skip to the [Hello World](https://developers.stellar.org/docs/build/smart-contracts/getting-started/hello-world) section if the Stellar CLI is already installed. Note: The contract ID will be needed in the next step.

## TypeScript bindings
The Stellar CLI can generate bindings for different programming languages (see [documentation](https://developers.stellar.org/docs/tools/developer-tools/cli/stellar-cli#stellar-contract-bindings)), so there’s no need for writing code to communicate directly with the smart contract through RPC. The Stellar CLI will create a TypeScript package, easy to implement in a TypeScript project. In a terminal, run this command:

```bash
stellar contract bindings typescript \
  --network testnet \
  --contract-id <your-contract-id> \
  --output-dir package/hello_world
```

## Install Next.js
This tutorial assumes that Node is installed, if that’s not the case, the Next.js [documentation](https://nextjs.org/docs/getting-started/installation) has a section about requirements. To create a Next.js project run this command in a terminal:

```bash
npx create-next-app@latest 
```

## Add binding package
The binding package that was created in Step 2 can now be copied into the Next.js project. Copy package/hello_world (both folder and subfolder including all files) to the root of the Next.js project. 

The package has to be linked to the project, since it’s a local package, and not installed from the public npm registry. Linking the package is a two-step process. First a symlink in the global package folder is created. The next step is to create a symlink from the global package to the Next.js project’s node_moduls folder. 

These commands will created the two-way link:

```bash
cd package/hello_world
npm run build
npm link

cd ../..
npm link hello_world
```

The package is now ready to be used like any other package installed from the public npm registry. Note the package has to be built before linking.

## Build the application
Instead of building a Next.js project from scratch, the default application installed with Next.js is used, and then modified to fit the needs for this application. The default Next.js page has a lot of information, links, images etc. and all of that can be removed, so only the most essential code is left. The `src/app/page.tsx` file should look like this after removing the default content:

```js
import styles from "./page.module.css"; 

export default function Home() { 
   return ( 
      <main className={styles.main}> 
         <div className={styles.center}> 
            <div className={styles.description}> 

            </div> 
         </div>
      </main> 
   ); 
}
```



