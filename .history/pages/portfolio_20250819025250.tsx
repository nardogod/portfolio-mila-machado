import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Portfolio.module.css";

// Dica: Para adicionar mais projetos, basta adicionar um novo objeto a este array.
// A página irá renderizar automaticamente um novo card para cada item.
const projects = [
  {
    title: "Virtualização de Negócios",
    description:
      "Transformo negócios tradicionais em potências digitais. Minha especialidade é criar uma presença online robusta que expande seus horizontes e impulsiona suas vendas.",
    imageUrl: "/images/virtual-scroll.jpg",
    cta: {
      text: "Fale Comigo",
      link: "https://wa.me/5511999999999", // Dica: Use seu link do WhatsApp aqui
    },
  },
  // { title: 'Outro Projeto', description: '...', imageUrl: '...', cta: { ... } },
];

const PortfolioPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio - Desenvolvimento e Virtualização de Negócios</title>
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

      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href="#ecommerce" className={styles.navLink}>
            E-commerce
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            GitHub
          </a>
          <a href="#sites" className={styles.navLink}>
            Sites Personalizados
          </a>
          <a href="#curriculo" className={styles.navLink}>
            Currículo
          </a>
          <a href="#sobre" className={styles.navLink}>
            Sobre
          </a>
        </nav>
      </header>

      <main className={styles.mainContent}>
        {/* Mapeando os projetos para criar os cards dinamicamente */}
        {projects.map((project, index) => (
          <section key={index} className={styles.scrollCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={project.imageUrl}
                alt={`Imagem do projeto ${project.title}`}
                width={400}
                height={500}
                className={styles.portfolioImage}
              />
            </div>
            <div className={styles.textWrapper}>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.description}>{project.description}</p>
              <a
                href={project.cta.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                {project.cta.text}
              </a>
            </div>
          </section>
        ))}

        <section className={styles.skillsSection}>
          <h2 className={styles.skillsTitle}>Serviços e Especialidades</h2>
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
                Posicionamento estratégico no Google, garantindo que seu negócio
                seja encontrado pelos clientes certos.
              </p>
            </div>
            <div className={styles.skillCard}>
              <h3 className={styles.skillCardTitle}>Sistemas de Gestão</h3>
              <p className={styles.skillCardDescription}>
                Implementação de CRMs e ERPs para organizar sua operação,
                gerenciando clientes e recursos com maestria.
              </p>
            </div>
            <div className={styles.skillCard}>
              <h3 className={styles.skillCardTitle}>Automação</h3>
              <p className={styles.skillCardDescription}>
                Processos de automação que nutrem leads e engajam seu público,
                trabalhando por você dia e noite.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Vamos Conversar?</h2>
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
              Enviar Mensagem
            </button>
          </form>
        </section>
      </main>

      <Link href="/" className={styles.backLink}>
        ↫ Voltar
      </Link>
    </div>
  );
};

export default PortfolioPage;
