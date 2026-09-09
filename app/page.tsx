import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#edeeef] font-sans selection:bg-indigo-500/30">
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-neutral-800/60">
        <nav className="max-w-4xl mx-auto flex items-center justify-between p-5 px-6">
          <Link href="/" className="font-semibold text-lg tracking-tight hover:text-white transition">
            Affan<span className="text-indigo-500">.</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Stack</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </nav>
      </header>

      <main className="relative max-w-4xl mx-auto px-6 pt-20 pb-32 space-y-28">
        
        {/* Hero Section */}
        <section id="about" className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            AI Automation Engineer & Full‑Stack Developer
          </h1>
          
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
            I design end-to-end automation pipelines with n8n, integrate multi-LLM workflows (Gemini, Claude, OpenAI), and build modern, scalable web applications.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium text-sm hover:bg-neutral-800 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-white">Projects</h2>
            <p className="text-neutral-400 text-sm">Selected work and automation systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project Card 1 */}
            <div className="group relative rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-6 hover:border-neutral-700 hover:bg-neutral-900/80 transition duration-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg text-white group-hover:text-indigo-400 transition">
                  AI Lead Qualification Engine
                </h3>
                <span className="text-neutral-500 text-xs">2026</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Automated multi-stage lead scoring, web enrichment via Apify, and multi-channel notification routing built in n8n.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-neutral-300">
                <span className="bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-700/50">n8n</span>
                <span className="bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-700/50">Claude API</span>
                <span className="bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-700/50">Redis</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-6 hover:border-neutral-700 hover:bg-neutral-900/80 transition duration-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg text-white group-hover:text-indigo-400 transition">
                  Automated Customer Assistant
                </h3>
                <span className="text-neutral-500 text-xs">2026</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Conversational AI customer service bot leveraging dynamic system prompts and real-time product database queries.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-neutral-300">
                <span className="bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-700/50">Gemini API</span>
                <span className="bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-700/50">Next.js</span>
                <span className="bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-700/50">Tailwind</span>
              </div>
            </div>

          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="skills" className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-white">Tech Stack</h2>
            <p className="text-neutral-400 text-sm">Tools and platforms I work with regularly.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {[
              "n8n Automation", "Gemini / Claude API", "Next.js / React", "TypeScript",
              "Tailwind CSS", "Docker Containers", "Webhooks & OAuth", "Node.js"
            ].map((skill) => (
              <div 
                key={skill}
                className="p-3 rounded-lg border border-neutral-800/80 bg-neutral-900/30 text-neutral-300 text-center hover:border-neutral-700 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6 pt-6 border-t border-neutral-800/80">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-white">Get in Touch</h2>
            <p className="text-neutral-400 text-sm max-w-lg">
              Interested in building an AI workflow, integrating APIs, or setting up automated operations? Let's connect.
            </p>
          </div>
          <div>
            <a
              href="mailto:affanatiff@gmail.com"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition"
            >
              affanatiff@gmail.com &rarr;
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/60 py-8 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Affan. Built with Next.js & Tailwind CSS.
      </footer>

    </div>
  );
}