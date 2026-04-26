"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { CheckCircle2, Star, Download, ChevronDown, MessageCircle } from "lucide-react";

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.4, 0.5, 1],
    ["#F8FAFC", "#F8FAFC", "#002b3d", "#002b3d", "#F8FAFC", "#F8FAFC"]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.4, 0.5, 1],
    ["#003851", "#003851", "#F8FAFC", "#F8FAFC", "#003851", "#003851"]
  );

  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(248, 250, 252, 0)", "rgba(248, 250, 252, 0.95)"]
  );

  const logoScale = useSpring(useTransform(scrollY, [0, 300], [1, 0.85]), { stiffness: 100, damping: 20 });

  return (
    <motion.div 
      ref={containerRef}
      style={{ backgroundColor, color: textColor }}
      className="flex flex-col min-h-screen font-sans selection:bg-brand-orange/30 selection:text-brand-astronaut overflow-x-hidden transition-colors duration-[1.5s] ease-in-out"
    >
      <motion.header 
        style={{ backgroundColor: navBg }}
        className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-current/5 transition-all duration-300"
      >
        <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
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
            <a href="#empathy" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-brand-orange transition-colors">Method</a>
            <a href="#program" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-brand-orange transition-colors">Programs</a>
            <a href="#faq" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-brand-orange transition-colors">FAQ</a>
            <a href="https://wa.me/62881011617077" target="_blank" rel="noopener noreferrer" className="bg-brand-orange text-white py-2.5 px-6 rounded-full text-sm font-bold hover:bg-[#e09150] transition-colors shadow-lg shadow-brand-orange/20">
              Konsultasi Gratis
            </a>
          </div>
        </nav>
      </motion.header>

      <main className="relative">
        
        <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center pt-32 pb-20 px-6 gap-12 max-w-7xl mx-auto">
          <div className="flex-1 relative z-10 space-y-10 text-center lg:text-left mt-10 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-bold tracking-widest uppercase border border-brand-orange/20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
              #1 Indonesian English Roadmap
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter leading-[1.05]"
            >
              Navigate Your English.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#ff6b6b]">
                Speak Without Limits.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-2xl opacity-70 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0"
            >
              Berhenti menghafal teori. Mulai berbicara dengan lancar. Program eksklusif yang dirancang khusus memecahkan mental block orang Indonesia dalam berbahasa Inggris.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a href="#program" className="w-full sm:w-auto text-center px-10 py-4 bg-brand-orange text-white rounded-full font-bold text-lg hover:bg-[#e09150] transition-colors shadow-xl shadow-brand-orange/20">
                Eksplor Program
              </a>
              <a href="#free-module" className="w-full sm:w-auto text-center px-10 py-4 bg-transparent text-current rounded-full font-bold text-lg border-2 border-current/20 hover:bg-current/5 transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" /> Download Modul
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
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

        <section id="empathy" className="py-[15vh] px-6 relative flex flex-col items-center justify-center min-h-screen">
          <div className="max-w-4xl mx-auto space-y-[20vh]">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Sudah belajar bertahun-tahun, tapi masih nge-blank saat diajak ngobrol?
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-brand-orange/90">
                Paham semua teorinya, tapi lidah kaku dan takut salah grammar saat praktik?
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight opacity-70">
                Peluang karir terhambat hanya karena kurang PD saat interview bahasa Inggris?
              </h2>
            </motion.div>
          </div>
        </section>

        <section className="py-40 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-20 h-20 bg-brand-orange/10 rounded-3xl flex items-center justify-center mx-auto mb-10"
            >
              <MessageCircle className="w-10 h-10 text-brand-orange" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-extrabold mb-10 tracking-tight"
            >
              Ini Bukan Salahmu.<br/>Kamu Hanya Kekurangan <span className="text-brand-orange">Jam Terbang</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-2xl opacity-70 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              Sistem edukasi lama memaksa kita menghafal rumus. Di &quot;English Map&quot;, kami memberikan peta jalan terstruktur dengan 80% praktik simulasi nyata. Membangun insting bahasamu secara natural.
            </motion.p>
          </div>
        </section>

        <section id="free-module" className="py-20 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto bg-brand-blue-white rounded-[40px] p-10 md:p-16 border border-brand-astronaut/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 text-green-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500" /> 100% Free
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Curi Start Belajarmu Sekarang</h2>
              <p className="text-lg opacity-70 font-medium mb-8">
                Download modul eksklusif &quot;Roadmap Mahir Speaking&quot; PDF. Berisi panduan praktis step-by-step yang bisa langsung kamu terapkan hari ini. Tanpa syarat.
              </p>
              <a 
                href="/resource.pdf" 
                download
                className="inline-flex items-center justify-center gap-3 bg-brand-astronaut text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#002230] transition-colors shadow-lg"
              >
                <Download className="w-6 h-6" />
                Download PDF Modul
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

        <section id="program" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
              >
                Pilih Jalur Cepatmu
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
                className="text-xl opacity-60 font-medium max-w-2xl mx-auto"
              >
                Setiap program dirancang intensif dengan output yang jelas: Kamu harus bisa bicara bahasa Inggris tanpa ragu di akhir bulan.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1 }}
                className="bg-brand-astronaut text-white rounded-[40px] p-10 md:p-14 relative overflow-hidden shadow-2xl flex flex-col group"
              >
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex-1">
                  <div className="inline-block px-5 py-2 bg-brand-orange text-white rounded-full text-xs font-bold tracking-widest uppercase mb-8">
                    Premium Focus
                  </div>
                  <h3 className="text-4xl font-extrabold mb-6 tracking-tight">Private 1:1 Class</h3>
                  <p className="text-lg opacity-80 mb-10 leading-relaxed font-medium">
                    Personalized coaching. Fokus 100% membongkar kelemahan speaking-mu secara privat dengan jadwal sangat fleksibel.
                  </p>
                  <ul className="space-y-5 text-lg font-medium opacity-90 mb-12">
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> 8 Intensive Sessions</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> 90 Minutes / Session</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> 80% Practice, 20% Theory</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> Full Attention Expert Tutor</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> Bebas Pilih Jam Belajar</li>
                  </ul>
                </div>
                <div className="relative z-10 mt-auto pt-8 border-t border-white/10">
                  <a href="https://wa.me/62881011617077?text=Halo%20min,%20saya%20mau%20daftar%20Private%201:1%20Class" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-brand-orange text-white py-5 rounded-full font-bold text-lg hover:bg-[#e09150] transition-colors">
                    Daftar Private Class
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.1 }}
                className="bg-white text-brand-astronaut rounded-[40px] p-10 md:p-14 relative overflow-hidden shadow-2xl border border-brand-astronaut/10 flex flex-col group"
              >
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-astronaut/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex-1">
                  <div className="inline-block px-5 py-2 bg-brand-astronaut/5 text-brand-astronaut rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-brand-astronaut/10">
                    Most Popular
                  </div>
                  <h3 className="text-4xl font-extrabold mb-6 tracking-tight">Semi Private Class</h3>
                  <p className="text-lg opacity-70 mb-10 leading-relaxed font-medium">
                    Maksimal 7 orang per kelas. Melatih mental berbicara di depan orang lain dalam lingkungan yang sangat supportive.
                  </p>
                  <ul className="space-y-5 text-lg font-medium opacity-80 mb-12">
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> 8 Interactive Sessions</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> 90 Minutes / Session</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> 80% Practice, 20% Theory</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> Mengatasi Rasa Minder</li>
                    <li className="flex gap-4 items-center"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> Teman Belajar Sefrekuensi</li>
                  </ul>
                </div>
                <div className="relative z-10 mt-auto pt-8 border-t border-brand-astronaut/10">
                  <a href="https://wa.me/62881011617077?text=Halo%20min,%20saya%20mau%20daftar%20Semi%20Private%20Class" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-brand-astronaut text-white py-5 rounded-full font-bold text-lg hover:bg-[#002230] transition-colors">
                    Daftar Semi Private
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-brand-blue-white border-t border-current/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
              >
                Mereka Sudah Membuktikan.
              </motion.h2>
              <p className="text-xl opacity-60 font-medium">Bukan sekadar testimoni, tapi cerita transformasi karir dan rasa percaya diri.</p>
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              <TestimonialCard text="Akhirnya berani meeting pakai full English. Metodenya benar-benar nekenin di praktik simulasi, bukan cuma teori grammar yang bikin pusing." author="Budi S." role="Software Engineer" />
              <TestimonialCard text="Tutornya sangat supportive. Seminggu pertama udah kerasa banget bedanya, dari yang tadinya terbata-bata sekarang ngalir aja tanpa banyak mikir." author="Sinta D." role="Product Manager" />
              <TestimonialCard text="Semi private class nya seru banget! Temen-temennya asik dan ngedukung banget buat berani ngomong. 90 menit nggak kerasa sama sekali." author="Andi R." role="Mahasiswa" />
              <TestimonialCard text="Worth every penny. Kurikulumnya emang didesain buat orang Indo yang udah ngerti English pasif tapi susah banget ngeluarin suaranya." author="Maya K." role="Entrepreneur" />
              <TestimonialCard text="Dulu selalu insecure kalau ada sesi tanya jawab presentasi. Berkat simulasi di kelas Private, sekarang berani debat sama klien luar." author="Kevin W." role="Sales Executive" />
            </div>
          </div>
        </section>

        <section id="faq" className="py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-16"
            >
              Frequently Asked Questions
            </motion.h2>
            
            <div className="space-y-4">
              <FaqItem 
                question="Apakah kelasnya berjalan offline atau online?" 
                answer="Seluruh program kami berjalan 100% online via Zoom. Kamu bisa belajar darimana saja tanpa perlu repot memikirkan transportasi, namun tetap mendapatkan interaksi seakan tatap muka." 
              />
              <FaqItem 
                question="Bagaimana sistem jadwal belajarnya?" 
                answer="Sangat fleksibel! Untuk Private Class, jadwal bisa disepakati langsung antara kamu dan tutor. Untuk Semi Private, jadwal sudah ditentukan (biasanya malam hari atau weekend) agar cocok dengan kesibukan kerja/kuliah." 
              />
              <FaqItem 
                question="Saya benar-benar mulai dari nol, apakah cocok?" 
                answer="Tentu. Tutor kami sudah dilatih khusus untuk menghadapi student yang sering nge-blank atau belum PD. Lingkungan belajar dibuat se-nyaman mungkin tanpa ada rasa dihakimi." 
              />
              <FaqItem 
                question="Bagaimana cara registrasi dan pembayarannya?" 
                answer="Prosesnya sangat gampang. Cukup klik tombol WhatsApp di halaman ini, admin kami akan merespons cepat untuk mencatat data kamu. Pembayaran dilakukan via transfer bank resmi setelah jadwal disepakati." 
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-6 pb-40">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-brand-astronaut text-white rounded-[40px] p-12 md:p-20 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/20 blur-[120px] rounded-full opacity-50" />
              </div>

              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight">
                  Jangan Tunda Lagi.
                </h2>
                <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                  Peluang karir terbaik membutuhkan kemampuan komunikasi yang percaya diri. Amankan kursimu sebelum kehabisan slot.
                </p>
                
                <div className="inline-block p-4 bg-red-500/10 text-red-300 rounded-2xl border border-red-500/20 mb-12 font-semibold text-sm tracking-wide">
                  ⚠️ PERHATIAN: Kuota batch minggu ini tersisa sangat sedikit.
                </div>
                
                <div className="flex justify-center">
                  <a 
                    href="https://wa.me/62881011617077?text=Halo%20English%20Map,%20saya%20tertarik%20untuk%20join%20kelasnya" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group inline-flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[#1fad53] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#25D366]/20"
                  >
                    <WhatsAppIcon className="w-8 h-8 fill-current group-hover:animate-bounce" />
                    Chat Admin via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <footer className="py-12 border-t border-current/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
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
            © {new Date().getFullYear()} English Map Indonesia. All rights reserved.
          </div>
        </div>
      </footer>

    </motion.div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-current/10 rounded-3xl bg-white overflow-hidden"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
      >
        <h3 className="text-xl font-bold tracking-tight pr-8">{question}</h3>
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
            <div className="px-6 md:px-8 pb-8 pt-2 text-lg opacity-70 font-medium leading-relaxed">
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
      className="p-8 md:p-10 rounded-[32px] bg-white border border-current/5 shadow-md hover:shadow-xl transition-shadow break-inside-avoid"
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
