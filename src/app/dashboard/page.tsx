import React from "react";

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-white">Welcome back, John! 👋</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">You&apos;re making great progress. Ready to continue your journey?</p>
        </div>
        <div className="flex gap-4">
          <div className="glass px-6 py-3 rounded-2xl shadow-sm">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Current Streak</p>
            <p className="text-xl font-bold text-orange-500 flex items-center gap-2">
              12 Days <span className="text-lg">🔥</span>
            </p>
          </div>
          <div className="glass px-6 py-3 rounded-2xl shadow-sm">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Points</p>
            <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">2,450 XP</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Module Card */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none h-full flex flex-col">
            <div className="mb-6">
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full uppercase tracking-widest">Current Module</span>
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4 leading-tight">Mastering Conditionals: Part 2</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 flex-1">
              Dive deeper into mixed conditionals and hypothetical situations in professional contexts.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Module Progress</span>
                <span className="font-bold">65%</span>
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full gradient-bg w-[65%]" />
              </div>
              <button className="w-full mt-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-500/25 transform hover:-translate-y-1">
                Continue Learning
              </button>
            </div>
          </div>
        </div>

        {/* Roadmap Progress Tracker */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden min-h-[400px]">
            <h3 className="text-xl font-bold font-heading mb-8">Learning Roadmap</h3>
            
            <div className="relative">
              {/* SVG Roadmap Path */}
              <svg className="absolute top-0 left-0 w-full h-[300px]" viewBox="0 0 800 300" preserveAspectRatio="none">
                <path 
                  d="M 50,150 Q 200,50 400,150 T 750,150" 
                  className="roadmap-line"
                />
              </svg>

              {/* Roadmap Milestones */}
              <div className="relative z-10 flex justify-between items-center h-[300px] px-4">
                <Milestone 
                  pos="top" 
                  label="Basics" 
                  status="completed" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                />
                <Milestone 
                  pos="bottom" 
                  label="Intermediate" 
                  status="completed" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                />
                <Milestone 
                  pos="top" 
                  label="Advanced Grammar" 
                  status="current" 
                  pulse
                />
                <Milestone 
                  pos="bottom" 
                  label="Business English" 
                  status="locked" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
                />
                <Milestone 
                  pos="top" 
                  label="Fluency Master" 
                  status="locked" 
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats/Activity */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard label="Vocabulary Learned" value="1,240" sub="Words" color="blue" />
        <StatCard label="Hours Spent" value="86" sub="Hours" color="indigo" />
        <StatCard label="Quizzes Passed" value="42" sub="Quizzes" color="emerald" />
        <StatCard label="Peer Reviews" value="18" sub="Reviews" color="purple" />
      </section>
    </div>
  );
}

function Milestone({ label, status, pos, icon, pulse = false }: { label: string; status: 'completed' | 'current' | 'locked'; pos: 'top' | 'bottom'; icon?: React.ReactNode; pulse?: boolean }) {
  const statusStyles = {
    completed: "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30",
    current: "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-125",
    locked: "bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500"
  };

  return (
    <div className={`flex flex-col items-center gap-3 transition-all duration-300 ${pos === 'top' ? '-mt-24' : 'mt-24'}`}>
      {pos === 'bottom' && <div className="text-sm font-bold font-heading text-center max-w-[80px]">{label}</div>}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-20 transition-transform hover:scale-110 cursor-pointer roadmap-dot ${statusStyles[status]} ${pulse ? 'animate-pulse' : ''}`}>
        {icon || (status === 'current' ? <div className="w-3 h-3 bg-white rounded-full" /> : null)}
      </div>
      {pos === 'top' && <div className="text-sm font-bold font-heading text-center max-w-[80px]">{label}</div>}
    </div>
  );
}

function StatCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  const colors: Record<string, string> = {
    blue: "text-blue-600 dark:text-blue-400",
    indigo: "text-indigo-600 dark:text-indigo-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
    purple: "text-purple-600 dark:text-purple-400",
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{label}</p>
      <div className="flex items-baseline gap-2">
        <span className={`text-2xl font-bold ${colors[color]}`}>{value}</span>
        <span className="text-sm text-slate-400">{sub}</span>
      </div>
    </div>
  );
}
