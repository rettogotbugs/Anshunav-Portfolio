
import React from 'react';
import { HERO_DATA } from '../constants.tsx';
import { ArrowRight, Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';

export const Hero: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Enhanced Background with grain/texture overlay could be added here via CSS, keeping it clean for now */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -z-10 opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20 hover:bg-emerald-400/20 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Open to opportunities
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hello, I'm <br />
          <span className="relative inline-block mt-2 group">
            {/* Glow effect behind text */}
            <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            
            {/* Animated Gradient Text */}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary bg-[length:200%_auto] animate-text-shimmer">
              {HERO_DATA.name}
            </span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-6 font-light max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {HERO_DATA.role}
        </p>
        
        <p className="max-w-2xl text-base md:text-lg text-slate-500 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {HERO_DATA.tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button 
            onClick={() => onNavigate('projects')}
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-primary hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105"
          >
            Explore Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
             onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
          >
            Get in Touch
          </button>
        </div>

        <div className="mt-16 flex items-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href={HERO_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors hover:scale-110 duration-200">
            <Github className="h-6 w-6" />
          </a>
          <div className="w-px h-6 bg-white/10"></div>
          <a href={HERO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors hover:scale-110 duration-200">
            <Linkedin className="h-6 w-6" />
          </a>
          <div className="w-px h-6 bg-white/10"></div>
          <a href={HERO_DATA.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors hover:scale-110 duration-200">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 text-slate-500">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};
