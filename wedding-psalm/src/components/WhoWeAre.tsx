"use client";

import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 max-w-[1280px] mx-auto border-t border-border-color">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:w-1/4"
        >
          <span className="text-text-gray text-sm uppercase tracking-widest font-semibold inline-block mb-4 md:mb-0">
            Who we are
          </span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-3/4"
        >
          <p className="font-heading text-2xl md:text-3xl lg:text-[40px] leading-snug md:leading-snug lg:leading-snug text-text-dark">
            Hello, I&apos;m Mohit, the creative force behind <strong className="font-bold">The Wedding Psalm</strong>. My journey from Spanish enthusiast to MBA graduate led me unexpectedly to <span className="italic text-primary font-bold">photography</span>. Starting as a college curiosity, I dabbled in Spanish, exploring the beauty of language. An MBA followed, delving into the intricacies of business dynamics. Amidst this, <span className="italic text-primary font-bold">photography</span> quietly found its way into my heart.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
