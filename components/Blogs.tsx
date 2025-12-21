import React from 'react';
import { BLOGS } from '../constants';
import { BlogPost } from '../types';
import { BookOpen, Calendar, Clock, Feather } from 'lucide-react';

interface BlogsProps {
  onSelectBlog: (blog: BlogPost) => void;
}

export const Blogs: React.FC<BlogsProps> = ({ onSelectBlog }) => {
  return (
    <section id="blog" className="py-20 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 text-secondary mb-4">
            <Feather className="w-5 h-5" />
            <span className="text-sm font-bold tracking-widest uppercase">Writing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Thoughts & Insights</h2>
          <p className="text-slate-400 max-w-2xl">
            Exploring the intersection of software engineering, artificial intelligence, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <article 
              key={blog.id}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => onSelectBlog(blog)}
            >
              {/* Image */}
              <div className="relative h-56 rounded-2xl overflow-hidden mb-6 border border-white/5">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-2">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {blog.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {blog.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors leading-tight">
                  {blog.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-4 flex items-center text-sm font-medium text-white group-hover:text-secondary transition-colors">
                  Read Article <BookOpen className="ml-2 h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};