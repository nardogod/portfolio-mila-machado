import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Welcome.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bem-vindo!</title>
        <meta name="description" content="Bem-vindo ao meu mundo com Next.js" />
        <link rel="icon" href="/favicon.ico" />
        {/* Importando uma fonte do Google Fonts para um visual mais estilizado */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bem-vindo ao meu mundo</h1>
      </main>
    </div>
  );
};

export default HomePage;
