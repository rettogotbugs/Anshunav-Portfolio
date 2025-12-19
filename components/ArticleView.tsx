import React, { useEffect } from 'react';
import { X, ArrowLeft, Calendar, Tag, Layers, CheckCircle } from 'lucide-react';
import { Project, BlogPost } from '../types.ts';

interface ArticleViewProps {
  data: Project | BlogPost | null;
  type: 'project' | 'blog' | null;
  onClose: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ data, type, onClose }) => {
  useEffect(() => {
    // Lock scroll when open
    if (data) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [data]);

  if (!data || !type) return null;

  const isProject = type === 'project';
  const project = data as Project;
  const blog = data as BlogPost;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-4">
      <div className="bg-dark w-full h-full md:h-[90vh] md:max-w-4xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/10 animate-fade-in">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-dark/50 backdrop-blur-md z-10 sticky top-0">
          <button 
            onClick={onClose}
            className="flex items-center text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
          <div className="flex gap-2">
            {isProject && project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-sm px-3 py-1.5 border border-white/10 rounded-full text-slate-300 hover:bg-white/5">
                GitHub
              </a>
            )}
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content Scroll Area */}
        <div className="overflow-y-auto flex-grow scroll-smooth">
          {/* Hero Image */}
          <div className="w-full h-64 md:h-80 relative">
            <img 
              src={isProject ? project.imageUrl : blog.imageUrl} 
              alt={isProject ? project.title : blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
            <div className="absolute bottom-6 left-6 md:left-10 right-6">
               <div className="flex gap-2 mb-3">
                 {isProject ? (
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wide">
                      {project.category}
                    </span>
                 ) : (
                    blog.tags.map(t => (
                      <span key={t} className="px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full uppercase tracking-wide">
                        {t}
                      </span>
                    ))
                 )}
               </div>
               <h1 className="text-3xl md:text-5xl font-bold text-white shadow-black drop-shadow-lg">
                 {isProject ? project.title : blog.title}
               </h1>
            </div>
          </div>

          <div className="p-6 md:p-10 max-w-3xl mx-auto">
            {isProject ? (
              // Project Content Layout
              <div className="space-y-10">
                <div className="prose prose-invert max-w-none">
                   <p className="text-lg text-slate-300 leading-relaxed whitespace-pre-line">
                     {project.fullDescription}
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-card p-6 rounded-xl border border-white/5">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Layers className="mr-2 text-primary" /> Challenges
                    </h3>
                    <ul className="space-y-3">
                      {project.challenges.map((c, i) => (
                        <li key={i} className="flex items-start text-slate-400 text-sm">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border border-white/5">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <CheckCircle className="mr-2 text-green-400" /> Solutions
                    </h3>
                    <ul className="space-y-3">
                      {project.solutions.map((s, i) => (
                        <li key={i} className="flex items-start text-slate-400 text-sm">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                   <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                   <div className="flex flex-wrap gap-2">
                     {project.technologies.map(tech => (
                       <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            ) : (
              // Blog Content Layout
              <div className="space-y-6">
                <div className="flex items-center gap-6 text-slate-500 text-sm border-b border-white/10 pb-6">
                  <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {blog.date}</span>
                  <span className="flex items-center gap-2"><Tag className="h-4 w-4" /> {blog.readTime}</span>
                </div>
                
                {/* Render HTML content safely since it's from constants */}
                <div 
                  className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-primary hover:prose-a:text-blue-400 prose-strong:text-white prose-li:text-slate-300"
                  dangerouslySetInnerHTML={{ __html: blog.content }} 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};