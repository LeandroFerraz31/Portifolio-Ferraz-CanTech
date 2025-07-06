import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProjetoCard from './components/ProjetoCard';
import HeroSection from './components/HeroSection';
import BotaoContato from './components/BotaoContato';
import SobreMim from './pages/SobreMim';
import projetosData from './data/projects.json';
import './styles/variables.css';

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

function App() {
  const [modoTecnico, setModoTecnico] = useState(false);
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(() => {
    setProjetos(projetosData);
  }, []);

  return (
    <BrowserRouter>
      <div className="font-sans bg-[var(--color-background)] min-h-screen">
        <header className="flex justify-between items-center p-4 bg-white shadow sticky top-0 z-50">
          <h1 className="text-2xl font-bold">Meu Portfólio</h1>
          <nav>
            <Link to="/" className="mr-4 text-[var(--color-text)]">Home</Link>
            <Link to="/sobre" className="text-[var(--color-text)]">Sobre Mim</Link>
          </nav>
          <button
            className="bg-[var(--color-primary)] text-white px-4 py-2 rounded"
            onClick={() => setModoTecnico(!modoTecnico)}
          >
            {modoTecnico ? '👥 Ver como Cliente' : '👨‍💻 Ver como Técnico'}
          </button>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <main className="p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {projetos.map((projeto, idx) => (
                    <ProjetoCard key={idx} projeto={projeto} modoTecnico={modoTecnico} />
                  ))}
                </main>
              </>
            }
          />
          <Route path="/sobre" element={<SobreMim modoTecnico={modoTecnico} />} />
        </Routes>
        <BotaoContato />
      </div>
    </BrowserRouter>
  );
}

export default App;