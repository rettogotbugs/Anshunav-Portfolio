import React from 'react';
import { Mail, MapPin, Github, Linkedin, ArrowRight, Copy, ExternalLink, Send } from 'lucide-react';
import { HERO_DATA } from '../constants.tsx';

export const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative pt-20 pb-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-black pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance work and full-time positions. 
            <br className="hidden md:block" />
            If you have a project that needs some creative touch, let's chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Email Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            
            {/* Animated Hover Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated Glow Effect */}
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 opacity-0 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-8">
                {/* Animated Icon Box */}
                <div className="relative p-3 bg-dark/50 rounded-2xl border border-white/5 text-primary overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
                   {/* Sliding Icons */}
                   <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-10 group-hover:scale-50 opacity-100 group-hover:opacity-0">
                     <Mail className="w-8 h-8" />
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                     <Send className="w-8 h-8" />
                   </div>
                   {/* Invisible placeholder for size */}
                   <Mail className="w-8 h-8 opacity-0" />
                </div>

                <button 
                  onClick={handleCopyEmail}
                  className="group/btn relative px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 flex items-center gap-2 transition-all border border-transparent hover:border-white/10 active:scale-95"
                >
                  <span className={`${copied ? 'text-green-400' : 'group-hover/btn:text-white'} transition-colors`}>
                    {copied ? 'Copied!' : 'Copy Email'}
                  </span>
                  {copied ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                      <div className="relative w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  ) : (
                    <Copy className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
                  )}
                </button>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-slate-400 mb-2 flex items-center gap-2">
                  Drop me a line
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                </h3>
                <a href={`mailto:${HERO_DATA.email}`} className="text-2xl md:text-3xl font-bold text-white hover:text-primary transition-colors block break-words">
                  {HERO_DATA.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social Cards */}
          <a 
            href={HERO_DATA.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#0077b5]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0077b5]/10"
          >
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-dark/50 rounded-2xl border border-white/5 text-[#0077b5] group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-8 h-8" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-400 mb-1">Professional</h3>
                <span className="text-xl font-bold text-white group-hover:text-[#0077b5] transition-colors flex items-center gap-2">
                  LinkedIn <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </span>
              </div>
            </div>
          </a>

          <a 
            href={HERO_DATA.socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5"
          >
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-dark/50 rounded-2xl border border-white/5 text-white group-hover:scale-110 transition-transform duration-300">
                  <Github className="w-8 h-8" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-400 mb-1">Code</h3>
                <span className="text-xl font-bold text-white group-hover:underline transition-all flex items-center gap-2">
                  GitHub <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2025 {HERO_DATA.name}. Building things for the web.</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Assam, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};