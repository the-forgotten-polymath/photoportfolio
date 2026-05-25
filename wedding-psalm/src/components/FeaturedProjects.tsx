"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, src: '/images/image_7.webp', category: 'Wedding', title: 'The Grand Celebration' },
  { id: 2, src: '/images/image_8.webp', category: 'Prewedding', title: 'Mountain Sunset' },
  { id: 3, src: '/images/image_9.webp', category: 'Wedding', title: 'Golden Hour Vows' },
  { id: 4, src: '/images/image_10.webp', category: 'Birthday', title: 'First Milestone' },
  { id: 5, src: '/images/image_11.webp', category: 'Wedding', title: 'Traditional Elegance' },
  { id: 6, src: '/images/image_12.webp', category: 'Baby Shower', title: 'Welcoming Joy' },
];

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 md:px-6 max-w-[1280px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
      >
        <h2 className="font-heading text-4xl md:text-5xl text-text-dark text-center md:text-left">
          Featured <span className="italic text-primary">Projects</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2">
          {['All Project', 'Wedding', 'Prewedding', 'Baby Shower'].map((tab, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                idx === 0 
                  ? 'bg-primary text-white' 
                  : 'bg-transparent text-text-dark border border-border-color hover:bg-bg-card'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-bg-card">
              <Image 
                src={project.src} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="flex gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-bg-card text-text-gray rounded-md">
                {project.category}
              </span>
            </div>
            <h3 className="font-body font-semibold text-lg text-text-dark group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
