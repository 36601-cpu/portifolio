import React from 'react';

export function ReferencesModal({ isOpen, onClose, references }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl glass-panel p-6 sm:p-10 rounded-3xl border border-purple-500/40 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 transition-colors"
          aria-label="Fechar modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="mb-8 pb-4 border-b border-purple-500/20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code bg-purple-500/15 border border-purple-500/30 text-purple-300 mb-2">
            <span>AWWWARDS & SITEINSPIRE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Documento de Referências Visuais de Design
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Pesquisa aprofundada de 5 referências internacionais premiadas utilizadas para guiar a identidade visual, tipografia, paleta e arquitetura deste portfólio.
          </p>
        </div>

        {/* References List */}
        <div className="space-y-6">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-purple-500/20 text-purple-400 font-mono-code text-xs font-bold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    {ref.name}
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono-code px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {ref.award}
                  </span>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono-code text-purple-400 hover:text-purple-300 underline flex items-center gap-1"
                  >
                    <span>Acessar</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mt-4 pt-4 border-t border-purple-500/10">
                <div>
                  <strong className="text-purple-300 font-mono-code block mb-1">Cores Utilizadas:</strong>
                  <span className="text-slate-300">{ref.colors}</span>
                </div>
                <div>
                  <strong className="text-purple-300 font-mono-code block mb-1">Tipografia:</strong>
                  <span className="text-slate-300">{ref.typography}</span>
                </div>
                <div>
                  <strong className="text-purple-300 font-mono-code block mb-1">Organização do Layout:</strong>
                  <span className="text-slate-300">{ref.layout}</span>
                </div>
                <div>
                  <strong className="text-purple-300 font-mono-code block mb-1">Animações & Navegação:</strong>
                  <span className="text-slate-300">{ref.motion}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-500/10 bg-purple-950/30 p-3 rounded-xl">
                <strong className="text-emerald-400 font-mono-code text-[11px] block mb-1">
                  💡 O que chamou a atenção:
                </strong>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{ref.highlight}"
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400 font-mono-code">
            Arquivo complementar disponível em: REFERENCIAS_VISUAIS.md
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-500 transition-colors"
          >
            Fechar Janela
          </button>
        </div>

      </div>
    </div>
  );
}
