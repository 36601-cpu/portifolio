import React from 'react';

export function Hero({ personal }) {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Decorative Light Blobs */}
      <div className="ambient-glow-1 top-10 -left-20"></div>
      <div className="ambient-glow-2 bottom-10 -right-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Call to Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-6 hover:border-purple-500/50 transition-all duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono-code text-purple-300 tracking-wide font-medium">
                {personal.statusBadge}
              </span>
            </div>

            {/* Main Headline & Full Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
              Olá, eu sou <br className="hidden sm:inline" />
              <span className="text-gradient-purple drop-shadow-sm">
                {personal.name}
              </span>
            </h1>

            {/* Short Presentation Tagline */}
            <div className="text-lg sm:text-xl font-medium text-purple-300/90 mb-4 font-mono-code flex items-center gap-2">
              <span className="text-purple-400">&gt;</span>
              <span>{personal.role}</span>
            </div>

            {/* Descriptive Intro Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-300/80 max-w-2xl leading-relaxed mb-8">
              Jovem de 17 anos apaixonado por tecnologia, desenvolvimento web, programação em Java e React, montagem de computadores, fotografia e pilotagem de drones. Focado em aprender continuamente e construir projetos modernos de alto nível.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              {/* Projects CTA */}
              <a
                href="#projetos"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Conhecer Projetos</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Contact CTA */}
              <a
                href="#contato"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm border border-purple-500/30 hover:border-purple-500/60 bg-purple-950/20 hover:bg-purple-900/30 text-purple-200 hover:text-white backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Entrar em Contato</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* Direct WhatsApp Link */}
              <a
                href={`https://wa.me/${personal.phoneRaw}?text=Ol%C3%A1%20Gustavo%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-sm border border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-all duration-200 flex items-center justify-center gap-2"
                title="Conversar diretamente pelo WhatsApp"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-purple-500/15 w-full">
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-mono-code text-purple-400">17 anos</span>
                <span className="text-xs text-slate-400">Idade</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-mono-code text-purple-400">Ensino Médio</span>
                <span className="text-xs text-slate-400">Ênfase em TI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-mono-code text-purple-400">2027</span>
                <span className="text-xs text-slate-400">Previsão Conclusão</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-mono-code text-purple-400">Campinas</span>
                <span className="text-xs text-slate-400">São Paulo</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photo in Highlight (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Glowing Backdrop behind photo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-indigo-600/20 rounded-full blur-3xl transform scale-95 pointer-events-none"></div>

            {/* Profile Photo Card */}
            <div className="relative group">
              
              {/* Outer Aurora Ring */}
              <div className="photo-glow-ring p-1.5 shadow-2xl shadow-purple-600/30">
                <div className="relative rounded-full overflow-hidden bg-slate-900 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border-4 border-slate-950">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Badge 1: Focus */}
              <div className="absolute -bottom-3 -right-2 sm:right-0 glass-panel px-4 py-2.5 rounded-2xl border border-purple-500/30 shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-mono-code text-sm font-bold">
                  &lt;/&gt;
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold leading-tight">Desenvolvedor</span>
                  <span className="text-[10px] text-slate-400 font-mono-code">React & Java</span>
                </div>
              </div>

              {/* Floating Badge 2: Location */}
              <div className="absolute -top-3 -left-2 sm:left-0 glass-panel px-3.5 py-2 rounded-2xl border border-purple-500/30 shadow-xl flex items-center gap-2">
                <span className="text-base">📍</span>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold leading-tight">Campinas, SP</span>
                  <span className="text-[10px] text-purple-400 font-mono-code">Brasil</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
