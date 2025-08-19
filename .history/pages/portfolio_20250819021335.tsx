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

      <section className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>Arsenal de Habilidades</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <h3 className={styles.skillCardTitle}>E-commerce</h3>
            <p className={styles.skillCardDescription}>
              Criação de lojas virtuais robustas e otimizadas para conversão,
              transformando visitantes em clientes.
            </p>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillCardTitle}>SEO</h3>
            <p className={styles.skillCardDescription}>
              Posicionamento estratégico no Google, garantindo que seu reino
              digital seja encontrado pelos súditos certos.
            </p>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillCardTitle}>Sistemas de Gestão</h3>
            <p className={styles.skillCardDescription}>
              Implementação de CRMs e ERPs para organizar seu castelo,
              gerenciando clientes e recursos com maestria.
            </p>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillCardTitle}>Automação</h3>
            <p className={styles.skillCardDescription}>
              Feitiços de automação que nutrem leads e engajam seu público,
              trabalhando por você dia e noite.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Envie um Papiro Digital</h2>
        <form
          className={styles.contactForm}
          // A lógica para enviar o formulário iria aqui
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Seu Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Seu Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Sua Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={styles.formTextarea}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Despachar Mensagem
          </button>
        </form>
      </section>

      <Link href="/" className={styles.backLink}>
        ↫ Voltar ao portal
      </Link>
    </div>
  );
};

export default PortfolioPage;

export default PortfolioPage;
