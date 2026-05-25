"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6 max-w-[1280px] mx-auto border-t border-border-color">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Pull Quote + Owner Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-bg-dark rounded-2xl relative overflow-hidden text-white h-full flex flex-col justify-center min-h-[400px] lg:min-h-[500px]"
        >
          <Image 
            src="/images/owner.png" 
            alt="Mohit - Owner of The Wedding Psalm" 
            fill 
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
          
          <div className="relative z-10 p-10 md:p-16">
            <div className="text-[120px] font-heading italic text-primary/70 absolute -top-4 left-4 leading-none">
              &ldquo;
            </div>
            <p className="font-heading text-3xl md:text-4xl lg:text-[44px] leading-tight mt-12 text-white shadow-sm">
              Photography is not just what it looks like. Photography is how it feels.
            </p>
          </div>
        </motion.div>

        {/* Right Side: About Us Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-start"
        >
          <span className="text-primary italic font-heading text-lg mb-4">About Us</span>
          <h2 className="font-heading text-4xl md:text-5xl leading-tight text-text-dark mb-6">
            <span className="italic text-primary">Crafting</span> Timeless Memories For Your <span className="italic text-primary">Special Occasions</span>
          </h2>
          <p className="font-body text-text-gray mb-6 leading-relaxed">
            The Wedding Psalm holds a special place in our hearts for their heartfelt and meaningful photography. Their dedicated team—including Nikita Sharma, Isha Soni, Keshav Bhardwaj, Maheshanand Upreti, and Meemansha Mahtoliya—works tirelessly to capture the essence of every celebration.
          </p>
          <p className="font-body text-text-gray mb-12 leading-relaxed">
            From engagements to weddings, we create stories that you and your family will cherish forever.
          </p>
          
          <div className="grid grid-cols-3 gap-8 w-full border-t border-border-color pt-8">
            <div>
              <div className="font-display text-4xl text-primary mb-1">500+</div>
              <div className="text-xs text-text-gray uppercase tracking-wider font-semibold">Projects</div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary mb-1">12+</div>
              <div className="text-xs text-text-gray uppercase tracking-wider font-semibold">Years Exp</div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary mb-1">49+</div>
              <div className="text-xs text-text-gray uppercase tracking-wider font-semibold">Awards</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
