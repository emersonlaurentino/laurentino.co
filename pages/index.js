import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Emerson Laurentino</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <nav className={styles.header}>
        <a href="/">
          <img src="/logo.svg" alt="Emerson Laurentino Logo" className={styles.logo} />
        </a>
      </nav>

      <h1 className={styles.title}>Emerson Laurentino</h1>

      <p className={styles.description}>I'm a software engineer</p>

      <p className={styles.description}>
        Working with{" "}
        <a href="https://vtex.com" rel="noopener noreferrer" target="_blank">
          VTEX
        </a>{" "}
        to build the fastest store in the world.
      </p>
    </main>
  );
}
