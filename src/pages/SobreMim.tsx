import React from 'react';

interface SobreMimProps {
  modoTecnico: boolean;
}

const SobreMim: React.FC<SobreMimProps> = ({ modoTecnico }) => {
  return (
    <section className="min-h-screen p-4 bg-[var(--color-background)]">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/assets/perfil.jpg"
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
        <p className="text-lg text-[var(--color-text)] mb-6">
          {modoTecnico
            ? 'Desenvolvedor Front-end com experiência em React, Tailwind e Vite. Foco em interfaces responsivas e performáticas, utilizando JSON para dados dinâmicos e modularização para escalabilidade.'
            : 'Sou um profissional dedicado a criar sites e sistemas que ajudam negócios a crescer. Minha missão é entregar soluções simples, modernas e que atendam às suas necessidades.'}
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {['React', 'Tailwind', 'Vite', 'JavaScript', 'HTML', 'CSS'].map((skill, idx) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={idx}
              className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <a
          href="#contato"
          className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg"
        >
          Entre em Contato
        </a>
      </div>
    </section>
  );
};

export default SobreMim;