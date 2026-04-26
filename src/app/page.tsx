"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Download, CheckCircle2, Navigation, MessageCircle, MapPin, ExternalLink } from "lucide-react";

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll();

  // Navigation background blur on scroll
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(248, 250, 252, 0)", "rgba(248, 250, 252, 0.95)"]
  );

  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 56, 81, 0)", "rgba(0, 56, 81, 0.1)"]
  );

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const passkey = prompt("Masukkan passkey untuk mengunduh:");
    if (passkey === "MAP2026") {
      const link = document.createElement("a");
      link.href = "/resource.pdf";
      link.download = "resource.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (passkey !== null) {
      alert("Passkey tidak valid");
    }
  };

  return (
    <div 
      ref={containerRef}
      className="flex flex-col min-h-screen bg-brand-blue-white text-brand-astronaut font-sans selection:bg-brand-orange/30 selection:text-brand-astronaut overflow-x-hidden"
    >
      {/* Navigation */}
      <motion.header 
        style={{ backgroundColor: navBg, borderColor: navBorder }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-colors duration-300"
      >
        <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg flex-shrink-0 bg-white">
              <Image src="/logo.png" alt="English Map Logo" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter uppercase text-brand-astronaut">
              English Map
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#program" className="text-sm font-bold text-brand-astronaut hover:text-brand-orange transition-colors">Packages</a>
            <a href="#about" className="text-sm font-bold text-brand-astronaut hover:text-brand-orange transition-colors">About</a>
            <a href="#content" className="text-sm font-bold text-brand-astronaut hover:text-brand-orange transition-colors">Content</a>
            <a href="https://wa.me/62881011617077" target="_blank" rel="noopener noreferrer" className="bg-brand-orange text-white py-2.5 px-6 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-brand-orange/20 hover:-translate-y-0.5">
              Contact Us
            </a>
          </div>
        </nav>
      </motion.header>

      <main className="relative">
        
        {/* Fullscreen Hero Image Section (Apple-style long scroll) */}
        <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-brand-astronaut">
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{
              y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]),
              scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
            }}
          >
            <Image 
              src="/hero.png" 
              alt="Hero Concept" 
              fill 
              priority
              className="object-cover opacity-60 mix-blend-screen"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-white/10 via-transparent to-brand-blue-white" />
        </section>

        {/* Hero Text Section (Reveals as you scroll down) */}
        <HeroSection handleDownload={handleDownload} />

        {/* About / Trust Section */}
        <TrustSection />

        {/* Packages Section */}
        <PackagesSection />

        {/* Instagram Content Section */}
        <ContentSection />

      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}

// -------------------------------------------------------------
// SECTIONS
// -------------------------------------------------------------

function HeroSection({ handleDownload }: { handleDownload: (e: React.MouseEvent) => void }) {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 } 
    }
  };

  return (
    <section className="px-6 relative pb-32 pt-16 md:pt-32 -mt-32 md:-mt-48 z-10">
      <div className="max-w-5xl mx-auto text-center bg-brand-blue-white/80 backdrop-blur-3xl p-8 md:p-16 rounded-[40px] shadow-2xl border border-white">
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase border border-brand-orange/20 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            #1 Indonesian English Roadmap
          </motion.div>
          
          <motion.h1 variants={itemVars} className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] text-brand-astronaut mb-8">
            Navigate Your English.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-pink-500">
              Speak Without Limits.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVars} className="text-xl md:text-2xl text-brand-astronaut opacity-80 leading-relaxed max-w-2xl mx-auto font-medium">
            Didesain khusus untuk membantu orang Indonesia berani berbicara bahasa Inggris dengan percaya diri melalui kurikulum yang terstruktur.
          </motion.p>
          
          <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12">
            <a href="#program" className="w-full sm:w-auto text-center text-lg px-10 py-4 bg-brand-orange text-white rounded-full font-bold hover:brightness-110 transition-all shadow-xl shadow-brand-orange/20 hover:-translate-y-1">
              Lihat Program
            </a>
            <button 
              onClick={handleDownload}
              className="w-full sm:w-auto text-center text-lg px-10 py-4 border-2 border-brand-astronaut/20 text-brand-astronaut rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-astronaut/5 transition-all group"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Free Resource
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-brand-blue-white">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-astronaut/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-brand-astronaut"
          >
            Why English Map?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-lg md:text-xl text-brand-astronaut opacity-80 font-medium"
          >
            Membangun kepercayaan diri melalui pendekatan yang praktis dan relevan.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TrustCard 
            title="Practical Speaking" 
            desc="Kurikulum kami berfokus pada penggunaan bahasa dalam situasi nyata, bukan sekadar teori."
            icon={<MessageCircle className="w-8 h-8 text-brand-orange" />}
            delay={0.1}
          />
          <TrustCard 
            title="Roadmap Learning" 
            desc="Navigasi pembelajaran yang jelas dari tingkat dasar hingga mahir."
            icon={<Navigation className="w-8 h-8 text-brand-orange" />}
            delay={0.2}
          />
          <TrustCard 
            title="Supportive Community" 
            desc="Bergabung dengan komunitas pembelajar Indonesia yang saling mendukung."
            icon={<CheckCircle2 className="w-8 h-8 text-brand-orange" />}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function TrustCard({ title, desc, icon, delay }: { title: string; desc: string; icon: React.ReactNode; delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay }}
      className="p-10 rounded-[32px] bg-white border border-brand-astronaut/5 hover:border-brand-orange/30 transition-all hover:shadow-2xl hover:shadow-brand-orange/10 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/10 transition-colors" />
      <div className="mb-8 p-4 bg-brand-blue-white rounded-2xl shadow-sm inline-block group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-brand-astronaut relative z-10">{title}</h3>
      <p className="text-brand-astronaut opacity-80 leading-relaxed font-medium relative z-10">
        {desc}
      </p>
    </motion.div>
  );
}

function PackagesSection() {
  return (
    <section id="program" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-[4rem] font-extrabold mb-6 tracking-tight text-brand-astronaut"
          >
            Pilih Program Belajarmu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-lg md:text-xl text-brand-astronaut opacity-80 font-medium"
          >
            Fokus pada praktik speaking dengan panduan intensif untuk hasil yang cepat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* PRIVATE 1:1 CLASS */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="bg-brand-astronaut text-white rounded-[40px] p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-brand-astronaut/20 flex flex-col h-full group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-brand-orange/30 transition-colors duration-1000" />
            
            <div className="flex-1 relative z-10">
              <div className="inline-block px-4 py-1.5 bg-brand-orange text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                Best for Fast Progress
              </div>
              <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">🎯 PRIVATE 1:1 ENGLISH SPEAKING CLASS</h3>
              <p className="text-white opacity-90 mb-10 font-medium leading-relaxed text-lg">
                Masih sering blank pas ngomong English, minder, atau takut salah? Sekarang waktunya belajar speaking lebih fokus, lebih intensif, dan lebih personal.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-brand-orange text-xl">✨ Private 1:1</h4>
                <ul className="space-y-3 text-white opacity-95 font-medium">
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> <span>8 sessions</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> <span>90 minutes / session</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> <span>80% practice, 20% theory</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> <span>Full attention dari tutor</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> <span>Cocok buat yang mau progress speaking lebih cepat dalam 1 bulan</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> <span>Kuota 8 sesi bisa dipakai selama 1 bulan</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> <span>Bebas pilih sesi sesuai hari dan jam yang cocok</span></li>
                </ul>
              </div>

              <div className="space-y-4 mb-10">
                <h4 className="font-bold text-brand-orange text-xl">🎁 Bonus learning support</h4>
                <ul className="space-y-3 text-white opacity-95 font-medium">
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> <span>Module / materials</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> <span>Speaking prompts / assignments</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> <span>Progress note / report</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" /> <span>Internal certificate</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-auto relative z-10">
              <a 
                href="https://wa.me/62881011617077?text=Halo%20min,%20saya%20mau%20daftar%20Private%201:1%20Class" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-center bg-brand-orange text-white py-5 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-brand-orange/30 hover:-translate-y-1"
              >
                📲 Daftar Sekarang
              </a>
            </div>
          </motion.div>

          {/* SEMI PRIVATE CLASS */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-brand-blue-white text-brand-astronaut rounded-[40px] p-8 md:p-12 relative border border-brand-astronaut/10 shadow-2xl shadow-brand-astronaut/5 flex flex-col h-full group"
          >
            <div className="flex-1 relative z-10">
              <div className="inline-block px-4 py-1.5 bg-brand-astronaut/5 text-brand-astronaut rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-brand-astronaut/10">
                Most Popular
              </div>
              <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">👥 SEMI PRIVATE ENGLISH SPEAKING CLASS</h3>
              <p className="text-brand-astronaut opacity-80 mb-10 font-medium leading-relaxed text-lg">
                Pengen belajar speaking tapi tetap nyaman, lebih fokus, dan nggak serame kelas besar? Paket ini cocok buat kamu yang mau progress lebih cepat tanpa harus ambil private.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-brand-astronaut text-xl">✨ Semi Private 7 Orang</h4>
                <ul className="space-y-3 text-brand-astronaut opacity-90 font-medium">
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> <span>8 sessions</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> <span>90 minutes / session</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> <span>80% practice, 20% theory</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> <span>More speaking time</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> <span>Lebih nyaman buat yang masih minder</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> <span>Cocok buat yang mau improve speaking practical dalam 1 bulan</span></li>
                </ul>
              </div>

              <div className="space-y-4 mb-10">
                <h4 className="font-bold text-brand-astronaut text-xl">🎁 Bonus learning support</h4>
                <ul className="space-y-3 text-brand-astronaut opacity-90 font-medium">
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> <span>Module / materials</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> <span>Speaking prompts / assignments</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> <span>Progress note / report</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> <span>Admin / scheduling / reminder</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> <span>Internal certificate</span></li>
                  <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-brand-astronaut shrink-0" /> <span>Platform / overhead</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-auto relative z-10">
              <a 
                href="https://wa.me/62881011617077?text=Halo%20min,%20saya%20mau%20daftar%20Semi%20Private%20Class" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-center bg-brand-astronaut text-white py-5 rounded-full font-bold text-lg hover:bg-[#002b3d] transition-all shadow-xl shadow-brand-astronaut/30 hover:-translate-y-1"
              >
                📲 Daftar Sekarang
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContentSection() {
  const posts = [
    {
      id: 1,
      url: "https://www.instagram.com/p/DXl3FXID_EK/",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
      title: "Content Preview 1"
    },
    {
      id: 2,
      url: "https://www.instagram.com/p/DXjjL5KlBUs/",
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800&auto=format&fit=crop",
      title: "Content Preview 2"
    },
    {
      id: 3,
      url: "https://www.instagram.com/p/DXbiVo0FufR/",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
      title: "Content Preview 3"
    }
  ];

  return (
    <section id="content" className="py-32 px-6 bg-brand-blue-white border-t border-brand-astronaut/5">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="inline-flex flex-col items-center gap-4 mb-20"
        >
          <a 
            href="https://www.instagram.com/englishmap.id/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1 hover:scale-110 transition-transform duration-500 shadow-xl shadow-pink-500/20 group block"
          >
            <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center">
              <InstagramIcon className="w-8 h-8 text-pink-600 group-hover:scale-110 transition-transform" />
            </div>
          </a>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-brand-astronaut tracking-tight">Our Updates</h2>
          <p className="text-brand-astronaut opacity-60 font-medium text-lg">Follow us on Instagram @englishmap.id</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <motion.a 
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: i * 0.15 }}
              className="group block relative aspect-square bg-white rounded-[32px] overflow-hidden shadow-xl border border-brand-astronaut/5"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-astronaut/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm bg-brand-astronaut/20">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <ExternalLink className="w-6 h-6" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-20 border-t border-brand-astronaut/10 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm bg-white">
               <Image src="/logo.png" alt="English Map Logo" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            <span className="font-extrabold text-xl tracking-tighter uppercase text-brand-astronaut">English Map</span>
          </div>
          <p className="text-brand-astronaut opacity-60 max-w-sm leading-relaxed font-medium">
            Navigasi belajar bahasa Inggris paling terstruktur untuk orang Indonesia. Fokus pada hasil nyata dan kepercayaan diri.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-brand-astronaut tracking-tight">Quick Links</h4>
          <ul className="space-y-4 text-brand-astronaut opacity-70 font-medium">
            <li><a href="#about" className="hover:text-brand-orange transition-colors block">About Us</a></li>
            <li><a href="#program" className="hover:text-brand-orange transition-colors block">Packages</a></li>
            <li><a href="https://www.instagram.com/englishmap.id/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors block">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-brand-astronaut tracking-tight">Contact</h4>
          <ul className="space-y-4 text-brand-astronaut opacity-70 font-medium">
            <li><a href="https://wa.me/62881011617077" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors block">WhatsApp Support</a></li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-brand-astronaut/10 text-center text-sm text-brand-astronaut opacity-40 font-medium">
        © {new Date().getFullYear()} English Map Indonesia. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none">
        <div className="bg-brand-astronaut text-white text-xs font-bold px-4 py-2 rounded-xl whitespace-nowrap shadow-xl">
          Tanya Program via WhatsApp
        </div>
      </div>
      <a 
        href="https://wa.me/62881011617077" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
      >
        <WhatsAppIcon className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}

// Custom Icons
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
