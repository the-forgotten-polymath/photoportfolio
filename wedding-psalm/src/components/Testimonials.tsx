"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

// Generate 32 unique testimonials
const generatedTestimonials = [
  { id: 1, quote: "I am a fan of his work. Has seen the work in my friend's wedding. And already booked him for mine. It's different and so amazing...", name: "Happy Client", role: "Wedding" },
  { id: 2, quote: "Wedding Pslam is an Amazing bunch of talented guys! They exactly know what a customer needs. You guys are ab-sol-utely mind blowing...", name: "Priya Singh", role: "Wedding" },
  { id: 3, quote: "I booked these guys for my brother's wedding! I've been so pleasantly surprised by Mohit's work. He & his team are very professional.", name: "Rahul Verma", role: "Wedding" },
  { id: 4, quote: "It's been an year the wedding psalm took pictures on our special day. Till date me and my family cherish the day with the pictures.", name: "Ananya Sharma", role: "Pre-Wedding" },
  { id: 5, quote: "The Wedding Psalm holds a special place in our hearts for their heartfelt and meaningful photography. Best decision ever!", name: "Sneha & Rohan", role: "Wedding" },
  { id: 6, quote: "Their cinematic videos brought tears to my eyes. Incredible attention to detail and storytelling.", name: "Meera Das", role: "Cinematography" },
  { id: 7, quote: "They made us feel so comfortable during our pre-wedding shoot. The candid shots are just out of this world.", name: "Karan Mehta", role: "Pre-Wedding" },
  { id: 8, quote: "From the haldi to the reception, they didn't miss a single emotion. A fantastic and energetic team.", name: "Simran Kaur", role: "Wedding" },
  { id: 9, quote: "Booked them for my baby shower. The pictures are so soft, elegant, and full of life. Highly recommended!", name: "Neha Gupta", role: "Baby Shower" },
  { id: 10, quote: "Outstanding quality and very timely delivery of the album. The edits were exactly what we discussed.", name: "Vikram Rajput", role: "Event" },
  { id: 11, quote: "Their aesthetic sense is unmatched. Every photo looks like it belongs in a luxury magazine.", name: "Anika Jain", role: "Wedding" },
  { id: 12, quote: "Thank you for making my son's 1st birthday so memorable. The candids of him laughing are precious.", name: "Pooja Trivedi", role: "Birthday" },
  { id: 13, quote: "Mohit and his team are magicians behind the lens. They captured the true essence of our bond.", name: "Sahil & Neha", role: "Pre-Wedding" },
  { id: 14, quote: "Absolutely stunning drone shots and creative angles. They went above and beyond for our destination wedding.", name: "Aditi Rao", role: "Wedding" },
  { id: 15, quote: "Very professional, punctual, and creative. They made the entire family look spectacular.", name: "Rajat Kapoor", role: "Wedding" },
  { id: 16, quote: "The best photography investment we made. The memories they captured are priceless and timeless.", name: "Divya & Sam", role: "Wedding" },
  { id: 17, quote: "I love how they focus on unscripted, natural moments rather than just posed shots.", name: "Arjun Reddy", role: "Pre-Wedding" },
  { id: 18, quote: "The baby shower photos turned out magical. The team was so patient and creative with the props.", name: "Swati Mishra", role: "Baby Shower" },
  { id: 19, quote: "Their lighting techniques are phenomenal. Even our low-light evening functions look bright and beautiful.", name: "Kunal Desai", role: "Wedding" },
  { id: 20, quote: "A passionate team that truly loves what they do. It reflects in every single photograph they deliver.", name: "Tanya Grover", role: "Event" },
  { id: 21, quote: "They managed to capture the chaos and love of a big fat Indian wedding perfectly.", name: "Ritik Sharma", role: "Wedding" },
  { id: 22, quote: "Beautiful portraits and even better candids. Can't stop looking at my wedding album!", name: "Ishita Bose", role: "Wedding" },
  { id: 23, quote: "The pre-wedding teaser they gave us went viral among our friends. Simply cinematic and gorgeous.", name: "Varun & Disha", role: "Cinematography" },
  { id: 24, quote: "Super friendly team that blends in like family. They made everyone smile naturally.", name: "Gaurav Sen", role: "Birthday" },
  { id: 25, quote: "I was extremely particular about my bridal solo shots, and they exceeded all my expectations.", name: "Riya Mathur", role: "Wedding" },
  { id: 26, quote: "Brilliant color grading and editing. The photos have a timeless, elegant, and warm feel to them.", name: "Nishant Patel", role: "Wedding" },
  { id: 27, quote: "Thank you for bearing with our endless requests. You guys delivered exactly what we dreamed of.", name: "Shruti Hassan", role: "Pre-Wedding" },
  { id: 28, quote: "The photo booth they set up was a huge hit at our reception. Amazing quality prints on the spot.", name: "Abhishek Nair", role: "Event" },
  { id: 29, quote: "They captured my baby's expressions perfectly. Will definitely book them for future milestones.", name: "Pallavi Singh", role: "Baby Shower" },
  { id: 30, quote: "Incredible storytelling through pictures. Our wedding album looks like a fairytale book.", name: "Kritika & Aman", role: "Wedding" },
  { id: 31, quote: "Very cooperative and easy to work with. Highly skilled photographers with a great eye for detail.", name: "Sameer Wadia", role: "Wedding" },
  { id: 32, quote: "They didn't just take pictures; they captured the soul of our relationship. Masterpiece work.", name: "Natasha Ali", role: "Pre-Wedding" }
];

// Split into two rows
const topRow = generatedTestimonials.slice(0, 16);
const bottomRow = generatedTestimonials.slice(16, 32);

// We duplicate the arrays to allow for seamless infinite scrolling
const topRowDuplicated = [...topRow, ...topRow];
const bottomRowDuplicated = [...bottomRow, ...bottomRow];

export default function Testimonials() {
  return (
    <section className="bg-[#1a1410] text-white py-20 md:py-32 relative overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute right-0 top-0 w-full h-full opacity-30 pointer-events-none">
        <Image 
          src="/images/texture_generated.png" 
          alt="Background Texture" 
          fill 
          sizes="100vw"
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410] via-transparent to-[#1a1410]"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10 mb-16 flex flex-col md:flex-row justify-between items-end">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase text-primary text-sm font-semibold tracking-widest mb-4 inline-block">Testimonials</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-tight">
            <span className="italic">Voices of</span> Appreciation
          </h2>
          <div className="flex text-[#FFB800] gap-1 mt-6 items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ))}
            <span className="text-white ml-2 opacity-80 text-lg">4.9/5 from 250+ Clients</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4">
        
        {/* Top Row: Left to Right */}
        <div className="flex w-[200%] sm:w-[300%] md:w-[400%] lg:w-[400%]">
          <motion.div 
            className="flex gap-6 shrink-0 w-1/2 pr-6"
            animate={{ x: ["-100%", 0] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
          >
            {topRowDuplicated.map((t, i) => (
              <div key={`top-${i}`} className="w-[300px] md:w-[400px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors cursor-grab">
                <p className="font-body text-white/90 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
          {/* Duplicate for seamless loop */}
          <motion.div 
            className="flex gap-6 shrink-0 w-1/2 pr-6"
            animate={{ x: [0, "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
          >
            {topRowDuplicated.map((t, i) => (
              <div key={`top-dup-${i}`} className="w-[300px] md:w-[400px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors cursor-grab">
                <p className="font-body text-white/90 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row: Right to Left */}
        <div className="flex w-[200%] sm:w-[300%] md:w-[400%] lg:w-[400%]">
          <motion.div 
            className="flex gap-6 shrink-0 w-1/2 pr-6"
            animate={{ x: [0, "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
          >
            {bottomRowDuplicated.map((t, i) => (
              <div key={`bot-${i}`} className="w-[300px] md:w-[400px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors cursor-grab">
                <p className="font-body text-white/90 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div 
            className="flex gap-6 shrink-0 w-1/2 pr-6"
            animate={{ x: [0, "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
          >
            {bottomRowDuplicated.map((t, i) => (
              <div key={`bot-dup-${i}`} className="w-[300px] md:w-[400px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors cursor-grab">
                <p className="font-body text-white/90 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
