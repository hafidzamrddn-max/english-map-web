"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { CheckCircle2, Star, Download, ChevronDown, Map as MapIcon, ArrowDown, MoveRight } from "lucide-react";

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
    ["#F8FAFC", "#F8FAFC", "#002b3d", "#002b3d", "#F8FAFC", "#F8FAFC"]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.45, 0.55, 1],
    ["#003851", "#003851", "#F8FAFC", "#F8FAFC", "#003851", "#003851"]
  );

  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(248, 250, 252, 0)", "rgba(248, 250, 252, 0.95)"]
  );

  const logoScale = useSpring(useTransform(scrollY, [0, 300], [1, 0.85]), { stiffness: 100, damping: 20 });
  const pathHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), { stiffness: 50, damping: 20 });

  return (
    <motion.div 
      ref={containerRef}
      style={{ backgroundColor, color: textColor }}
      className="flex flex-col min-h-screen font-sans selection:bg-brand-orange/30 selection:text-brand-astronaut overflow-x-hidden transition-colors duration-[1.5s] ease-in-out relative"
    >
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
        style={{ backgroundColor: navBg }}
        className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-current/5 transition-all duration-300"
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
        <section className="w-full h-screen flex flex-col items-center justify-center px-6 relative snap-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center flex flex-col items-center"
          >
            <div className="w-28 h-28 mb-10 rounded-[2rem] overflow-hidden border border-brand-astronaut/5 shadow-2xl bg-white p-2">
              <Image src="/logo.png" alt="English Map Logo" width={112} height={112} className="w-full h-full object-cover rounded-2xl" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-extrabold tracking-tighter leading-[1.1] mb-6">
              Peta Jalan<br />Bahasamu
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-60">
              Berhenti menghafal, mulai berbicara tanpa batas.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-20 flex flex-col items-center gap-3 text-brand-orange font-bold animate-bounce"
          >
            <span className="text-sm tracking-widest uppercase">Mulai Perjalanan</span>
            <ArrowDown className="w-6 h-6" />
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

            {/* Visual Comparison Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-brand-astronaut border border-white/10 rounded-[40px] p-10 md:p-16 max-w-4xl mx-auto text-left shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 blur-3xl rounded-full" />
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-12 tracking-tight text-center">Perbandingan Metode</h3>
              
              <div className="space-y-12">
                {/* Traditional Method */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <p className="text-xl font-bold text-white/60">Tempat Les Lain</p>
                  </div>
                  <div className="flex h-12 w-full rounded-full overflow-hidden bg-white/5 relative border border-white/10">
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                      className="bg-white/20 h-full flex items-center justify-center border-r border-white/10 absolute left-0 top-0"
                    >
                      <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1}} className="text-xs font-bold text-white/70 px-4 whitespace-nowrap">80% Teori</motion.span>
                    </motion.div>
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "20%" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                      className="bg-brand-orange/30 h-full flex items-center justify-center absolute right-0 top-0"
                    >
                      <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1}} className="text-xs font-bold text-brand-orange px-4 whitespace-nowrap">20% Praktik</motion.span>
                    </motion.div>
                  </div>
                </div>

                {/* English Map Method */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <p className="text-2xl font-extrabold text-white">English Map</p>
                  </div>
                  <div className="flex h-16 w-full rounded-full overflow-hidden bg-white/5 shadow-lg shadow-brand-orange/10 border border-white/10 relative">
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "20%" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                      className="bg-white/10 h-full flex items-center justify-center border-r border-white/10 absolute left-0 top-0"
                    >
                      <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.2}} className="text-xs font-bold text-white/50 px-4 whitespace-nowrap">20% Teori</motion.span>
                    </motion.div>
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                      className="bg-brand-orange h-full flex items-center justify-center absolute right-0 top-0 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                      <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.2}} className="text-sm font-extrabold text-white px-4 whitespace-nowrap">80% Praktik Bicara</motion.span>
                    </motion.div>
                  </div>
                </div>
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
        <section className="py-32 px-6 md:pl-24 bg-brand-blue-white border-t border-current/5 text-brand-astronaut">
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
