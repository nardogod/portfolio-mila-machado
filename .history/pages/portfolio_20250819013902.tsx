import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Portfolio.module.css";

const PortfolioPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio - Virtualização de Negócios</title>
        <meta
          name="description"
          content="Especialista em levar negócios para o mundo digital, aumentando presença e vendas."
        />
        {/* Fontes com toque medieval/sofisticado */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=EB+Garamond&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.scrollCard}>
        <div className={styles.imageWrapper}>
          {/* Sugestão: Crie a pasta 'public/images' e coloque sua imagem lá */}
          <Image
            src="/images/virtual-scroll.jpg"
            alt="Representação digital de um negócio"
            width={400}
            height={500}
            className={styles.portfolioImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>Forjando Impérios no Reino Digital</h1>
          <p className={styles.description}>
            Assim como um ferreiro molda o aço, eu moldo a presença online do
            seu negócio. Especialista em virtualização, transformo operações
            tradicionais em potências digitais, abrindo as portas para novos
            mercados e aumentando suas vendas.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Iniciar a Conquista
          </a>
        </div>
      </div>

      <Link href="/" className={styles.backLink}>
        ↫ Voltar ao portal
      </Link>
    </div>
  );
};

export default PortfolioPage;
