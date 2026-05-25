"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-6 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <h1 className="font-display text-text-dark text-5xl sm:text-7xl lg:text-[100px] leading-[0.85] uppercase tracking-tighter m-0 flex flex-wrap gap-x-4 break-words w-full">
            <span>THE WEDDING</span>
            <span>PSALM</span>
          </h1>
          <h2 className="mt-8 font-heading text-3xl md:text-4xl lg:text-[40px] leading-tight text-text-dark">
            <span className="italic text-primary">Unscripted</span> stories, lasting <span className="italic text-primary">impressions</span>
          </h2>
          <Link href="#portfolio" className="mt-10 uppercase text-sm font-semibold text-primary underline underline-offset-4 hover:opacity-80 transition-opacity flex items-center gap-2 tracking-widest">
            VIEW PORTFOLIO &rarr;
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full aspect-[4/3] lg:aspect-[16/9] rounded-2xl overflow-hidden shadow-card"
        >
          <Image 
            src="/images/hero_generated.png" 
            alt="High-end Cinematic Wedding" 
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10"></div>
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#C9540A" stroke="#C9540A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <div className="absolute inset-0 rounded-full animate-pulse-ring pointer-events-none"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
