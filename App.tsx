import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Blogs } from './components/Blogs.tsx';
import { Contact } from './components/Contact.tsx';
import { ArticleView } from './components/ArticleView.tsx';
import { Project, BlogPost } from './types.ts';

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