import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Página Principal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Você entrou no meu mundo!</h1>
        <p className={styles.description}>
          Este é o próximo passo da nossa jornada.
        </p>
      </main>
    </div>
  );
};

export default HomePage;
