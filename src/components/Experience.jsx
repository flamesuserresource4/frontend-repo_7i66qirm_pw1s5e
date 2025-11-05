import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

const experiences = [
  {
    role: 'Customer Support Specialist',
    company: 'E-commerce Retailer',
    period: '2021 — Present',
    highlights: [
      'Resolved 1000+ customer tickets with 95% satisfaction',
      'Streamlined return workflow, reducing handling time by 20%',
      'Built macros and templates for consistent, friendly messaging',
    ],
  },
  {
    role: 'Support Associate',
    company: 'Phone Accessories Store',
    period: '2019 — 2021',
    highlights: [
      'Managed pre/after-sales inquiries across chat and phone',
      'Collaborated with logistics to prevent repeat delivery issues',
      'Maintained product FAQ and troubleshooting guides',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mx-auto mt-16 max-w-6xl px-6">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-indigo-700">
        <Briefcase className="h-4 w-4" />
        Work Experience
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, idx) => (
          <article
            key={idx}
            className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-md md:p-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-slate-900">
                {exp.role}
              </h3>
              <span className="text-sm text-slate-500">{exp.period}</span>
            </div>
            <p className="mt-1 text-slate-600">{exp.company}</p>
            <ul className="mt-4 space-y-2">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
