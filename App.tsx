import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Blogs } from './components/Blogs';
import { Contact } from './components/Contact';
import { ArticleView } from './components/ArticleView';
import { Project, BlogPost } from './types';

function App() {
  const [selectedItem, setSelectedItem] = useState<Project | BlogPost | null>(null);
  const [viewType, setViewType] = useState<'project' | 'blog' | null>(null);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openProject = (project: Project) => {
    setSelectedItem(project);
    setViewType('project');
  };

  const openBlog = (blog: BlogPost) => {
    setSelectedItem(blog);
    setViewType('blog');
  };

  const closeArticle = () => {
    setSelectedItem(null);
    setViewType(null);
  };

  return (
    <div className="min-h-screen bg-dark text-slate-200">
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        {/* We keep the main page mounted in the background to maintain scroll position */}
        <Hero onNavigate={handleNavigate} />
        
        <About />

        <Skills />
        <Projects onSelectProject={openProject} />
        <Blogs onSelectBlog={openBlog} />
      </main>

      <Contact />

      {/* Modal / Overlay for Reading */}
      {selectedItem && (
        <ArticleView 
          data={selectedItem} 
          type={viewType} 
          onClose={closeArticle} 
        />
      )}
    </div>
  );
}

export default App;