import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  const handleResume = () => {
    // Attempts to download a local resume file if provided at /resume.pdf
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-sky-50 to-indigo-50 shadow-sm">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-white/10" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Available for opportunities
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
          Helping customers with care and precision
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
          E-commerce customer support specialist focused on clear communication, empathy, and efficient problem-solving.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleResume}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Download className="h-4 w-4" />
            Download Résumé
          </button>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-slate-900 shadow-md backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-slate-900 shadow-md backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
