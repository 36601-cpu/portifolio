import React from 'react';

export function Footer({ personal, onOpenReferences }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-purple-500/15 bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-500/10">
          
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-purple-500/25">
              GH
            </div>
            <div>
              <h4 className="font-bold text-white text-base leading-tight">
                {personal.name}
              </h4>
              <p className="text-xs text-slate-400 font-mono-code">
                {personal.role}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#inicio" className="hover:text-purple-400 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-purple-400 transition-colors">Sobre</a>
            <a href="#habilidades" className="hover:text-purple-400 transition-colors">Habilidades</a>
            <a href="#projetos" className="hover:text-purple-400 transition-colors">Projetos</a>
            <a href="#contato" className="hover:text-purple-400 transition-colors">Contato</a>
            <button
              onClick={onOpenReferences}
              className="text-purple-400 hover:text-purple-300 font-mono-code underline underline-offset-4"
            >
              Referências de Design
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono-code"
            title="Voltar ao Topo"
          >
            <span>Topo</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Gustavo Henrique Barros Matiello. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 font-mono-code">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            <span>Desenvolvido com React, Tailwind CSS & JavaScript</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
