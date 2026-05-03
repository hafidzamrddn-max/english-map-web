"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { CheckCircle2, Star, Download, ChevronDown, ArrowDown, MoveRight } from "lucide-react";
import FluencyCoreCanvas from "@/components/FluencyCoreCanvas";

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background shifts
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.45, 0.55, 1],
    ["#002b3d", "#002b3d", "#F8FAFC", "#F8FAFC", "#002b3d", "#002b3d"]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.45, 0.55, 1],
    ["#F8FAFC", "#F8FAFC", "#003851", "#003851", "#F8FAFC", "#F8FAFC"]
  );

  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(248, 250, 252, 0)", "rgba(248, 250, 252, 0.95)"]
  );

  const logoScale = useSpring(useTransform(scrollY, [0, 300], [1, 0.85]), { stiffness: 100, damping: 20 });
  const pathHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), { stiffness: 50, damping: 20 });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  const headerTextColor = useTransform(
    scrollY,
    [0, 100],
    ["#F8FAFC", "#003851"]
  );

  return (
    <motion.div 
      ref={containerRef}
      style={{ backgroundColor, color: textColor }}
      className="flex flex-col min-h-screen font-sans selection:bg-brand-orange/30 selection:text-brand-astronaut overflow-x-hidden transition-colors duration-[1.5s] ease-in-out relative"
    >
      {/* Fixed Fluency Core Canvas */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-30">
        <FluencyCoreCanvas progress={smoothProgress} />
      </div>

      {/* Dynamic Roadmap Line - Scroll Progress Indicator */}
      <div className="fixed left-6 md:left-12 top-0 bottom-0 w-[2px] bg-current/10 z-0 pointer-events-none hidden md:block">
        <motion.div 
          style={{ height: pathHeight }}
          className="w-full bg-brand-orange relative"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-brand-orange shadow-[0_0_15px_rgba(255,107,107,0.8)]" />
        </motion.div>
      </div>

      <motion.header 
        style={{ backgroundColor: navBg, color: headerTextColor }}
        className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-black/5 transition-all duration-300"
      >
        <nav className="max-w-7xl mx-auto px-6 md:pl-24 h-24 flex items-center justify-between">
          <motion.div style={{ scale: logoScale }} className="flex flex-col origin-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white shadow-sm border border-brand-astronaut/10">
                <Image src="/logo.png" alt="English Map Logo" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <span className="font-extrabold text-2xl tracking-tighter uppercase text-current">
                English Map
              </span>
            </div>
            <motion.span 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: scrollY.get() > 50 ? 1 : 0, height: scrollY.get() > 50 ? "auto" : 0 }}
              className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.2em] mt-1 ml-[52px] hidden md:block"
            >
              Navigate Your English
            </motion.span>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#empathy" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-brand-orange transition-colors">Metode</a>
            <a href="#program" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-brand-orange transition-colors">Program</a>
            <a href="#faq" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-brand-orange transition-colors">FAQ</a>
            <a href="https://wa.me/62881011617077" target="_blank" rel="noopener noreferrer" className="bg-brand-orange text-white py-2.5 px-6 rounded-full text-sm font-bold hover:bg-[#e09150] transition-colors shadow-lg shadow-brand-orange/20">
              Mulai Bicara
            </a>
          </div>
        </nav>
      </motion.header>

      <main className="relative z-10 w-full">
        
        {/* Intro / Grand Opening Section */}
        <section className="w-full h-screen flex flex-col items-center justify-center px-6 relative snap-start overflow-hidden">
          {/* Subtle Background Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          >
            <Image
              src="/logo.png"
              alt="Background Logo"
              width={800}
              height={800}
              className="object-contain w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] filter grayscale"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center flex flex-col items-center relative z-10"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-extrabold tracking-tighter leading-[1.1] mb-6">
              Peta Jalan<br />Bahasamu
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-60 mt-6">
              Berhenti menghafal, mulai berbicara tanpa batas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-20 flex flex-col items-center gap-3 text-brand-orange font-bold animate-bounce z-10"
          >
            <ArrowDown className="w-8 h-8" />
          </motion.div>
        </section>

        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center py-20 px-6 md:pl-24 gap-12 max-w-7xl mx-auto">
          <div className="flex-1 relative z-10 space-y-10 text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.05]"
            >
              Bicara<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#ff6b6b]">
                Tanpa Batas
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-xl md:text-2xl opacity-70 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0"
            >
              Teori usang tergantikan oleh hasil nyata. Simpan buku grammar-mu dan mulai berbicara selancar bahasa ibu. Dirancang khusus untuk menghancurkan mental block orang Indonesia selamanya.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a href="#program" className="w-full sm:w-auto text-center px-10 py-4 bg-brand-orange text-white rounded-full font-bold text-lg hover:bg-[#e09150] transition-colors shadow-xl shadow-brand-orange/20">
                Pilih Kelas
              </a>
              <a href="#free-module" className="w-full sm:w-auto text-center px-10 py-4 bg-transparent text-current rounded-full font-bold text-lg border-2 border-current/20 hover:bg-current/5 transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" /> Panduan Gratis
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="flex-1 w-full relative aspect-[4/3] lg:aspect-square max-w-xl mx-auto hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent rounded-[3rem] transform rotate-3 blur-2xl" />
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-current/10 shadow-2xl">
              <Image 
                src="/hero.png" 
                alt="English speaking environment" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-[10s]" 
                priority 
              />
            </div>
          </motion.div>
        </section>

        {/* Empathy Section (Dark Mode) */}
        <section id="empathy" className="py-[15vh] px-6 md:pl-24 relative flex flex-col items-center justify-center min-h-screen">
          <div className="max-w-4xl mx-auto space-y-[20vh]">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                Mengerti teorinya, tapi kaku saat berbicara.
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-brand-orange/90">
                Paham grammar, minim praktik.
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight opacity-70">
                Takut salah bicara, kesempatan pun hilang.
              </h2>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-32 px-6 md:pl-24">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-20 h-20 bg-brand-orange/10 rounded-3xl flex items-center justify-center mx-auto mb-10"
            >
              <MoveRight className="w-10 h-10 text-brand-orange" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10 tracking-tight"
            >
              Sedikit Teori<br />Banyak <span className="text-brand-orange">Bicara</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-2xl opacity-70 font-medium leading-relaxed max-w-3xl mx-auto mb-20"
            >
              Bukan salahmu, hanya kurang jam terbang. English Map menghidupkan insting bahasamu lewat simulasi dunia nyata agar kamu bisa bicara selancar bernapas.
            </motion.p>

            {/* Visual Comparison Chart - Static Apple Widget Style */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16"
            >
              {/* Traditional Method */}
              <div className="bg-black/5 border border-current/5 rounded-[40px] p-10 md:p-14 flex flex-col items-center justify-center text-center">
                <div className="w-40 h-40 relative mb-8">
                  <svg className="w-full h-full transform -rotate-90 drop-shadow-md" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-current opacity-10" />
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="201 251.3" className="text-current opacity-30" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold opacity-50">80%</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 mt-1">Teori</span>
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-3 opacity-60">Tempat Les Lain</h4>
                <p className="opacity-50 font-medium leading-relaxed">Waktu berharga habis hanya untuk menghafal rumus grammar.</p>
              </div>

              {/* English Map Method */}
              <div className="bg-brand-astronaut border border-brand-astronaut/10 rounded-[40px] p-10 md:p-14 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl text-white">
                <div className="absolute inset-0 bg-brand-orange/10 blur-3xl" />
                <div className="w-40 h-40 relative mb-8 z-10">
                  <svg className="w-full h-full transform -rotate-90 drop-shadow-xl" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/10" />
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="201 251.3" className="text-brand-orange" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold text-brand-orange">80%</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange/70 mt-1">Praktik</span>
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-3 relative z-10">English Map</h4>
                <p className="text-white/70 font-medium leading-relaxed relative z-10">Fokus penuh pada simulasi bicara. Hancurkan mental block selamanya.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Free Module CTA */}
        <section id="free-module" className="py-20 px-6 md:pl-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto bg-brand-blue-white text-brand-astronaut rounded-[40px] p-10 md:p-16 border border-brand-astronaut/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 text-green-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500" /> 100% Gratis
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Satu Panduan, Ribuan Kata</h2>
              <p className="text-xl opacity-80 font-medium mb-8">
                Download langkah praktisnya dan mulailah berbicara hari ini. Ini bukan sekadar dokumen, melainkan peta jalan menuju kelancaran sejati.
              </p>
              <a 
                href="/resource.pdf" 
                download
                className="inline-flex items-center justify-center gap-3 bg-brand-astronaut text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#002230] transition-colors shadow-lg"
              >
                <Download className="w-6 h-6" />
                Unduh Gratis
              </a>
            </div>
            <div className="w-full md:w-1/3 aspect-[3/4] bg-white rounded-2xl shadow-2xl rotate-3 border border-brand-astronaut/5 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-brand-astronaut/5" />
               <div className="text-center p-6 relative z-10">
                 <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand-orange">
                   <Download className="w-8 h-8" />
                 </div>
                 <p className="font-extrabold text-brand-astronaut text-xl mb-2">Speaking Roadmap</p>
                 <p className="text-sm font-medium text-brand-astronaut/50">PDF Document • 2.4 MB</p>
               </div>
            </div>
          </motion.div>
        </section>

        {/* Program Section */}
        <section id="program" className="py-32 px-6 md:pl-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
              >
                Pilih Jalan Pintasmu
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
                className="text-2xl opacity-60 font-medium max-w-2xl mx-auto"
              >
                Satu Bulan. Transformasi Total. Cepat, tepat, dan percaya diri.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Private Class */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1 }}
                className="bg-brand-astronaut text-white rounded-[40px] p-10 md:p-14 relative overflow-hidden shadow-2xl flex flex-col group hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,43,61,0.3)] hover:scale-[1.01] transition-all duration-500 cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex-1">
                  <div className="inline-block px-5 py-2 bg-brand-orange text-white rounded-full text-xs font-bold tracking-widest uppercase mb-8">
                    Fokus Penuh
                  </div>
                  <h3 className="text-5xl font-extrabold mb-6 tracking-tight">Private 1:1</h3>
                  <p className="text-xl opacity-80 mb-10 leading-relaxed font-medium">
                    Atensi eksklusif untuk membongkar kelemahan speaking secara spesifik dengan waktu yang sepenuhnya milikmu.
                  </p>
                  <ul className="space-y-5 text-lg font-medium opacity-90 mb-12">
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> 8 Sesi Intensif</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> 90 Menit Bicara</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> Tutor Spesialis</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> Jadwal Fleksibel</li>
                  </ul>
                </div>
                <div className="relative z-10 mt-auto pt-8 border-t border-white/10">
                  <a href="https://wa.me/62881011617077?text=Halo%20min,%20aku%20tertarik%20sama%20Private%201:1%20Class%20nih" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-brand-orange text-white py-5 rounded-full font-bold text-lg hover:bg-[#e09150] transition-colors">
                    Mulai Private
                  </a>
                </div>
              </motion.div>

              {/* Semi Private Class */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.1 }}
                className="bg-white text-brand-astronaut rounded-[40px] p-10 md:p-14 relative overflow-hidden shadow-2xl border border-brand-astronaut/10 flex flex-col group hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] hover:scale-[1.01] transition-all duration-500 cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-astronaut/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex-1">
                  <div className="inline-block px-5 py-2 bg-brand-astronaut/5 text-brand-astronaut rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-brand-astronaut/10">
                    Satu Frekuensi
                  </div>
                  <h3 className="text-5xl font-extrabold mb-6 tracking-tight">Semi Private</h3>
                  <p className="text-xl opacity-70 mb-10 leading-relaxed font-medium">
                    Sempurna untuk melatih keberanian di depan umum bersama maksimal 7 orang dalam lingkungan tanpa penghakiman.
                  </p>
                  <ul className="space-y-5 text-lg font-medium opacity-80 mb-12">
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> 8 Sesi Grup Interaktif</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> 90 Menit Simulasi</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> Hancurkan Rasa Minder</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> Jadwal Terstruktur</li>
                  </ul>
                </div>
                <div className="relative z-10 mt-auto pt-8 border-t border-brand-astronaut/10">
                  <a href="https://wa.me/62881011617077?text=Halo%20min,%20aku%20mau%20ikutan%20Semi%20Private%20Class%20dong" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-brand-astronaut text-white py-5 rounded-full font-bold text-lg hover:bg-[#002230] transition-colors">
                    Mulai Bersama
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-6 md:pl-24 border-t border-current/5 text-current relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
              >
                Mereka Membuktikan
              </motion.h2>
              <p className="text-2xl opacity-70 font-medium">Bukan sekadar cerita, ini hasil nyata</p>
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              <TestimonialCard text="Akhirnya berani pimpin meeting full English. Nol teori membosankan dan 100% praktik yang masuk akal." author="Budi S." role="Software Engineer" />
              <TestimonialCard text="Satu minggu pertama kaku lidah hilang. Tutor asik, ngomong jadi ngalir tanpa banyak mikir." author="Sinta D." role="Product Manager" />
              <TestimonialCard text="Lingkungannya super supportif. Waktu 90 menit terasa singkat karena kita dipaksa ngomong terus." author="Andi R." role="Mahasiswa" />
              <TestimonialCard text="Solusi jitu buat yang otaknya ngerti tapi mulutnya bisu. Metode simulasi yang nggak main-main." author="Maya K." role="Entrepreneur" />
              <TestimonialCard text="Sesi tanya jawab presentasi jadi rutinitas biasa. Mental block hancur dan berani debat klien luar." author="Kevin W." role="Sales Executive" />
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-32 px-6 md:pl-24 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
              >
                Lebih Dekat di Instagram
              </motion.h2>
              <p className="text-xl opacity-70 font-medium">Tips harian, cuplikan kelas, dan keseruan lainnya.</p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8"
            >
              <div className="w-full max-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden border border-black/5" dangerouslySetInnerHTML={{ __html: instagramEmbed1 }} />
              <div className="w-full max-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden border border-black/5" dangerouslySetInnerHTML={{ __html: instagramEmbed2 }} />
              <div className="w-full max-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden border border-black/5" dangerouslySetInnerHTML={{ __html: instagramEmbed3 }} />
            </motion.div>
            <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-32 px-6 md:pl-24">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-extrabold text-center tracking-tight mb-16"
            >
              Pertanyaan & Jawaban
            </motion.h2>
            
            <div className="space-y-4">
              <FaqItem 
                question="Apakah kelas berjalan secara online?" 
                answer="Ya, 100% online lewat Zoom. Kamu bisa belajar di mana saja dengan interaksi tanpa batas ruang." 
              />
              <FaqItem 
                question="Bagaimana cara menentukan jadwal?" 
                answer="Sepenuhnya dalam kendalimu. Kelas Private menyesuaikan waktu luangmu, sedangkan kelas Semi-Private memiliki jam rutin malam hari yang sangat fleksibel." 
              />
              <FaqItem 
                question="Cocok untuk pemula yang benar-benar nol?" 
                answer="Sangat cocok karena kurikulum dibangun bertahap dalam lingkungan tanpa penghakiman. Tutor spesialis pemula siap menuntun langkahmu." 
              />
              <FaqItem 
                question="Bagaimana langkah mendaftarnya?" 
                answer="Cukup klik tombol WhatsApp di halaman ini. Konsultasi, pilih jadwal, dan kamu siap belajar." 
              />
            </div>
          </div>
        </section>

        {/* Final CTA (Clean Premium) */}
        <section className="py-20 px-6 md:pl-24 pb-40">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-white text-brand-astronaut rounded-[48px] p-12 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-brand-astronaut/10 relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center mb-8">
                  <WhatsAppIcon className="w-10 h-10 fill-[#25D366]" />
                </div>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
                  Tunggu Apa Lagi?
                </h2>
                <p className="text-2xl opacity-70 mb-10 max-w-xl mx-auto font-medium leading-relaxed text-brand-astronaut">
                  Karir menanti, bicaralah sekarang tanpa ragu.
                </p>
                
                <div className="flex flex-col items-center justify-center gap-6">
                  <a 
                    href="https://wa.me/62881011617077?text=Halo%20English%20Map,%20mau%20tanya-tanya%20dulu%20dong%20soal%20kelasnya" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group inline-flex items-center justify-center gap-3 bg-brand-astronaut text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[#002230] hover:-translate-y-1 transition-all duration-300 shadow-xl"
                  >
                    Bicara Lewat Chat <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-bold tracking-widest uppercase mt-4">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
                    </span>
                    Registrasi Kurang Dari 5 Menit
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <footer className="py-12 border-t border-current/10 relative z-10 bg-inherit">
        <div className="max-w-7xl mx-auto px-6 md:pl-24 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-lg overflow-hidden bg-white border border-current/10">
                <Image src="/logo.png" alt="Logo" width={32} height={32} />
             </div>
             <span className="font-extrabold tracking-tighter uppercase opacity-80">English Map</span>
          </div>
          <div className="flex items-center gap-8 font-bold opacity-70">
            <a href="https://www.instagram.com/englishmap.id/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors flex items-center gap-2">
              <InstagramIcon className="w-5 h-5" /> Instagram
            </a>
            <a href="https://wa.me/62881011617077" className="hover:text-brand-orange transition-colors">WhatsApp</a>
          </div>
          <div className="text-sm opacity-50 font-medium">
            © {new Date().getFullYear()} English Map Indonesia.
          </div>
        </div>
      </footer>

    </motion.div>
  );
}

// Subcomponents

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-current/10 rounded-3xl bg-white overflow-hidden text-brand-astronaut"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
      >
        <h3 className="text-2xl font-bold tracking-tight pr-8">{question}</h3>
        <ChevronDown className={`w-6 h-6 shrink-0 transition-transform duration-300 opacity-50 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 md:px-8 pb-8 pt-2 text-xl opacity-70 font-medium leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TestimonialCard({ text, author, role }: { text: string; author: string; role: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 md:p-10 rounded-[32px] bg-white border border-brand-astronaut/10 shadow-sm hover:shadow-xl transition-shadow break-inside-avoid text-brand-astronaut"
    >
      <div className="flex gap-1 mb-6 text-brand-orange">
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
      </div>
      <p className="text-xl font-medium leading-relaxed opacity-80 mb-8">&quot;{text}&quot;</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-xl">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-lg">{author}</p>
          <p className="opacity-50 font-medium text-sm uppercase tracking-wider">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );
}

const instagramEmbed1 = `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DXl3FXID_EK/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DXl3FXID_EK/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DXl3FXID_EK/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Online English Course (@englishmap.id)</a></p></div></blockquote>`;

const instagramEmbed2 = `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DXjjL5KlBUs/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DXjjL5KlBUs/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DXjjL5KlBUs/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Online English Course (@englishmap.id)</a></p></div></blockquote>`;

const instagramEmbed3 = `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DXbiVo0FufR/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DXbiVo0FufR/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DXbiVo0FufR/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Online English Course (@englishmap.id)</a></p></div></blockquote>`;
