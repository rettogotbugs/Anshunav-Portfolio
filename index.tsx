import { createApp, ref, onMounted, onUnmounted, defineComponent, h } from 'vue';
import * as Lucide from 'lucide-vue-next';

// --- Constants & Data ---
const HERO_DATA = {
  name: "Anshunav Bora",
  role: "Full Stack Developer & AI/ML Enthusiast",
  tagline: "Building intelligent web solutions that bridge the gap between complex algorithms and seamless user experiences.",
  socials: {
    github: "https://github.com/rettogotbugs",
    linkedin: "https://www.linkedin.com/in/anshunavbora",
    twitter: "https://x.com/AnshunavBora"
  }
};

const STATS = [
  { label: "Revenue Growth", value: "250%", icon: 'TrendingUp' },
  { label: "Projects Delivered", value: "40+", icon: 'Rocket' },
  { label: "User Retention", value: "85%", icon: 'Users' },
  { label: "Efficiency", value: "99.9%", icon: 'Zap' }
];

const SKILLS = [
  { name: "Vue / Next.js", level: 95, icon: 'Layout' },
  { name: "TypeScript", level: 90, icon: 'Code2' },
  { name: "Python / AI", level: 90, icon: 'Terminal' },
  { name: "Tailwind CSS", level: 95, icon: 'Palette' },
];

const PROJECTS = [
  {
    id: "1",
    title: "NeuroFinance Dashboard",
    category: "AI + Web",
    shortDescription: "Real-time stock prediction dashboard using LSTM networks.",
    imageUrl: "https://picsum.photos/800/600?random=1",
    technologies: ["Vue.js", "Python", "FastAPI", "TensorFlow"],
    fullDescription: "NeuroFinance is a comprehensive dashboard that visualizes real-time stock market data and predicts future trends using advanced machine learning models."
  },
  {
    id: "2",
    title: "E-Commerce Microservices",
    category: "Full Stack",
    shortDescription: "Scalable e-commerce backend with Kubernetes orchestration.",
    imageUrl: "https://picsum.photos/800/600?random=2",
    technologies: ["Node.js", "Kubernetes", "Docker", "RabbitMQ"],
    fullDescription: "A fully scalable e-commerce platform designed with a microservices architecture. It handles user authentication, product catalog, and more."
  }
];

const BLOGS = [
  {
    id: "b1",
    title: "Coding Is Creative, Not Mechanical",
    excerpt: "Why development feels closer to art than assembly lines.",
    date: "Jan 18, 2025",
    imageUrl: "https://picsum.photos/800/400?random=21",
  }
];

// --- Main App Component ---
const App = defineComponent({
  setup() {
    const isScrolled = ref(false);
    const isMobileMenuOpen = ref(false);
    const selectedItem = ref<any>(null);
    const viewType = ref<'project' | 'blog' | null>(null);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    const scrollTo = (id: string) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      isMobileMenuOpen.value = false;
    };

    const openProject = (p: any) => {
      selectedItem.value = p;
      viewType.value = 'project';
    };

    const closeArticle = () => {
      selectedItem.value = null;
      viewType.value = null;
    };

    return {
      isScrolled,
      isMobileMenuOpen,
      selectedItem,
      viewType,
      HERO_DATA,
      STATS,
      SKILLS,
      PROJECTS,
      BLOGS,
      scrollTo,
      openProject,
      closeArticle
    };
  },
  template: `
    <div class="min-h-screen bg-dark text-slate-200">
      <!-- Navbar -->
      <nav :class="['fixed w-full z-50 transition-all duration-300', isScrolled ? 'glass-nav shadow-lg border-b border-white/5 h-16' : 'bg-transparent h-20']">
        <div class="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div class="flex items-center gap-2 cursor-pointer" @click="scrollTo('hero')">
            <component :is="'Code2'" class="h-8 w-8 text-primary" />
            <span class="text-xl font-bold text-white tracking-tighter">ANSHUNAV</span>
          </div>
          
          <div class="hidden md:flex items-center gap-8">
            <button v-for="link in ['About', 'Skills', 'Projects', 'Blog', 'Contact']" 
                    @click="scrollTo(link.toLowerCase())"
                    class="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              {{ link }}
            </button>
          </div>

          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2 text-slate-400">
            <component :is="isMobileMenuOpen ? 'X' : 'Menu'" class="h-6 w-6" />
          </button>
        </div>
      </nav>

      <!-- Hero -->
      <section id="hero" class="relative min-h-screen flex items-center justify-center pt-20">
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob"></div>
        <div class="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for hire
          </div>
          <h1 class="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            Design <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-text-shimmer bg-[length:200%_auto]">
              Impact.
            </span>
          </h1>
          <p class="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {{ HERO_DATA.tagline }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="scrollTo('projects')" class="px-8 py-4 bg-primary text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/25">
              View My Work
            </button>
            <button @click="scrollTo('contact')" class="px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-full hover:bg-white/10 transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section id="about" class="py-24 bg-card">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div v-for="stat in STATS" class="p-8 rounded-3xl bg-dark/50 border border-white/5 hover:border-primary/20 transition-all group">
              <div class="flex items-center justify-between mb-4">
                <component :is="stat.icon" class="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span class="text-3xl font-bold text-white">{{ stat.value }}</span>
              </div>
              <p class="text-slate-400 font-medium">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="py-32">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-end justify-between mb-16">
            <div>
              <h2 class="text-4xl font-bold text-white mb-4">Selected Work</h2>
              <p class="text-slate-400">Case studies of engineering excellence.</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="project in PROJECTS" 
                 class="group relative aspect-[16/10] rounded-3xl overflow-hidden cursor-pointer border border-white/5"
                 @click="openProject(project)">
              <img :src="project.imageUrl" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-8 w-full">
                <span class="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-white mb-4">
                  {{ project.category }}
                </span>
                <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
                <p class="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  {{ project.shortDescription }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <footer id="contact" class="py-32 border-t border-white/5">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-5xl font-bold text-white mb-8">Let's build something <span class="text-primary">great</span>.</h2>
          <a :href="'mailto:' + HERO_DATA.email" class="text-3xl md:text-5xl font-light text-slate-400 hover:text-white transition-colors break-words">
            {{ HERO_DATA.email }}
          </a>
          <div class="mt-16 flex justify-center gap-8">
            <a v-for="(url, key) in HERO_DATA.socials" :href="url" class="text-slate-500 hover:text-white capitalize transition-colors">{{ key }}</a>
          </div>
        </div>
      </footer>

      <!-- Modal -->
      <div v-if="selectedItem" class="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-12 animate-fade-in">
        <div class="absolute inset-0 bg-black/90 backdrop-blur-md" @click="closeArticle"></div>
        <div class="relative w-full max-w-5xl bg-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col animate-fade-in-up">
          <div class="flex items-center justify-between p-6 border-b border-white/5">
             <h3 class="text-xl font-bold text-white">{{ selectedItem.title }}</h3>
             <button @click="closeArticle" class="p-2 hover:bg-white/5 rounded-full"><component :is="'X'" /></button>
          </div>
          <div class="overflow-y-auto p-8 md:p-12 flex-grow">
            <img :src="selectedItem.imageUrl" class="w-full h-64 md:h-96 object-cover rounded-2xl mb-12" />
            <div class="prose prose-invert max-w-none">
              <p class="text-xl text-slate-300 mb-8">{{ selectedItem.fullDescription }}</p>
              <h2 class="text-2xl font-bold text-white mb-4">Key Technologies</h2>
              <div class="flex flex-wrap gap-2 mb-12">
                <span v-for="tech in selectedItem.technologies" class="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-primary font-mono text-sm">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
});

const app = createApp(App);
// Register Lucide icons globally
Object.entries(Lucide).forEach(([name, component]) => {
  if (typeof component === 'object') {
    app.component(name, component);
  }
});
app.mount('#root');
