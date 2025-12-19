import React from 'react';
import { Project, BlogPost, Skill, Stat } from './types';
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Cpu, 
  Terminal,
  PenTool,
  Palette,
  TrendingUp,
  BarChart3,
  Megaphone,
  Target,
  Zap,
  Users,
  Rocket,
  Github
} from 'lucide-react';

export const HERO_DATA = {
  name: "Anshunav Bora",
  role: "Full Stack Developer & AI/ML Enthusiast",
  tagline: "Building intelligent web solutions that bridge the gap between complex algorithms and seamless user experiences.",
  location: "India",
  email: "itzanshu15@gmail.com",
  socials: {
    github: "https://github.com/rettogotbugs",
    linkedin: "https://www.linkedin.com/in/anshunavbora",
    twitter: "https://x.com/AnshunavBora"
  }
};

export const STATS: Stat[] = [
  { 
    label: "Revenue Growth", 
    value: "250%", 
    description: "Average client revenue increase through SEO & UX optimization.", 
    icon: <TrendingUp /> 
  },
  { 
    label: "Projects Delivered", 
    value: "40+", 
    description: "Successful launches across web, mobile, and AI sectors.", 
    icon: <Rocket /> 
  },
  { 
    label: "User Retention", 
    value: "85%", 
    description: "Improved retention rates via data-driven design strategies.", 
    icon: <Users /> 
  },
  { 
    label: "System Efficiency", 
    value: "99.9%", 
    description: "Uptime and performance optimization for backend services.", 
    icon: <Zap /> 
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: 'frontend', icon: <Layout /> },
  { name: "TypeScript", level: 90, category: 'frontend', icon: <Code2 /> },
  { name: "Tailwind CSS", level: 95, category: 'frontend', icon: <Layout /> },
  { name: "Node.js / Express", level: 85, category: 'backend', icon: <Server /> },
  { name: "Python", level: 90, category: 'tools', icon: <Terminal /> },
  { name: "PostgreSQL", level: 85, category: 'backend', icon: <Database /> },
  { name: "Git & GitHub", level: 90, category: 'tools', icon: <Github /> },
  { name: "Docker / AWS (Basics)", level: 70, category: 'tools', icon: <Cpu /> },
];

export const DESIGN_SKILLS: Skill[] = [
  { name: "UI/UX Design (Figma)", level: 90, category: 'design', icon: <PenTool /> },
  { name: "Brand Identity", level: 85, category: 'design', icon: <Palette /> },
  { name: "SEO & SEM", level: 88, category: 'marketing', icon: <TrendingUp /> },
  { name: "Google Analytics 4", level: 92, category: 'marketing', icon: <BarChart3 /> },
  { name: "Content Strategy", level: 85, category: 'marketing', icon: <Target /> },
  { name: "Social Media Marketing", level: 90, category: 'marketing', icon: <Megaphone /> },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "NeuroFinance Dashboard",
    category: "AI + Web",
    shortDescription: "Real-time stock prediction dashboard using LSTM networks.",
    imageUrl: "https://picsum.photos/800/600?random=1",
    fullDescription: `
      NeuroFinance is a comprehensive dashboard that visualizes real-time stock market data and predicts future trends using advanced machine learning models. 
      
      The core of the application utilizes Long Short-Term Memory (LSTM) recurrent neural networks to analyze historical price data and identify patterns. The frontend is built with Next.js for server-side rendering and rapid performance, while the backend is a Python FastAPI service serving the model predictions.
    `,
    technologies: ["Next.js", "Python", "FastAPI", "TensorFlow", "Redis"],
    challenges: [
      "Handling high-frequency data streams efficiently.",
      "Reducing model inference latency for real-time user feel.",
      "Visualizing complex time-series data intuitively."
    ],
    solutions: [
      "Implemented WebSockets for bi-directional real-time communication.",
      "Quantized the LSTM model to reduce size and improve inference speed by 40%.",
      "Used D3.js for highly custom interactive charts."
    ],
    github: "#",
    link: "#"
  },
  {
    id: "2",
    title: "E-Commerce Microservices",
    category: "Full Stack",
    shortDescription: "Scalable e-commerce backend with Kubernetes orchestration.",
    imageUrl: "https://picsum.photos/800/600?random=2",
    fullDescription: `
      A fully scalable e-commerce platform designed with a microservices architecture. It handles user authentication, product catalog, inventory management, and payment processing as separate, loosely coupled services.
      
      The system is containerized using Docker and orchestrated via Kubernetes, ensuring high availability and fault tolerance.
    `,
    technologies: ["Node.js", "Express", "Kubernetes", "Docker", "MongoDB", "RabbitMQ"],
    challenges: [
      "Ensuring data consistency across distributed services.",
      "Managing complex deployments and service discovery.",
    ],
    solutions: [
      "Implemented the Saga pattern for distributed transactions.",
      "Utilized Helm charts for streamlined Kubernetes deployments.",
    ],
    github: "#",
    link: "#"
  },
  {
    id: "3",
    title: "VisionMedical AI",
    category: "AI/ML",
    shortDescription: "Automated diagnosis assistance using Computer Vision.",
    imageUrl: "https://picsum.photos/800/600?random=3",
    fullDescription: `
      VisionMedical AI assists radiologists by detecting anomalies in X-ray images with high accuracy. 
      
      Using a custom Convolutional Neural Network (CNN) trained on the ChestX-ray14 dataset, the application provides a heatmap of potential problem areas, helping doctors focus their attention where it's needed most.
    `,
    technologies: ["PyTorch", "OpenCV", "React", "Flask"],
    challenges: [
      "Training on a highly imbalanced dataset.",
      "Providing interpretability for AI decisions (Explainable AI)."
    ],
    solutions: [
      "Applied data augmentation and weighted loss functions.",
      "Implemented Grad-CAM to visualize class activation maps on the X-rays."
    ],
    github: "#",
    link: "#"
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "b1",
    title: "The Future of Web Development with AI",
    excerpt: "How LLMs and generative AI are reshaping the developer workflow.",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    tags: ["AI", "Web Dev", "Productivity"],
    imageUrl: "https://picsum.photos/800/400?random=10",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-white">Introduction</h2>
      <p class="mb-6 text-slate-300">The landscape of web development is undergoing a seismic shift. With the advent of powerful Large Language Models (LLMs) like GPT-4 and Gemini, the role of a developer is evolving from purely writing code to architecting intelligent systems.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-white">Code Generation vs. Code Understanding</h2>
      <p class="mb-6 text-slate-300">While tools like GitHub Copilot aid in writing boilerplate, the real value lies in AI's ability to help us understand legacy codebases and refactor complex logic. It's not just about typing faster; it's about thinking deeper.</p>

      <h2 class="text-2xl font-bold mb-4 text-white">The Rise of AI-First UI</h2>
      <p class="mb-6 text-slate-300">We are moving towards interfaces that adapt to the user. Instead of static forms, imagine UIs that generate themselves based on user intent. This is the promise of Generative UI.</p>
      
      <h3 class="text-xl font-semibold mb-2 text-white">Conclusion</h3>
      <p class="text-slate-300">Embracing AI doesn't mean replacing developers. It means supercharging them. The future belongs to those who can effectively collaborate with these silicon colleagues.</p>
    `
  },
  {
    id: "b2",
    title: "Understanding Transformers for Devs",
    excerpt: "A deep dive into the architecture powering ChatGPT and Gemini.",
    date: "Nov 05, 2023",
    readTime: "8 min read",
    tags: ["Deep Learning", "NLP", "Theory"],
    imageUrl: "https://picsum.photos/800/400?random=11",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-white">Attention is All You Need</h2>
      <p class="mb-6 text-slate-300">The Transformer architecture, introduced by Google in 2017, revolutionized Natural Language Processing. Unlike RNNs that process data sequentially, Transformers process entire sequences in parallel using a mechanism called 'Self-Attention'.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-white">Key Components</h2>
      <ul class="list-disc list-inside mb-6 text-slate-300 space-y-2">
        <li><strong>Encoder:</strong> Processes the input text.</li>
        <li><strong>Decoder:</strong> Generates the output text.</li>
        <li><strong>Multi-Head Attention:</strong> Allows the model to focus on different parts of the sentence simultaneously.</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 text-white">Why it Matters for Web Devs</h2>
      <p class="mb-6 text-slate-300">Understanding the limitations (like context window and hallucination) helps us build better wrappers and applications around these APIs. We aren't just consumers; we are the orchestrators.</p>
    `
  },
  {
    id: "b3",
    title: "Optimizing React Performance",
    excerpt: "Techniques to make your React applications fly.",
    date: "Dec 20, 2023",
    readTime: "6 min read",
    tags: ["React", "Performance", "Optimization"],
    imageUrl: "https://picsum.photos/800/400?random=12",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-white">Memoization Mysteries</h2>
      <p class="mb-6 text-slate-300">React.memo, useMemo, and useCallback are powerful tools, but they can be traps. Over-optimizing can actually hurt performance due to the overhead of comparison checks. Use them wisely only when profiling shows a bottleneck.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-white">Virtualization</h2>
      <p class="mb-6 text-slate-300">Rendering long lists? Libraries like react-window or react-virtuoso are essential. They only render the DOM nodes currently in the viewport, saving massive amounts of memory.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-white">Code Splitting</h2>
      <p class="text-slate-300">Don't ship your admin dashboard code to your landing page users. Use React.lazy and Suspense to break your bundle into manageable chunks.</p>
    `
  }
];