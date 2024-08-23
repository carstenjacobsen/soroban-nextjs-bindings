"use client";
import { useState } from "react";
import * as Client from "hello_world"
import styles from "./page.module.css";

const contract = new Client.Client({
  ...Client.networks.testnet,
  rpcUrl: 'https://soroban-testnet.stellar.org:443' 
});

export default function Home() {
  const [msg, setMsg] = useState("");

  const formSubmit = async (formData: FormData) => {
    let name = formData.get('name') as string;
    if (name) {
      const { result } = await contract.hello({ to: name });
      setMsg(result.join(" ") + "!");
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.description}>
          <form action={formSubmit}>
            <label>Name: </label>
            <input name="name" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      {msg}
    </main>
  );
}
