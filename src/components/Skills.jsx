import React, { useState } from 'react';

export function Skills({ categories }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeTab);

  return (
    <section id="habilidades" className="relative py-24 border-t border-purple-500/15 overflow-hidden">
      
      {/* Background Glow */}
      <div className="ambient-glow-2 top-20 right-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-mono-code text-purple-300 mb-3">
            <span>02 // COMPETÊNCIAS & DOMÍNIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Minhas <span className="text-gradient-purple">Habilidades</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Habilidades práticas em desenvolvimento de software, montagem de hardware e produção multimídia, apresentadas com fidelidade e sem métricas arbitrárias.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 border border-purple-500'
                : 'glass-panel text-slate-300 hover:text-white'
            }`}
          >
            Todas as Áreas
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 border border-purple-500'
                  : 'glass-panel text-slate-300 hover:text-white'
              }`}
            >
              {cat.name.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div 
              key={category.id} 
              className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Category Top Banner */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-purple-500/15">
                  <div>
                    <span className="text-[11px] font-mono-code text-purple-400 uppercase tracking-wider block mb-1">
                      {category.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {category.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 font-mono-code text-sm font-bold">
                    {category.skills.length}
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Sub-skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono-code text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                          Prático
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed mb-3">
                        {skill.description}
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {skill.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Micro Note */}
              <div className="mt-6 pt-4 border-t border-purple-500/10 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
                <span>Habilidade certificada / prática</span>
                <span className="text-purple-400">Conhecimento aplicado ✓</span>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
