import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <nav className="max-w-5xl mx-auto flex items-center justify-between p-6">
          <span className="text-xl font-bold tracking-tight text-indigo-400">
            Affan
          </span>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24 flex flex-col gap-6">
        <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase">
          AI & Automation Specialist
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
          Building intelligent workflows & scalable web solutions.
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          I build custom automation pipelines with n8n, integrate LLM APIs (Gemini, Claude, OpenAI), and design high-performance web applications using modern tech stacks.
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-slate-700 hover:bg-slate-900 text-slate-300 font-medium px-6 py-3 rounded-lg transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <h2 className="text-3xl font-bold mb-10 text-white">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project Card 1 */}
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-indigo-500/50 transition group">
            <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition">
              AI Automated Lead Pipeline
            </h3>
            <p className="text-slate-400 mt-2 text-sm leading-relaxed">
              An automated lead qualification & messaging system built in n8n, integrating Apify, CRM tools, AI scoring, and multi-channel notification bots.
            </p>
            <div className="flex gap-2 mt-4 text-xs font-mono text-indigo-300">
              <span className="bg-indigo-950/80 px-2.5 py-1 rounded border border-indigo-800/40">n8n</span>
              <span className="bg-indigo-950/80 px-2.5 py-1 rounded border border-indigo-800/40">OpenAI / Claude</span>
              <span className="bg-indigo-950/80 px-2.5 py-1 rounded border border-indigo-800/40">Webhooks</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-indigo-500/50 transition group">
            <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition">
              E-Commerce Customer Assistant
            </h3>
            <p className="text-slate-400 mt-2 text-sm leading-relaxed">
              Automated chatbot service using Gemini API and dynamic system prompts for seamless real-time customer query handling and routing.
            </p>
            <div className="flex gap-2 mt-4 text-xs font-mono text-indigo-300">
              <span className="bg-indigo-950/80 px-2.5 py-1 rounded border border-indigo-800/40">Gemini API</span>
              <span className="bg-indigo-950/80 px-2.5 py-1 rounded border border-indigo-800/40">Next.js</span>
              <span className="bg-indigo-950/80 px-2.5 py-1 rounded border border-indigo-800/40">Tailwind CSS</span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="border-t border-slate-800 py-12 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Affan. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}