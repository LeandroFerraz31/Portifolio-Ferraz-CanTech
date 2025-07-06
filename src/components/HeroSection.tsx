import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/assets/apresentacao.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center bg-black/40">
        <div className="text-center text-white max-w-2xl p-4">
          <h1 className="text-4xl font-bold mb-4">Olá! Eu sou [Seu Nome]</h1>
          <p className="text-lg mb-6">
            Seja bem-vindo ao meu portfólio. Aqui você pode navegar entre projetos de forma simples: 
            use o botão acima para alternar entre a visão do cliente e a visão técnica. Cada projeto possui demonstrações, links e explicações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;