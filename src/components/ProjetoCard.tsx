import type React from 'react';

interface Projeto {
  titulo: string;
  imagem: string;
  video?: string;
  github?: string;
  site?: string;
  descricaoCliente: string;
  descricaoTecnico: string;
  tags: string[];
}

interface ProjetoCardProps {
  projeto: Projeto;
  modoTecnico: boolean;
}

const ProjetoCard: React.FC<ProjetoCardProps> = ({ projeto, modoTecnico }) => {
  return (
    <div className="bg-white shadow p-4 rounded-xl">
      <img src={projeto.imagem} alt={projeto.titulo} className="rounded" />
      <h2 className="text-xl font-bold mt-2">{projeto.titulo}</h2>
      <p className="mt-1 text-gray-700">
        {modoTecnico ? projeto.descricaoTecnico : projeto.descricaoCliente}
      </p>
      <div className="flex gap-2 mt-2">
        {projeto.site && (
          <a href={projeto.site} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Ver Site
          </a>
        )}
        {modoTecnico && projeto.github && (
          <a href={projeto.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjetoCard;