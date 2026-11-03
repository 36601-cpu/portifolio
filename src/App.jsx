import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData.js';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import { ReferencesModal } from './components/ReferencesModal.jsx';
import { Footer } from './components/Footer.jsx';

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [isReferencesOpen, setIsReferencesOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-500 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenReferences={() => setIsReferencesOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero personal={portfolioData.personal} />
        <About
          personal={portfolioData.personal}
          academic={portfolioData.academic}
          courses={portfolioData.courses}
        />
        <Skills categories={portfolioData.skillCategories} />
        <Projects projects={portfolioData.projects} />
        <Contact personal={portfolioData.personal} />
      </main>

      {/* Footer */}
      <Footer
        personal={portfolioData.personal}
        onOpenReferences={() => setIsReferencesOpen(true)}
      />

      {/* Visual References Modal (Awwwards & SiteInspire) */}
      <ReferencesModal
        isOpen={isReferencesOpen}
        onClose={() => setIsReferencesOpen(false)}
        references={portfolioData.designReferences}
      />
    </div>
  );
}

export default App;
