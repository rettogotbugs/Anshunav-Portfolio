import React, { useEffect, useRef, useState } from 'react';
import { SKILLS, DESIGN_SKILLS } from '../constants';
import { Cpu, Palette } from 'lucide-react';

export const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after triggering to play animation only once
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Technical Skills */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="p-3 bg-white/5 rounded-2xl mb-6 ring-1 ring-white/10">
            <Cpu className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Arsenal</h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg leading-relaxed">
            I specialize in the JavaScript ecosystem and Python for AI/ML. 
            Here are the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {SKILLS.map((skill, index) => (
            <div 
              key={index}
              className={`group relative bg-white/[0.03] backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-700 ease-out hover:-translate-y-1 hover:bg-white/[0.05]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-dark rounded-xl text-slate-300 group-hover:text-primary group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 group-hover:scale-110 origin-center">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-primary transition-colors">{skill.category}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">{skill.name}</h3>
                
                <div className="flex items-center gap-3">
                  <div className="flex-grow bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-slate-500">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Design & Marketing Skills */}
        <div className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="p-3 bg-white/5 rounded-2xl mb-6 ring-1 ring-white/10">
            <Palette className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Creative & Strategy</h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg leading-relaxed">
            Beyond code, I craft digital experiences and drive growth through data-driven marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESIGN_SKILLS.map((skill, index) => (
            <div 
              key={`design-${index}`}
              className={`group relative bg-white/[0.03] backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-secondary/30 transition-all duration-700 ease-out hover:-translate-y-1 hover:bg-white/[0.05]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${(index + SKILLS.length) * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-dark rounded-xl text-slate-300 group-hover:text-secondary group-hover:shadow-[0_0_15px_rgba(167,139,250,0.5)] transition-all duration-300 group-hover:scale-110 origin-center">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-secondary transition-colors capitalize">{skill.category}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">{skill.name}</h3>
                
                <div className="flex items-center gap-3">
                  <div className="flex-grow bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-secondary h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(167,139,250,0.8)]"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-slate-500">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};