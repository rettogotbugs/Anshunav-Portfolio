import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight, Github, Code } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-secondary/10 rounded-lg">
                 <Code className="w-6 h-6 text-secondary" />
               </div>
               <h2 className="text-3xl md:text-5xl font-bold text-white">Selected Works</h2>
            </div>
            <p className="text-slate-400 max-w-xl text-lg">
              A collection of projects where design meets robust engineering.
            </p>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors border-b border-transparent hover:border-white pb-1">
            View Github <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className="group relative rounded-3xl bg-card border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all duration-500 z-10 mix-blend-multiply" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-xl text-white rounded-full border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs font-medium text-slate-300 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-medium text-slate-300 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <button 
                    onClick={() => onSelectProject(project)}
                    className="text-sm font-semibold text-white flex items-center gap-2 group/btn"
                  >
                    <span className="border-b border-white/30 group-hover/btn:border-white transition-colors pb-0.5">Read Case Study</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                  {project.github && (
                    <a 
                      href={project.github}
                      className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                      target="_blank"
                      rel="noreferrer"
                      title="View Code"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};