import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="mx-auto mt-16 max-w-6xl px-6">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 md:p-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sky-700">
          <User className="h-4 w-4" />
          About Me
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-slate-900 md:text-3xl">
              Customer Support for Online Retail & Accessories
            </h2>
            <p className="mt-4 text-slate-600">
              I’m an e-commerce customer support professional with hands-on experience helping
              customers across online retail and phone accessories. I care deeply about creating
              smooth, stress-free experiences — whether that’s clarifying orders, resolving
              delivery issues, or guiding people to the right products.
            </p>
            <p className="mt-4 text-slate-600">
              My approach blends empathy with systems thinking: listen carefully, analyze the
              details, and respond with clear, timely solutions. I’m comfortable working across
              email, chat, and phone, using CRMs and analytics to keep service precise and
              consistent.
            </p>
          </div>
          <div>
            <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 p-6 shadow-inner">
              <h3 className="text-sm font-medium text-slate-700">Quick Facts</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• E-commerce support (orders, returns, warranties)</li>
                <li>• Channels: email, chat, phone</li>
                <li>• Tools: CRM, Excel/Sheets, help desk systems</li>
                <li>• Focus: clarity, empathy, follow-through</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
