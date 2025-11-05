import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import SkillsContact from './components/SkillsContact';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500" />
          <span className="font-display text-lg font-semibold">Customer Support Portfolio</span>
        </div>
        <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#experience" className="hover:text-slate-900">Experience</a>
          <a href="#skills" className="hover:text-slate-900">Skills</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <SkillsContact />
      </main>

      <footer className="mx-auto mt-16 max-w-6xl px-6 pb-12 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Customer Support — Built with care and precision.
      </footer>
    </div>
  );
};

export default App;
