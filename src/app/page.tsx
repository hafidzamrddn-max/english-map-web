import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Reclaim Your <span className="gradient-text">Lost Assets</span> with Confidence
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              We specialize in the recovery of digital and physical assets using advanced forensic technology and legal expertise. Fast, secure, and transparent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-primary dark:bg-brand-accent text-white dark:text-slate-950 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-brand-accent/20">
                Start Recovery Case
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-slate-200 dark:border-slate-800 rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-accent mb-1">$500M+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Assets Recovered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-accent mb-1">98%</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-accent mb-1">12k+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-accent mb-1">24/7</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Global Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Recovery Services</h2>
            <p className="text-slate-500 dark:text-slate-400">Tailored solutions for every complex recovery challenge.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-brand-accent transition-colors group shadow-sm">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                <svg className="w-6 h-6 text-brand-primary dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Crypto Recovery</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Advanced blockchain forensics to track and recover lost or stolen digital assets across all major chains.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-brand-accent transition-colors group shadow-sm">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                <svg className="w-6 h-6 text-brand-primary dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Legal Advocacy</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Expert legal assistance to navigate multi-jurisdictional claims and secure your rights to lost property.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-brand-accent transition-colors group shadow-sm">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                <svg className="w-6 h-6 text-brand-primary dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fraud Protection</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Strategic consulting to secure your remaining assets and prevent future incidents with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary dark:bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-12 rounded-3xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to reclaim your assets?</h2>
            <p className="text-xl text-slate-300 mb-10">Our specialists are standing by for a free, confidential consultation.</p>
            <button className="px-10 py-5 bg-brand-accent text-slate-900 rounded-full font-bold text-xl hover:scale-105 transition-transform">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
