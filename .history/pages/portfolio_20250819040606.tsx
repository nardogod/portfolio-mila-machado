import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Portfolio.module.css";

// --- ESTRUTURA DE DADOS PARA A PÁGINA ---

// Seção principal, o "cartão de visitas" digital dela.
const heroData = {
  title: "Mila Machado",
  subtitle: "Energia e Dança que Transformam o seu Evento",
  description:
    "Especialista em levar alegria e profissionalismo para palcos e festas. Com anos de experiência em forró, presença VIP e animação, garanto um evento inesquecível.",
  imageUrl: "/images/mila-principal.jpg", // Dica: Use a melhor foto dela aqui!
  cta: {
    text: "Faça um Orçamento via WhatsApp",
    link: "https://wa.me/5511999999999", // Dica: Use seu link do WhatsApp aqui
  },
};

// Detalhando os serviços que ela oferece.
const services = [
  {
    id: "danca",
    title: "Dança para Bandas de Forró",
    description:
      "Performance vibrante e técnica que complementa o show e cativa o público. Experiência com repertórios variados e presença de palco contagiante.",
  },
  {
    id: "vip",
    title: "Presença VIP",
    description:
      "Agregue valor e sofisticação ao seu evento, coquetel ou lançamento com uma presença marcante, carismática e profissional.",
  },
  {
    id: "animacao",
    title: "Animação de Festas",
    description:
      "Interação, diversão e personagens para todos os tipos de celebração. Transformo sua festa em um momento único de alegria para todos os convidados.",
  },
];

const PortfolioPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Mila Machado - Dançarina, Presença VIP e Animação de Eventos
        </title>
        <meta
          name="description"
          content="Portfólio de Mila Machado. Contrate para shows de forró, presença VIP e animação de festas. Energia que contagia!"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;900&family=Montserrat:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href="#servicos" className={styles.navLink}>
            Serviços
          </a>
          <a href="#galeria" className={styles.navLink}>
            Galeria
          </a>
          <a href="#sobre" className={styles.navLink}>
            Sobre Mim
          </a>
          <a href="#contato" className={styles.navLink}>
            Contato
          </a>
        </nav>
      </header>

      <main className={styles.mainContent}>
        {/* Seção Hero - O primeiro impacto */}
        <section className={styles.heroSection}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>{heroData.title}</h1>
            <h2 className={styles.subtitle}>{heroData.subtitle}</h2>
            <p className={styles.description}>{heroData.description}</p>
            <a
              href={heroData.cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              {heroData.cta.text}
            </a>
          </div>
          <div className={styles.heroImageWrapper}>
            <Image
              src={heroData.imageUrl}
              alt={`Foto principal de ${heroData.title}`}
              layout="fill"
              objectFit="cover"
              className={styles.portfolioImage}
              priority // Otimiza o carregamento da imagem principal
            />
          </div>
        </section>

        {/* Seção de Serviços */}
        <section id="servicos" className={styles.skillsSection}>
          <h2 className={styles.skillsTitle}>Meus Serviços</h2>
          <div className={styles.skillsGrid}>
            {services.map((service) => (
              <div key={service.id} className={styles.skillCard}>
                <h3 className={styles.skillCardTitle}>{service.title}</h3>
                <p className={styles.skillCardDescription}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Galeria (Sugestão) */}
        <section id="galeria" className={styles.gallerySection}>
          <h2 className={styles.galleryTitle}>Galeria de Fotos</h2>
          <p className={styles.gallerySubtitle}>
            Veja um pouco do meu trabalho em ação.
          </p>
          {/* Aqui você poderia mapear um array de imagens e criar uma galeria visualmente atraente */}
          <div className={styles.galleryGrid}>
            {/* Exemplo de imagem na galeria */}
            <div className={styles.galleryItem}>
              <Image
                src="/images/evento-forro-1.jpg"
                alt="Mila dançando em show de forró"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/presenca-vip-1.jpg"
                alt="Mila em evento VIP"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/animacao-festa-1.jpg"
                alt="Mila animando festa com fantasia"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        <section id="contato" className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Vamos Conversar?</h2>
          <a
            href={heroData.cta.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.submitButton} // Reutilizando o estilo do botão
          >
            Chamar no WhatsApp
          </a>
        </section>
      </main>

      <Link href="/" className={styles.backLink}>
        ↫ Voltar
      </Link>
    </div>
  );
};

export default PortfolioPage;
