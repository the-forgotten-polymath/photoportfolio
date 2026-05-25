"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CTABooking() {
  const [formData, setFormData] = useState({
    name: "",
    event: "Wedding",
    date: "",
    message: ""
  });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919876543210"; // Placeholder number
    const text = `Hi, I'm ${formData.name}. I'd like to book a photography session for a ${formData.event} on ${formData.date}. \n\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-6 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/image_3.webp" 
          alt="Contact Background" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-[800px] w-full bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl"
      >
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
            <span className="italic text-primary">Start</span> Designing Your Memories
          </h2>
          <p className="font-body text-white/70 max-w-[500px] mx-auto">
            Book a free consultation and explore photography solutions tailored specifically to your vision and special day.
          </p>
        </div>

        <form onSubmit={handleWhatsAppRedirect} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-white/80 text-sm font-semibold">Name</label>
            <input 
              type="text" 
              required
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-white/80 text-sm font-semibold">Event Type</label>
            <select 
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
              value={formData.event}
              onChange={(e) => setFormData({...formData, event: e.target.value})}
            >
              <option className="text-black" value="Wedding">Wedding</option>
              <option className="text-black" value="Pre-Wedding">Pre-Wedding</option>
              <option className="text-black" value="Baby Shower">Baby Shower</option>
              <option className="text-black" value="Birthday">Birthday</option>
              <option className="text-black" value="Other">Other Event</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-white/80 text-sm font-semibold">Event Date</label>
            <input 
              type="date" 
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-white/80 text-sm font-semibold">Message</label>
            <textarea 
              rows={4}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center mt-4">
            <button 
              type="submit" 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all hover:scale-105 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book via WhatsApp
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
