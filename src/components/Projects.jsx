import React, { useState } from 'react';

export function Projects({ projects }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'desenvolvimento', label: 'Desenvolvimento Web' },
    { id: 'programacao', label: 'Programação' },
    { id: 'fotografia', label: 'Fotografia' },
    { id: 'drone', label: 'Drone & Aéreo' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projetos" className="relative py-24 border-t border-purple-500/15 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="ambient-glow-1 bottom-10 left-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-mono-code text-purple-300 mb-3">
            <span>03 // PORTFÓLIO & PRÁTICA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Meus <span className="text-gradient-purple">Projetos</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Aplicações web interativas, códigos em Java e backend, produções fotográficas e operações com drone.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group glass-panel rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 ${
                project.isPlaceholder 
                  ? 'border-dashed border-purple-500/30 hover:border-purple-500/60' 
                  : 'hover:-translate-y-2'
              }`}
            >
              <div>
                
                {/* Project Image / Visual Area */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-2xl text-purple-300 mb-2 group-hover:scale-110 transition-transform">
                        {project.iconType === 'server' && '⚙️'}
                        {project.iconType === 'coffee' && '☕'}
                        {project.iconType === 'camera' && '📸'}
                        {project.iconType === 'navigation' && '🛸'}
                        {project.iconType === 'code' && '⚡'}
                        {!project.iconType && '💻'}
                      </div>
                      <span className="text-xs font-mono-code text-purple-400">
                        {project.categoryLabel}
                      </span>
                    </div>
                  )}

                  {/* Top Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider backdrop-blur-md bg-purple-950/80 border border-purple-500/40 text-purple-300 shadow-md">
                      {project.badge}
                    </span>
                  </div>

                  {project.isPlaceholder && (
                    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center">
                      <span className="px-4 py-2 rounded-xl text-xs font-mono-code bg-purple-600/30 border border-purple-500/50 text-purple-200">
                        Espaço para Futuro Projeto
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[11px] font-mono-code text-purple-400 mb-1">
                    {project.type}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold border border-purple-500/30 hover:border-purple-500/60 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 flex items-center justify-center gap-2 group-hover:bg-purple-600 group-hover:text-white transition-all duration-200">
                  <span>Ver Detalhes do Projeto</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/40 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image if exists */}
            {selectedProject.image && (
              <div className="h-56 w-full rounded-2xl overflow-hidden mb-6 border border-purple-500/30">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono-code bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {selectedProject.badge}
              </span>
              <span className="text-xs font-mono-code text-slate-400">
                {selectedProject.type}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed mb-6 space-y-3">
              <p>{selectedProject.fullDescription}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-purple-400 mb-2 font-bold">
                Tecnologias & Ferramentas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono-code bg-purple-500/15 border border-purple-500/30 text-purple-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-purple-500/20">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-500 transition-colors"
              >
                Fechar Detalhes
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
