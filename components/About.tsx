import React, { useEffect, useRef, useState } from 'react';
import { STATS } from '../constants';
import { User } from 'lucide-react';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (statsRef.current) observer.unobserve(statsRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <User className="w-4 h-4" />
              <span>About Me</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Designing with purpose, <br />
              <span className="text-slate-400">Engineering for impact.</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I am a passionate Full Stack Developer and AI enthusiast with a knack for building 
              intelligent applications. My journey involves bridging the gap between robust backend architectures 
              and intuitive frontend designs, all while integrating cutting-edge machine learning models.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              With a background in digital marketing and design, I don't just write code—I build products that 
              grow businesses and delight users. From optimizing conversion rates to fine-tuning Transformer models, 
              I bring a holistic approach to every project.
            </p>
          </div>
          
          {/* Visual/Image placeholder or abstract art */}
          <div className="flex-1 w-full max-w-md">
             <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-8 flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="text-center relative z-10">
                  <span className="text-8xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">JS</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 ml-16 mt-16">PY</span>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
             </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef}>
          <h3 className={`text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            Impact & Growth
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
              <div 
                key={index}
                className={`group p-6 rounded-2xl bg-dark/50 border border-white/5 hover:border-primary/30 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-white/5 rounded-xl text-slate-300 group-hover:text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <span className="text-4xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-slate-200 mb-2">{stat.label}</h4>
                <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                  {stat.description}
                </p>
                
                {/* Decorative Loading Bar */}
                <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}
                    style={{ transitionDelay: `${(index * 150) + 500}ms` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};