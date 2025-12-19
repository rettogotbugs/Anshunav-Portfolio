// --- Portfolio Data ---
const HERO = {
  name: "Anshunav Bora",
  role: "Full Stack Developer & AI Engineer",
  email: "itzanshu15@gmail.com",
  github: "https://github.com/rettogotbugs",
  linkedin: "https://www.linkedin.com/in/anshunavbora",
};

const PROJECTS = [
  {
    id: "p1",
    title: "NeuroFinance AI",
    category: "AI / Machine Learning",
    image: "https://images.unsplash.com/photo-1611974714851-48206138d731?auto=format&fit=crop&q=80&w=800",
    desc: "A real-time financial forecasting engine using LSTM neural networks to predict market volatility.",
    tech: ["Python", "TensorFlow", "FastAPI", "React"]
  },
  {
    id: "p2",
    title: "CloudScale E-Comm",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    desc: "Microservices-based e-commerce platform handling 10k+ requests per second with Kubernetes.",
    tech: ["Go", "Kubernetes", "Docker", "Redis"]
  },
  {
    id: "p3",
    title: "VisionMed Diagnostic",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    desc: "AI assistant for radiologists that detects early-stage anomalies in chest X-rays with 98% accuracy.",
    tech: ["PyTorch", "OpenCV", "Vue.js", "PostgreSQL"]
  }
];

// --- Helper: Render SVG Icons (Vanilla) ---
const getIcon = (name: string) => {
  const icons: Record<string, string> = {
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
    external: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    arrow: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`
  };
  return icons[name] || '';
};

// --- App Class ---
class PortfolioApp {
  root: HTMLElement;

  constructor() {
    this.root = document.getElementById('root')!;
    this.init();
  }

  init() {
    this.render();
    this.setupScrollAnimations();
    this.setupEventListeners();
  }

  render() {
    this.root.innerHTML = `
      <!-- Navbar -->
      <nav id="navbar" class="fixed top-0 w-full z-50 h-20 flex items-center transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <a href="#" class="text-xl font-bold tracking-tighter text-white">ANSHUNAV.</a>
          <div class="hidden md:flex gap-10 text-sm font-medium text-slate-400">
            <a href="#about" class="hover:text-white transition-colors">About</a>
            <a href="#projects" class="hover:text-white transition-colors">Projects</a>
            <a href="#contact" class="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="mailto:${HERO.email}" class="px-5 py-2 bg-white/10 hover:bg-white text-dark hover:text-dark transition-all rounded-full text-sm font-bold bg-white">
            Hire Me
          </a>
        </div>
      </nav>

      <!-- Hero -->
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[140px] -z-10 animate-pulse-slow"></div>
        <div class="max-w-5xl mx-auto px-6 text-center">
          <div class="inline-block px-4 py-1.5 mb-8 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400 tracking-widest uppercase animate-bounce">
            Available for new projects
          </div>
          <h1 class="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
            ENGINEERING <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">IMPACT.</span>
          </h1>
          <p class="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
            I build highly scalable web applications and intelligent systems powered by deep learning.
          </p>
          <div class="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#projects" class="px-10 py-5 bg-primary hover:bg-blue-600 text-white font-bold rounded-2xl shadow-2xl shadow-blue-500/20 transition-all hover:scale-105 flex items-center gap-2">
              View My Work ${getIcon('arrow')}
            </a>
            <a href="${HERO.github}" target="_blank" class="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl transition-all flex items-center gap-2">
              Github ${getIcon('github')}
            </a>
          </div>
        </div>
      </section>

      <!-- About / Stats -->
      <section id="about" class="py-32 bg-slate-900/30">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div class="reveal">
            <h2 class="text-4xl font-bold text-white mb-8">Bridging the gap between <br/> Data and Design.</h2>
            <p class="text-lg text-slate-400 leading-relaxed mb-6">
              With 5+ years of experience in full-stack development, I specialize in building robust distributed systems and intuitive user interfaces.
            </p>
            <p class="text-lg text-slate-400 leading-relaxed">
              My approach is data-driven, focusing on performance, accessibility, and clean architecture.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-6 reveal">
            <div class="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-blue-500/50 transition-colors">
              <div class="text-4xl font-black text-white mb-2">40+</div>
              <div class="text-sm text-slate-400 font-medium uppercase tracking-widest">Projects</div>
            </div>
            <div class="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-blue-500/50 transition-colors">
              <div class="text-4xl font-black text-white mb-2">99.9%</div>
              <div class="text-sm text-slate-400 font-medium uppercase tracking-widest">Uptime</div>
            </div>
            <div class="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-blue-500/50 transition-colors">
              <div class="text-4xl font-black text-white mb-2">250%</div>
              <div class="text-sm text-slate-400 font-medium uppercase tracking-widest">Growth</div>
            </div>
            <div class="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-blue-500/50 transition-colors">
              <div class="text-4xl font-black text-white mb-2">15+</div>
              <div class="text-sm text-slate-400 font-medium uppercase tracking-widest">Stack tools</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="py-32">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <h2 class="text-5xl font-black text-white reveal leading-none">SELECTED <br/>WORKS.</h2>
            <p class="text-slate-400 max-w-xs reveal">A showcase of engineering excellence and digital craftsmanship.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            ${PROJECTS.map(p => `
              <div class="project-card group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden cursor-pointer reveal shadow-2xl" onclick="window.openModal('${p.id}')">
                <div class="h-64 overflow-hidden">
                  <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                </div>
                <div class="p-8">
                  <div class="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">${p.category}</div>
                  <h3 class="text-2xl font-bold text-white mb-4">${p.title}</h3>
                  <p class="text-slate-400 text-sm line-clamp-2">${p.desc}</p>
                </div>
                <div class="absolute inset-0 bg-blue-500/90 backdrop-blur-sm p-8 flex flex-col justify-between opacity-0 translate-y-full transition-all duration-500 project-overlay">
                  <div class="text-white">
                    <h4 class="text-2xl font-bold mb-4">${p.title}</h4>
                    <div class="flex flex-wrap gap-2">
                      ${p.tech.map(t => `<span class="px-3 py-1 bg-white/20 rounded-full text-xs font-bold">${t}</span>`).join('')}
                    </div>
                  </div>
                  <div class="flex items-center gap-2 text-white font-bold">
                    View Project ${getIcon('external')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="py-40 bg-black relative">
        <div class="absolute inset-0 bg-blue-500/5 -z-10"></div>
        <div class="max-w-4xl mx-auto px-6 text-center">
          <h2 class="text-5xl md:text-7xl font-black text-white mb-12 tracking-tight">LET'S START A <br/> PROJECT.</h2>
          <a href="mailto:${HERO.email}" class="text-3xl md:text-5xl font-light text-slate-500 hover:text-blue-400 transition-colors break-words">
            ${HERO.email}
          </a>
          <div class="mt-24 flex justify-center gap-12 text-slate-500">
            <a href="${HERO.github}" target="_blank" class="hover:text-white transition-colors">GitHub</a>
            <a href="${HERO.linkedin}" target="_blank" class="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer class="py-12 border-t border-white/5 text-center text-slate-600 text-sm">
        &copy; 2025 Anshunav Bora. All rights reserved. Built with Pure TS.
      </footer>

      <!-- Modal Container (Hidden) -->
      <div id="project-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4">
        <div class="absolute inset-0 modal-backdrop" onclick="window.closeModal()"></div>
        <div class="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl h-[85vh] flex flex-col">
          <div id="modal-content" class="overflow-y-auto flex-grow p-8 md:p-12">
            <!-- Dynamic Content -->
          </div>
          <button onclick="window.closeModal()" class="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    `;
  }

  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('navbar');
      if (window.scrollY > 50) {
        nav?.classList.add('glass-nav', 'h-16');
        nav?.classList.remove('h-20');
      } else {
        nav?.classList.remove('glass-nav', 'h-16');
        nav?.classList.add('h-20');
      }
    });
  }

  setupEventListeners() {
    // Expose modal functions to window for onclick handlers
    (window as any).openModal = (id: string) => {
      const project = PROJECTS.find(p => p.id === id);
      if (!project) return;
      
      const modal = document.getElementById('project-modal');
      const content = document.getElementById('modal-content');
      
      if (modal && content) {
        content.innerHTML = `
          <div class="mb-10">
            <span class="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4 inline-block">${project.category}</span>
            <h2 class="text-4xl font-black text-white mb-8">${project.title}</h2>
            <img src="${project.image}" class="w-full h-80 object-cover rounded-2xl mb-10 shadow-2xl" />
            <div class="prose prose-invert max-w-none text-slate-300">
              <p class="text-xl leading-relaxed mb-10">${project.desc}</p>
              <h3 class="text-xl font-bold text-white mb-6">Technologies Used</h3>
              <div class="flex flex-wrap gap-3 mb-12">
                ${project.tech.map(t => `<span class="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-blue-400 font-mono text-sm">${t}</span>`).join('')}
              </div>
              <p class="text-slate-400">
                This project represents a significant engineering challenge involving complex system integration and performance optimization. 
                Focusing on user-centric design while maintaining high backend efficiency.
              </p>
            </div>
          </div>
        `;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    };

    (window as any).closeModal = () => {
      const modal = document.getElementById('project-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'unset';
      }
    };
  }
}

// Start the app
new PortfolioApp();
