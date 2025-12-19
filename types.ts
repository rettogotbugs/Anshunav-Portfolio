import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  challenges: string[];
  solutions: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown-like or HTML string
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'ai-ml' | 'tools' | 'design' | 'marketing';
}

export interface Stat {
  label: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

export type ViewState = 'home' | 'project-detail' | 'blog-detail';