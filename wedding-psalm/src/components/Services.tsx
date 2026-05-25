"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Camera, Heart, Baby, Gift, Briefcase, Sparkles, Smile, Film, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    icon: Camera,
    image: '/images/image_7.webp',
    title: 'Wedding Photography',
    description: 'We believe your wedding day is a tapestry of unscripted moments. Our cinematic approach ensures every glance, tear, and joy is captured with timeless elegance.',
    longDescription: 'Our wedding photography services are completely bespoke, structured around the specific dynamics of your celebration. From capturing detailed preparations, the emotional gravity of the ceremony, to high-energy dance floor candids, we preserve it all in stunning resolution. We utilize natural light and state-of-the-art cinematic lenses to create a magazine-ready digital and print heirloom for you and your family.',
  },
  {
    id: 2,
    icon: Heart,
    image: '/images/image_8.webp',
    title: 'Pre-Wedding Shoots',
    description: 'Before you say "I do", let us narrate your love story. We scout breathtaking locations to capture the authentic chemistry between you and your partner.',
    longDescription: 'A pre-wedding session is your romance visualized. We work alongside you to design stylized environments, coordinate elegant outfits, and secure stunning editorial backdrops. We focus on unprompted, spontaneous interactions, allowing your authentic relationship to shine naturally. It is also the perfect way to become comfortable in front of the lens before your wedding day.',
  },
  {
    id: 3,
    icon: Baby,
    image: '/images/image_9.webp',
    title: 'Baby Shower',
    description: 'Welcoming a new life is a profound milestone. We softly document the radiance of motherhood and the overwhelming joy of your closest family.',
    longDescription: 'Our baby shower coverage focuses entirely on the warm atmosphere, soft pastel details, and pure excitement of welcoming your newborn. We capture gorgeous portraits of the mother-to-be along with the candid reactions, joy, and emotional details shared by your close family members.',
  },
  {
    id: 4,
    icon: Gift,
    image: '/images/image_7.webp',
    title: 'Birthday Events',
    description: 'From a spectacular first birthday to grand milestones, our energetic photography freezes the vibrant colors and genuine laughter of your celebrations.',
    longDescription: 'Birthdays are high-energy milestones that fly by in a flash. We capture the grand cake cutting, themed decors, spontaneous games, and the joyful gathering of your favorite people. Our photographers blend seamlessly into the crowd, documenting authentic emotions, colors, and laughter.',
  },
  {
    id: 5,
    icon: Briefcase,
    image: '/images/image_8.webp',
    title: 'Corporate Events',
    description: 'From professional headshots to expansive conferences, we capture the corporate pulse with sharpness, precision, and executive polish.',
    longDescription: 'Elevate your brand with professional photography. We cover corporate summits, networking panels, award ceremonies, and create crisp team portfolios. Our images are designed to fit seamlessly into marketing collaterals, official press releases, and editorial profiles.',
  },
  {
    id: 6,
    icon: Smile,
    image: '/images/image_9.webp',
    title: 'Maternity Shoots',
    description: 'Celebrating the divine journey of motherhood. We capture the serene beauty, quiet glow, and profound anticipation of your new beginning.',
    longDescription: 'Our maternity photography is a beautiful celebration of motherhood. We focus on natural lighting, ethereal fabrics, and delicate compositions to highlight the peaceful glow of the mother-to-be. The sessions are planned in private, comfortable, and gorgeous landscapes to create a relaxed environment.',
  },
  {
    id: 7,
    icon: Sparkles,
    image: '/images/image_7.webp',
    title: 'Fashion & Portraits',
    description: 'For models, artists, and creators. We shape lighting and shadows to define your persona, style, and professional portfolio.',
    longDescription: 'Designed for professionals, actors, and fashion portfolios. We sculpt light and shadow on location or in-studio to define your persona, style, and attitude. We focus on high-fidelity portraiture that enhances your visual identity and stands out on editorial sheets.',
  },
  {
    id: 8,
    icon: Film,
    image: '/images/hero_generated.png',
    title: 'Cinematic Highlights',
    description: 'A step beyond photos. Our cinematic videos tell your stories with rich sound design, dynamic cuts, and premium grading.',
    longDescription: 'High-end cinema highlights for your special occasions. We capture moving frames in ultra-HD with professional color grading, dynamic gimbal sweeps, and beautiful sound design. We turn your live celebrations into a premium, movie-quality highlight reel that will leave you spellbound.',
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [selectedService, setSelectedService] = useState<any | null>(null);

  // Responsiveness tracking
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = services.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [itemsPerView, currentIndex]);

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-6 max-w-[1280px] mx-auto overflow-hidden">
      <div className="flex items-end justify-between mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="uppercase text-primary text-sm font-semibold tracking-widest mb-4 inline-block">Services</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] text-text-dark">
            Our <span className="italic text-primary">Services</span>
          </h2>
        </motion.div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-border-color flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 cursor-pointer z-10"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-border-color flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 cursor-pointer z-10"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-visible">
        <motion.div 
          className="flex gap-6 w-full"
          animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {services.map((service, idx) => {
            const isActive = idx >= currentIndex && idx < currentIndex + itemsPerView;
            return (
              <motion.div 
                key={service.id} 
                className="bg-bg-card rounded-[20px] p-8 transition-all duration-300 hover:shadow-hover group flex flex-col justify-between h-[450px] cursor-pointer shrink-0 border border-border-color/40"
                style={{ 
                  width: itemsPerView === 4 
                    ? "calc(25% - 18px)" 
                    : itemsPerView === 2 
                    ? "calc(50% - 12px)" 
                    : "100%" 
                }}
                animate={{ 
                  scale: isActive ? 1 : 0.95,
                  opacity: isActive ? 1 : 0.4
                }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedService(service)}
              >
                <div>
                  {/* Icon jumps on hover */}
                  <div className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    <service.icon strokeWidth={1.5} className="w-full h-full" />
                  </div>
                  <h3 className="font-body font-semibold text-xl text-text-dark mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="font-body text-text-gray text-sm leading-relaxed mb-8 line-clamp-4">
                    {service.description}
                  </p>
                </div>
                <button 
                  className="self-start text-sm font-semibold text-text-dark border-b border-text-dark pb-1 group-hover:text-primary group-hover:border-primary transition-colors uppercase tracking-wider"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                >
                  Read More
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "w-8 bg-primary" : "w-2.5 bg-border-color"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Pop Description Overlay Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-bg-light text-text-dark rounded-3xl max-w-[850px] w-full overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-black/60 transition-colors border border-white/10"
                aria-label="Close details"
              >
                <X size={20} />
              </button>

              {/* Left Side: Photo */}
              <div className="relative h-60 md:h-full min-h-[300px] w-full">
                <Image 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20"></div>
              </div>

              {/* Right Side: Text & CTA */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-primary italic font-heading text-lg mb-2 block">Service Spotlight</span>
                  <h3 className="font-heading text-3xl text-text-dark mb-6">{selectedService.title}</h3>
                  <p className="font-body text-text-gray text-sm leading-relaxed mb-8">
                    {selectedService.longDescription}
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-md uppercase tracking-wider text-xs text-center inline-block"
                >
                  Book this Session
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
