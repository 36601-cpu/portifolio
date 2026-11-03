import React from 'react';

export function About({ personal, academic, courses }) {
  return (
    <section id="sobre" className="relative py-24 border-t border-purple-500/15 overflow-hidden">
      
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-mono-code text-purple-300 mb-3">
            <span>01 // TRAJETÓRIA & PERFIL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Sobre <span className="text-gradient-purple">Mim</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-base sm:text-lg">
            Conheça minha história, formação acadêmica, qualificações e a determinação que impulsiona minha jornada na área de TI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Presentation & Traits (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Bio Card */}
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-purple-500/15">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg">
                  👋
                </div>
                <div>
                  <h3 className="text-xl font-bold">Apresentação Pessoal</h3>
                  <span className="text-xs font-mono-code text-purple-400">17 anos • Campinas, SP</span>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  Meu nome é <strong className="text-white font-semibold">Gustavo Henrique Barros Matiello</strong>, tenho 17 anos e atualmente estou cursando o <strong className="text-purple-300 font-semibold">Ensino Médio com ênfase em Tecnologia da Informação</strong> no <strong className="text-white">Colégio Raphael Di Santo</strong>.
                </p>
                <p>
                  Também estou estudando <strong className="text-purple-300 font-semibold">inglês</strong> para ampliar minhas habilidades linguísticas e profissionais, entendendo a importância da língua para a documentação técnica global e o ecossistema de software.
                </p>
                <p>
                  Tenho genuíno interesse em tecnologia, programação, desenvolvimento web, montagem e manutenção de computadores, fotografia, edição de vídeos e pilotagem de drones. Sou uma pessoa <span className="text-white font-medium underline decoration-purple-500 decoration-2 underline-offset-4">responsável, dedicada, organizada e com comprovada facilidade para aprender novas tecnologias</span>.
                </p>
              </div>

              {/* Personality Strengths Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-purple-500/15">
                <div className="p-3 rounded-2xl bg-purple-950/20 border border-purple-500/20 flex flex-col items-center text-center">
                  <span className="text-xl mb-1">🎯</span>
                  <span className="text-xs font-semibold text-white">Responsável</span>
                  <span className="text-[10px] text-slate-400">Comprometido</span>
                </div>
                <div className="p-3 rounded-2xl bg-purple-950/20 border border-purple-500/20 flex flex-col items-center text-center">
                  <span className="text-xl mb-1">⚡</span>
                  <span className="text-xs font-semibold text-white">Dedicado</span>
                  <span className="text-[10px] text-slate-400">Foco contínuo</span>
                </div>
                <div className="p-3 rounded-2xl bg-purple-950/20 border border-purple-500/20 flex flex-col items-center text-center">
                  <span className="text-xl mb-1">📋</span>
                  <span className="text-xs font-semibold text-white">Organizado</span>
                  <span className="text-[10px] text-slate-400">Método e ordem</span>
                </div>
                <div className="p-3 rounded-2xl bg-purple-950/20 border border-purple-500/20 flex flex-col items-center text-center">
                  <span className="text-xl mb-1">🚀</span>
                  <span className="text-xs font-semibold text-white">Ágil</span>
                  <span className="text-[10px] text-slate-400">Fácil aprendizado</span>
                </div>
              </div>

            </div>

            {/* Professional Objective Card */}
            <div className="glass-panel p-7 rounded-3xl relative overflow-hidden border-l-4 border-l-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono-code uppercase tracking-wider text-purple-400 font-bold">
                  // Objetivo Profissional
                </span>
              </div>
              <blockquote className="text-lg text-slate-100 italic leading-snug">
                "{personal.objective}"
              </blockquote>
            </div>

          </div>

          {/* Right Column: Academic & Courses (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Academic Education Card */}
            <div className="glass-panel p-7 rounded-3xl relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl">
                  🎓
                </div>
                <div>
                  <h3 className="text-lg font-bold">Formação Acadêmica</h3>
                  <span className="text-xs font-mono-code text-purple-400">Ensino Médio Técnico</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-500/25">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-bold text-base text-white">{academic.institution}</h4>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono-code bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {academic.status}
                  </span>
                </div>
                <p className="text-purple-300 text-sm font-medium mb-3">
                  {academic.degree}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-mono-code text-slate-400 mb-3 bg-purple-950/40 px-3 py-1.5 rounded-lg border border-purple-500/20">
                  <span>📅</span>
                  <span>{academic.completionYear}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {academic.description}
                </p>
              </div>
            </div>

            {/* Courses & Qualifications Card */}
            <div className="glass-panel p-7 rounded-3xl relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl">
                  📜
                </div>
                <div>
                  <h3 className="text-lg font-bold">Cursos & Qualificações</h3>
                  <span className="text-xs font-mono-code text-purple-400">Certificações e Estudos</span>
                </div>
              </div>

              <div className="space-y-3.5">
                {courses.map((course, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl bg-purple-950/15 border border-purple-500/15 hover:border-purple-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                        {course.title}
                      </h4>
                      <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 whitespace-nowrap">
                        {course.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-4">
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
