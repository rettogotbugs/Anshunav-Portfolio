import React from 'react';
import { Project, BlogPost, Skill, Stat } from './types.ts';
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
    title: "Coding Is Creative, Not Mechanical",
    excerpt: "Why development feels closer to art than assembly lines.",
    date: "Jan 18, 2025",
    readTime: "6 min read",
    tags: ["Creativity", "Development", "Mindset"],
    imageUrl: "https://picsum.photos/800/400?random=21",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-white">Introduction</h2>
      <p class="mb-6 text-slate-300">
        When people imagine coding, they often picture strict rules, complex syntax, and endless lines of logic. From the outside, it can look rigid and mechanical. But once you actually start building things, a different picture emerges. Coding is not just about following instructions — it’s about <strong>creating</strong>, <strong>experimenting</strong>, and <strong>expressing ideas through logic</strong>.
      </p>
      <p class="mb-6 text-slate-300">
        Just like music, art, or writing, development is a creative process at its core.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-white">Problem Solving Is Creative Thinking</h2>
      <p class="mb-6 text-slate-300">
        Two developers can be given the same problem and still arrive at completely different solutions — and both can be correct. That alone proves that coding isn’t mechanical.
      </p>
      <p class="mb-4 text-slate-300">Creative decisions in coding include:</p>
      <ul class="list-disc list-inside mb-6 text-slate-300 space-y-2">
        <li>How you break a problem into smaller parts</li>
        <li>How you structure components or functions</li>
        <li>How you name variables to make logic readable</li>
        <li>How you balance simplicity vs flexibility</li>
      </ul>
      <p class="mb-6 text-slate-300">
        There’s no single “right” way — only trade-offs. Choosing between those trade-offs is a creative act.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-white">Design and Code Are Closely Connected</h2>
      <p class="mb-6 text-slate-300">
        Especially in frontend development, design and code are inseparable. Things like spacing, animations, transitions, and micro-interactions are not just visual choices. They directly affect how users feel while using a product.
      </p>
      <p class="mb-6 text-slate-300">
        Writing UI code is about <strong>craft</strong> — making something not only work, but feel right. Clean layouts, smooth interactions, and intentional details all come from a creative mindset.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-white">Why Creative People Thrive in Tech</h2>
      <p class="mb-6 text-slate-300">
        People from creative backgrounds often adapt quickly to development because they already understand iteration, flow, and refinement. That’s why musicians, artists, writers, and gamers often make great developers. They don’t just think in code — they think in systems.
      </p>

      <h3 class="text-xl font-semibold mb-2 text-white">Conclusion</h3>
      <p class="text-slate-300">
        Coding isn’t about memorizing syntax or typing fast. It’s about turning ideas into reality. Once you stop seeing code as mechanical and start seeing it as creative expression, learning becomes less intimidating — and much more enjoyable.
      </p>
    `
  },
  {
    id: "b2",
    title: "What Game Development Taught Me About Writing Better Code",
    excerpt: "Lessons from Unity and game logic that improved my web development.",
    date: "Feb 02, 2025",
    readTime: "7 min read",
    tags: ["Game Dev", "Unity", "Web Dev"],
    imageUrl: "https://picsum.photos/800/400?random=22",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-white">Introduction</h2>
      <p class="mb-6 text-slate-300">
        Game development forces you to think differently. In games, performance issues are immediately visible. Bad design feels frustrating. Poor logic breaks immersion. Working with game engines like Unity taught me lessons that no tutorial ever could — and those lessons translated directly into better web development.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-white">Thinking in States and Systems</h2>
      <p class="mb-6 text-slate-300">
        Games are built around states: menu, gameplay, paused, game over. Each state behaves differently, but all are connected. This mindset translates perfectly to modern frontend frameworks. In React, the UI is just a reflection of state. Once you understand this from game logic, managing UI becomes far more intuitive.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-white">Performance Awareness Comes Naturally</h2>
      <p class="mb-6 text-slate-300">
        In game development, inefficient logic causes lag, unnecessary updates kill frame rate, and poor optimization is instantly noticeable. That awareness carries over to the web. You start noticing unnecessary re-renders, overly complex components, and bloated logic. Instead of optimizing blindly, you learn to optimize where it actually matters.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-white">User Experience Is Non-Negotiable</h2>
      <p class="mb-6 text-slate-300">
        Games teach you one harsh truth: users leave if the experience feels bad. This applies equally to websites and apps. Users care about responsiveness, smooth interactions, clear feedback, and fast load times. A technically impressive feature means nothing if it feels frustrating to use.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-white">Iteration Is Part of the Process</h2>
      <p class="mb-6 text-slate-300">
        Games are never built perfectly on the first attempt. Features evolve. Mechanics get refined. Bugs appear and get fixed. That mindset helps in web development too. You stop chasing perfection and focus on <strong>progress</strong>, improving the product with each iteration.
      </p>

      <h3 class="text-xl font-semibold mb-2 text-white">Conclusion</h3>
      <p class="text-slate-300">
        Game development trained me to think in systems, care about performance naturally, and prioritize experience above all else. Those lessons extend far beyond games — they shape how I write code everywhere.
      </p>
    `
  },
  {
    id: "b3",
    title: "Git & GitHub: What I Wish I Knew Earlier",
    excerpt: "Practical lessons that made version control finally click.",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    tags: ["Git", "GitHub", "Productivity"],
    imageUrl: "https://picsum.photos/800/400?random=23",
    content: `
      <h2 class="text-2xl font-bold mb-4 text-white">Introduction</h2>
      <p class="mb-6 text-slate-300">
        When I first encountered Git, it felt overwhelming. Commands felt random, errors were confusing, and it was hard to understand what was actually happening. Eventually, I realized the problem wasn’t Git — it was my understanding. Git isn’t about commands. It’s about <strong>history, safety, and clarity</strong>.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-white">Commits Are a Story, Not Just Saves</h2>
      <p class="mb-6 text-slate-300">
        A commit is not just a snapshot — it’s a message to your future self. Good commits focus on one clear change, have meaningful messages, and explain <em>why</em> something changed. For example, “Fix navbar alignment on mobile screens” is infinitely better than “fix stuff”. Clear commits make debugging and collaboration easier later.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-white">Branches Are Safety Nets</h2>
      <p class="mb-6 text-slate-300">
        Branches are often misunderstood, but they are one of Git’s best features. Branches allow you to experiment without fear, try risky ideas safely, and keep the main codebase stable. Once this clicks, development feels less stressful and more flexible.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-white">GitHub Is Your Public Work History</h2>
      <p class="mb-6 text-slate-300">
        GitHub isn’t just storage — it’s a professional profile. Things people notice include clean repository structure, readable README files, and consistent commit history. Even before running your code, GitHub tells a story about how you work.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-white">Version Control Builds Confidence</h2>
      <p class="mb-6 text-slate-300">
        Knowing you can revert mistakes, recover old versions, and track changes safely gives you confidence to experiment. Git doesn’t slow you down — it frees you.
      </p>

      <h3 class="text-xl font-semibold mb-2 text-white">Conclusion</h3>
      <p class="text-slate-300">
        Git becomes simple once you understand its purpose. It’s not just a tool — it’s a mindset that helps you build with clarity, safety, and confidence.
      </p>
    `
  }
];