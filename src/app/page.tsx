import React from "react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-brand-orange/30 selection:text-brand-astronaut">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-900">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-astronaut rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-astronaut/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-brand-astronaut dark:text-white uppercase">English Map</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#program" className="text-sm font-semibold text-brand-astronaut hover:text-brand-orange transition-colors">Program</a>
            <a href="#about" className="text-sm font-semibold text-brand-astronaut hover:text-brand-orange transition-colors">About Us</a>
            <a href="https://www.instagram.com/englishmap.id/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-astronaut hover:text-brand-orange transition-colors">Instagram</a>
            <a href="/dashboard" className="btn-astronaut py-2.5 px-6 text-sm">
              Launch App
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-48 pb-32 px-6 bg-gradient-to-b from-white to-brand-blue-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 reveal">
              <div className="inline-block px-4 py-1.5 bg-brand-astronaut/5 text-brand-astronaut rounded-full text-xs font-bold tracking-widest uppercase">
                #1 Indonesian English Roadmap
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-astronaut leading-[1.05]">
                Navigate Your English, <br />
                <span className="text-brand-orange">Speak Without Limits.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Didesain khusus untuk membantu orang Indonesia berani berbicara bahasa Inggris dengan percaya diri melalui kurikulum yang terstruktur.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a href="https://wa.me/62881011617077" target="_blank" rel="noopener noreferrer" className="btn-orange w-full sm:w-auto text-center text-lg px-10 py-4">
                  Daftar Sekarang
                </a>
                <a href="/resource.pdf" download className="btn-astronaut w-full sm:w-auto text-center text-lg px-10 py-4 flex items-center justify-center gap-2 group/btn relative overflow-hidden shadow-xl shadow-brand-astronaut/10 transition-all">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-y-1 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    Free Resource
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </a>
                <a href="#program" className="w-full sm:w-auto text-center px-8 py-4 text-brand-astronaut font-bold hover:bg-brand-astronaut/5 rounded-full transition-all text-sm">
                  Lihat Program
                </a>
              </div>
            </div>
            <div className="relative reveal">
               <div className="aspect-square bg-brand-astronaut rounded-[60px] overflow-hidden shadow-2xl rotate-3 relative z-10">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240715181-014b9f30d740?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale-50 opacity-80 mix-blend-overlay" />
                 <div className="absolute inset-0 p-12 flex flex-col justify-end text-white bg-gradient-to-t from-brand-astronaut to-transparent">
                    <p className="text-2xl font-bold mb-2">"Akhirnya saya berani meeting pakai Bahasa Inggris!"</p>
                    <p className="opacity-70 text-sm">— Budi S., Software Engineer</p>
                 </div>
               </div>
               <div className="absolute inset-0 bg-brand-orange rounded-[60px] -rotate-3 z-0 blur-2xl opacity-20" />
            </div>
          </div>
        </section>

        {/* Why English Map Section (Trust) */}
        <section id="about" className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20 reveal">
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-astronaut mb-6">Why English Map?</h2>
              <p className="text-lg text-slate-500">Membangun kepercayaan diri melalui pendekatan yang praktis dan relevan.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <TrustCard 
                title="Practical Speaking Focus" 
                desc="Kurikulum kami berfokus pada penggunaan bahasa Inggris dalam situasi nyata, bukan sekadar teori grammar."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}
              />
              <TrustCard 
                title="Roadmap Learning" 
                desc="Navigasi pembelajaran yang jelas dari tingkat dasar hingga mahir, memastikan Anda tidak pernah merasa tersesat."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
              />
              <TrustCard 
                title="Supportive Community" 
                desc="Bergabung dengan komunitas pembelajar Indonesia yang saling mendukung dan memotivasi setiap harinya."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
              />
            </div>
          </div>
        </section>

        {/* Instagram Integration Section */}
        <section className="py-32 px-6 bg-brand-blue-white">
          <div className="max-w-7xl mx-auto text-center reveal">
            <h2 className="text-4xl font-extrabold text-brand-astronaut mb-12">Follow our journey</h2>
            <div className="flex justify-center mb-16">
              <a 
                href="https://www.instagram.com/englishmap.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-brand-astronaut group-hover:scale-110 transition-all group-hover:text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
                <span className="text-xl font-bold text-brand-astronaut">@englishmap.id</span>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
               <InstagramPlaceholder />
               <InstagramPlaceholder delay="0.1s" />
               <InstagramPlaceholder delay="0.2s" />
               <InstagramPlaceholder delay="0.3s" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="program" className="py-32 px-6 reveal">
          <div className="max-w-5xl mx-auto bg-brand-astronaut rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(244,164,96,0.15),transparent)] pointer-events-none" />
             <h2 className="text-4xl md:text-6xl font-extrabold mb-8 relative z-10">Siap berbicara tanpa batas?</h2>
             <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto relative z-10">
               Mulai perjalanan Anda hari ini dan lihat bagaimana English Map membantu Anda menaklukkan bahasa Inggris.
             </p>
             <a href="https://wa.me/62881011617077" target="_blank" rel="noopener noreferrer" className="btn-orange text-lg relative z-10 px-16 py-5 inline-block">
               Hubungi Kami via WhatsApp
             </a>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-brand-astronaut rounded-lg" />
              <span className="font-extrabold text-xl tracking-tighter text-brand-astronaut uppercase">English Map</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Navigasi belajar bahasa Inggris paling terstruktur untuk orang Indonesia. Fokus pada hasil nyata dan kepercayaan diri.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-brand-astronaut mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#about" className="hover:text-brand-orange">About Us</a></li>
              <li><a href="#program" className="hover:text-brand-orange">Program</a></li>
              <li><a href="https://www.instagram.com/englishmap.id/" className="hover:text-brand-orange">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-astronaut mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="https://wa.me/62881011617077" className="hover:text-brand-orange">WhatsApp Support</a></li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-50 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} English Map Indonesia. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <div className="fixed bottom-8 right-8 z-[100] group">
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none">
          <div className="bg-brand-astronaut text-white text-xs font-bold px-4 py-2 rounded-xl whitespace-nowrap shadow-xl">
            Tanya Program via WhatsApp
          </div>
          <div className="w-3 h-3 bg-brand-astronaut rotate-45 mx-auto -mt-1.5 ml-auto mr-5" />
        </div>
        <a 
          href="https://wa.me/62881011617077" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 animate-bounce-slow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.5 8.5 0 0 1 5.3 2.1l3.2-1.2z"/></svg>
        </a>
      </div>
    </div>
  );
}

function TrustCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="p-10 bg-brand-blue-white rounded-[40px] border border-transparent hover:border-brand-orange/20 hover:bg-white transition-all group reveal">
      <div className="mb-8 p-5 bg-white rounded-2xl inline-block shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-brand-astronaut mb-4">{title}</h3>
      <p className="text-slate-500 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function InstagramPlaceholder({ delay = "0s" }: { delay?: string }) {
  return (
    <div 
      className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative group reveal"
      style={{ transitionDelay: delay }}
    >
       <div className="absolute inset-0 bg-gradient-to-tr from-brand-astronaut/20 to-brand-orange/20" />
       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-astronaut/40 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
       </div>
    </div>
  );
}
