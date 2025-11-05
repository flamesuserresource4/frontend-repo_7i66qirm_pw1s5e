import React, { useState } from 'react';
import { CheckCircle, Mail, Phone, Linkedin } from 'lucide-react';

const skills = [
  {
    title: 'Communication',
    items: [
      'Clear, friendly written tone',
      'Active listening and de-escalation',
      'Tailored responses by channel',
    ],
  },
  {
    title: 'Problem-Solving',
    items: [
      'Root-cause investigation',
      'Data-driven decision making',
      'Process documentation',
    ],
  },
  {
    title: 'Tools & Systems',
    items: ['CRM platforms', 'Excel/Sheets proficiency', 'Help desk workflows'],
  },
  {
    title: 'Multitasking',
    items: ['Handle concurrent chats', 'Prioritize SLAs', 'Context switching smoothly'],
  },
];

const SkillsContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio contact');
    const body = encodeURIComponent(`Hi, my name is ${name}.\n\n${message}\n\nReply to: ${email}`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="skills" className="mx-auto mt-16 max-w-6xl px-6">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 md:p-10">
          <h3 className="text-lg font-semibold text-slate-900">Skills</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {skills.map((group, i) => (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-slate-50 to-white p-5 shadow-inner">
                <p className="text-sm font-medium text-slate-700">{group.title}</p>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div id="contact" className="rounded-3xl bg-gradient-to-br from-sky-50 to-indigo-50 p-8 shadow-sm ring-1 ring-slate-900/5 md:p-10">
          <h3 className="text-lg font-semibold text-slate-900">Let’s connect</h3>
          <p className="mt-2 text-sm text-slate-600">
            Interested in working together or have a question? Send a quick note.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none ring-slate-900/5 transition placeholder:text-slate-400 focus:ring-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none ring-slate-900/5 transition placeholder:text-slate-400 focus:ring-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none ring-slate-900/5 transition placeholder:text-slate-400 focus:ring-2"
                placeholder="How can I help?"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Send Message
              </button>
              <div className="flex items-center gap-3 text-slate-600">
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-1.5 hover:text-slate-900">
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a href="tel:+10000000000" className="inline-flex items-center gap-1.5 hover:text-slate-900">
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-slate-900">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SkillsContact;
