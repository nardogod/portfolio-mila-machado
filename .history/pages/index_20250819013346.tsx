import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Welcome.module.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const HomePage: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Define o tamanho do canvas para preencher a tela
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 1. Desenha o fundo gradiente no canvas (a camada de cima da raspadinha)
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "#0f2027");
    gradient.addColorStop(0.5, "#203a43");
    gradient.addColorStop(1, "#2c5364");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Desenha o texto de boas-vindas
    const titleText = "Bem-vindo ao meu mundo";
    const fontSize = Math.min(canvas.width / 12, 70); // Tamanho da fonte responsivo
    ctx.font = `bold ${fontSize}px 'Orbitron', sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#FFF"; // Cor branca para o texto
    ctx.fillText(titleText, canvas.width / 2, canvas.height / 2);

    // 3. Prepara o efeito de "apagar"
    ctx.globalCompositeOperation = "destination-out";

    const scratch = (x: number, y: number) => {
      ctx.beginPath();
      // Desenha um círculo para "raspar" a área
      ctx.arc(x, y, 50, 0, Math.PI * 2, true);
      ctx.fill();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      scratch(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        scratch(touch.clientX - rect.left, touch.clientY - rect.top);
      }
    };

    // Adiciona os ouvintes de evento
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);

    // Função de limpeza para remover os ouvintes quando o componente desmontar
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, []); // O array vazio garante que este efeito rode apenas uma vez

  const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFadingOut(true);
    // Espera a animação de fade-out terminar antes de navegar
    setTimeout(() => {
      router.push("/portfolio");
    }, 500); // Deve corresponder à duração da transição no CSS
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Bem-vindo!</title>
        <meta name="description" content="Bem-vindo ao meu mundo com Next.js" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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

      <canvas
        ref={canvasRef}
        className={`${styles.scratchCanvas} ${
          isFadingOut ? styles.fadeOut : ""
        }`}
      />

      <main className={styles.main}>
        <button
          className={styles.enterButton}
          onClick={handleEnter}
          disabled={isFadingOut}
        >
          Entrar
        </button>
      </main>
    </div>
  );
};

export default HomePage;
