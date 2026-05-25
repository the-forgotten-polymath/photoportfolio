"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryImages = [
  { id: 1, src: '/images/image_7.webp', category: 'Wedding', alt: 'Wedding Celebration' },
  { id: 2, src: '/images/image_8.webp', category: 'Pre Wedding', alt: 'Scenic Prewedding' },
  { id: 3, src: '/images/image_9.webp', category: 'Portraits', alt: 'Elegant Bridal Solo' },
  { id: 4, src: '/images/image_10.webp', category: 'Wedding', alt: 'Reception Moments' },
  { id: 5, src: '/images/image_11.webp', category: 'Pre Wedding', alt: 'Tehri Lake Romantic Walk' },
  { id: 6, src: '/images/image_12.webp', category: 'Portraits', alt: 'Close-up Bridal Glance' },
  { id: 7, src: '/images/image_13.webp', category: 'Wedding', alt: 'Traditional Rituals' },
  { id: 8, src: '/images/image_14.webp', category: 'Pre Wedding', alt: 'Sunset Golden Hour' },
  { id: 9, src: '/images/image_15.webp', category: 'Portraits', alt: 'Modern Styled Portrait' },
  { id: 10, src: '/images/image_16.webp', category: 'Wedding', alt: 'Happy Couple Walk' },
  { id: 11, src: '/images/image_17.webp', category: 'Pre Wedding', alt: 'Misty Mountains shoot' },
  { id: 12, src: '/images/image_18.webp', category: 'Portraits', alt: 'Ethereal Silhouette' }
];

const categories = ['All', 'Wedding', 'Pre Wedding', 'Portraits'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    // Find index of the image in the filtered list to keep navigation consistent
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! >= filteredImages.length - 1 ? 0 : prev! + 1));
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! <= 0 ? filteredImages.length - 1 : prev! - 1));
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 px-4 md:px-6 max-w-[1280px] mx-auto border-t border-border-color">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase text-primary text-sm font-semibold tracking-widest mb-4 inline-block">Visuals</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] text-text-dark">
            Our <span className="italic text-primary">Gallery</span>
          </h2>
        </motion.div>

        {/* Categories Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 active:scale-95 cursor-pointer ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-bg-card hover:bg-border-color text-text-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid of Masonry-style/Structured Cards */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={image.id}
              onClick={() => openLightbox(idx)}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-hover transition-all duration-500"
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/25 flex items-center justify-center text-white"
                >
                  <ZoomIn size={24} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Left navigation arrow */}
            <button
              onClick={prevImage}
              className="absolute left-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Main Image View */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              className="relative max-w-[90vw] max-h-[80vh] aspect-[3/2] w-full md:w-[80vw] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={filteredImages[lightboxIndex].src} 
                alt={filteredImages[lightboxIndex].alt} 
                fill 
                sizes="90vw"
                className="object-contain bg-black"
                priority
              />
            </motion.div>

            {/* Right navigation arrow */}
            <button
              onClick={nextImage}
              className="absolute right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tracking-widest uppercase bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-md">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
