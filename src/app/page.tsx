"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CheckCircle2, MessageCircle, Star } from "lucide-react";

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Dynamic Background Transitions (Apple/Linear style)
  // Transitioning to Dark Mode (Brand Astronaut) in the Empathy Section
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.45, 0.55, 1],
    ["#F8FAFC", "#F8FAFC", "#003851", "#003851", "#F8FAFC", "#F8FAFC"]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.45, 0.55, 1],
    ["#003851", "#003851", "#F8FAFC", "#F8FAFC", "#003851", "#003851"]
  );

  // Navigation background
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(248, 250, 252, 0)", "rgba(248, 250, 252, 0.9)"]
  );

  const logoScale = useSpring(useTransform(scrollY, [0, 300], [1, 0.85]), { stiffness: 100, damping: 20 });

  return (
    <motion.div 
      ref={containerRef}
      style={{ backgroundColor, color: textColor }}
      className="flex flex-col min-h-screen font-sans selection:bg-brand-orange/30 selection:text-brand-astronaut overflow-x-hidden transition-colors duration-[1.5s] ease-in-out"
    >
      {/* Navigation */}
      <motion.header 
        style={{ backgroundColor: navBg }}
        className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-current/5 transition-all duration-300"
      >
        <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <motion.div style={{ scale: logoScale }} className="flex flex-col origin-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white shadow-sm">
                <Image src="/logo.png" alt="English Map Logo" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <span className="font-extrabold text-2xl tracking-tighter uppercase">
                English Map
              </span>
            </div>
            <motion.span 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: scrollY.get() > 50 ? 1 : 0, height: scrollY.get() > 50 ? "auto" : 0 }}
              className="text-xs font-semibold text-brand-orange uppercase tracking-widest mt-1 ml-[52px] hidden md:block"
            >
              Navigate Your English.
            </motion.span>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#empathy" className="text-sm font-bold opacity-80 hover:opacity-100 hover:text-brand-orange transition-colors">Method</a>
            <a href="#program" className="text-sm font-bold opacity-80 hover:opacity-100 hover:text-brand-orange transition-colors">Programs</a>
            <a href="https://wa.me/62881011617077" target="_blank" rel="noopener noreferrer" className="bg-brand-orange text-white py-2.5 px-6 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-brand-orange/20 hover:-translate-y-0.5">
              Contact Us
            </a>
          </div>
        </nav>
      </motion.header>

      <main className="relative">
        
        {/* Minimalist Hero Section */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-32 px-6">
          {/* Subtle background image parallax */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-10 mix-blend-multiply">
             <motion.div 
               style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
               className="w-full h-[120%]"
             >
                <Image src="/hero.png" alt="Hero background" fill className="object-cover" priority />
             </motion.div>
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-bold tracking-widest uppercase border border-brand-orange/20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
              #1 Indonesian English Roadmap
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter leading-[1.05]"
            >
              Navigate Your English.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-pink-500">
                Speak Without Limits.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl opacity-60 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Didesain khusus untuk membantu orang Indonesia berani berbicara bahasa Inggris dengan percaya diri melalui kurikulum yang terstruktur.
            </motion.p>
          </div>
        </section>

        {/* Empathy Section (Scroll triggers dark mode) */}
        <section id="empathy" className="py-[20vh] px-6 relative flex flex-col items-center justify-center min-h-[120vh]">
          <div className="max-w-4xl mx-auto space-y-[25vh]">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center leading-tight"
            >
              Pernahkah kamu merasa blank saat ingin bicara bahasa Inggris?
            </motion.h2>

            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center leading-tight text-brand-orange"
            >
              Tahu teorinya, tapi lidah kaku saat praktik?
            </motion.h2>

            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center leading-tight opacity-80"
            >
              Minder karena pelafalan kurang lancar?
            </motion.h2>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-40 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-extrabold mb-12 tracking-tight"
            >
              Ini Bukan Salahmu.<br/>Kamu Hanya Butuh <span className="text-brand-orange">Navigasi</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl opacity-70 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              Metode "English Map" memberikan peta jalan yang terstruktur. Fokus pada praktik langsung di situasi nyata, membuang teori usang, dan membangun insting bahasamu secara natural.
            </motion.p>
          </div>
        </section>

        {/* Program Section (No Prices) */}
        <section id="program" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 md:mb-32 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-2xl"
              >
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">Programs</h2>
                <p className="text-xl opacity-60 font-medium leading-relaxed">
                  Pilih program intensif yang dirancang eksklusif untuk mendobrak batasan speaking kamu dalam 1 bulan.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Private Class */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1 }}
                className="bg-brand-astronaut text-white rounded-[40px] p-10 md:p-16 relative overflow-hidden shadow-2xl flex flex-col group"
              >
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative z-10 flex-1">
                  <div className="inline-block px-5 py-2 bg-brand-orange text-white rounded-full text-sm font-bold tracking-widest uppercase mb-10 shadow-lg shadow-brand-orange/20">
                    Premium Focus
                  </div>
                  <h3 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">PRIVATE 1:1 CLASS</h3>
                  <p className="text-xl opacity-80 mb-12 leading-relaxed">
                    Personalized coaching. Fokus 100% pada progres kamu dengan fleksibilitas jadwal penuh.
                  </p>
                  <ul className="space-y-6 text-lg font-medium opacity-90 mb-16">
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-7 h-7 text-brand-orange shrink-0" /> 8 Intensive Sessions</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-7 h-7 text-brand-orange shrink-0" /> 90 Minutes / Session</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-7 h-7 text-brand-orange shrink-0" /> 80% Practice, 20% Theory</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-7 h-7 text-brand-orange shrink-0" /> Full attention dari expert tutor</li>
                  </ul>
                </div>
                <div className="relative z-10 mt-auto pt-8 border-t border-white/10">
                  <a href="https://wa.me/62881011617077?text=Halo%20min,%20saya%20mau%20daftar%20Private%201:1%20Class" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-brand-orange font-bold text-xl hover:gap-5 transition-all">
                    Daftar Sekarang <span className="text-2xl">→</span>
                  </a>
                </div>
              </motion.div>

              {/* Semi Private Class */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.1 }}
                className="bg-white text-brand-astronaut rounded-[40px] p-10 md:p-16 relative overflow-hidden shadow-2xl border border-brand-astronaut/5 flex flex-col group"
              >
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-astronaut/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative z-10 flex-1">
                  <div className="inline-block px-5 py-2 bg-brand-astronaut/5 text-brand-astronaut rounded-full text-sm font-bold tracking-widest uppercase mb-10 border border-brand-astronaut/10">
                    Most Popular
                  </div>
                  <h3 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">SEMI PRIVATE CLASS</h3>
                  <p className="text-xl opacity-70 mb-12 leading-relaxed">
                    Maksimal 7 orang per kelas. Dinamika grup yang intim untuk melatih kepercayaan diri praktikal.
                  </p>
                  <ul className="space-y-6 text-lg font-medium opacity-80 mb-16">
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-7 h-7 text-brand-astronaut shrink-0" /> 8 Interactive Sessions</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-7 h-7 text-brand-astronaut shrink-0" /> 90 Minutes / Session</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-7 h-7 text-brand-astronaut shrink-0" /> 80% Practice, 20% Theory</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-7 h-7 text-brand-astronaut shrink-0" /> Supportive peer learning</li>
                  </ul>
                </div>
                <div className="relative z-10 mt-auto pt-8 border-t border-brand-astronaut/10">
                  <a href="https://wa.me/62881011617077?text=Halo%20min,%20saya%20mau%20daftar%20Semi%20Private%20Class" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-brand-astronaut font-bold text-xl hover:gap-5 transition-all">
                    Daftar Sekarang <span className="text-2xl">→</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials Grid */}
        <section className="py-32 px-6 bg-white/50 border-t border-current/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-extrabold mb-20 text-center tracking-tight"
            >
              Cerita Mereka.
            </motion.h2>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              <TestimonialCard text="Akhirnya berani meeting pakai full English. Metodenya benar-benar nekenin di praktik, bukan cuma teori grammar yang bikin pusing." author="Budi S." role="Software Engineer" />
              <TestimonialCard text="Tutornya sangat supportive. Seminggu pertama udah kerasa banget bedanya, dari yang tadinya terbata-bata sekarang ngalir aja." author="Sinta D." role="Product Manager" />
              <TestimonialCard text="Semi private class nya seru banget! Temen-temennya asik dan ngedukung banget. 90 menit nggak kerasa." author="Andi R." role="Mahasiswa" />
              <TestimonialCard text="Worth every penny. Kurikulumnya emang didesain buat orang Indo yang udah ngerti English pasif tapi susah ngomong." author="Maya K." role="Entrepreneur" />
              <TestimonialCard text="Dulu ngerasa insecure kalau presentasi. Berkat simulasi di kelas Private, sekarang pede aja ngomong sama klien luar." author="Kevin W." role="Sales Executive" />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-orange text-white rounded-[48px] p-12 md:p-24 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">Waktunya Berubah.</h2>
                <p className="text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
                  Jangan jadi penonton sementara yang lain sudah lancar berbicara. Amankan slot kamu sekarang.
                </p>
                <div className="inline-block p-4 bg-red-500/20 text-white rounded-2xl border border-red-500/30 mb-12 font-semibold">
                  ⚠️ Peringatan: Kuota batch bulan ini hampir penuh.
                </div>
                <br/>
                <a 
                  href="https://wa.me/62881011617077" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-4 bg-white text-brand-orange px-12 py-6 rounded-full text-2xl font-bold hover:scale-105 active:scale-95 transition-transform shadow-xl"
                >
                  <MessageCircle className="w-8 h-8" />
                  Hubungi via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Simplified Footer with IG link */}
      <footer className="py-20 border-t border-current/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-lg overflow-hidden bg-white">
                <Image src="/logo.png" alt="Logo" width={32} height={32} />
             </div>
             <span className="font-extrabold text-xl tracking-tighter uppercase opacity-80">English Map</span>
          </div>
          <div className="flex items-center gap-8 font-bold opacity-70">
            <a href="https://www.instagram.com/englishmap.id/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors flex items-center gap-2">
              <InstagramIcon className="w-5 h-5" /> Instagram
            </a>
            <a href="https://wa.me/62881011617077" className="hover:text-brand-orange transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>

    </motion.div>
  );
}

// Subcomponents
function TestimonialCard({ text, author, role }: { text: string; author: string; role: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-[32px] bg-white border border-current/5 shadow-sm break-inside-avoid"
    >
      <div className="flex gap-1 mb-6 text-brand-orange">
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
      </div>
      <p className="text-xl font-medium leading-relaxed opacity-80 mb-8">"{text}"</p>
      <div>
        <p className="font-bold text-lg">{author}</p>
        <p className="opacity-50 font-medium">{role}</p>
      </div>
    </motion.div>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  );
}
