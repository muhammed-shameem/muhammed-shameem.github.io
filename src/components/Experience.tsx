import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Building2, Terminal, CheckCircle2, Layers } from 'lucide-react';
import { EXPERIENCE } from '../data';
import { cn } from '../lib/utils';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 px-6 lg:px-24 bg-[#020617]/40 relative" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-20">
          <div className="flex items-center gap-4">
            <Layers className="text-[#00f2ff]" />
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tighter italic uppercase">Deployment_History</h2>
          </div>
          <div className="h-[1px] flex-grow bg-white/5 mx-4 hidden md:block" />
          <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest hidden md:block">
            Verifying_Records... [OK]
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-3 flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar pb-4 lg:pb-0 gap-2">
            {EXPERIENCE.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "px-6 py-4 rounded-xl text-left transition-all duration-300 min-w-[160px] lg:min-w-max border",
                  activeTab === idx 
                    ? "bg-[#00f2ff]/10 border-[#00f2ff]/30 text-[#00f2ff] shadow-[0_0_20px_rgba(0,242,255,0.05)]" 
                    : "border-transparent text-gray-500 hover:text-white hover:bg-white/5"
                )}
              >
                <div className="text-[10px] lg:text-xs font-mono mb-1 opacity-60">LOG_{idx.toString().padStart(2, '0')}</div>
                <div className="font-bold tracking-tight text-base lg:text-lg">{exp.company}</div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-9 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/[0.02] border border-white/5 rounded-2xl lg:rounded-3xl p-6 lg:p-12 backdrop-blur-sm"
              >
                <div className="flex flex-wrap justify-between items-start gap-6 mb-10">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 leading-none">
                      {EXPERIENCE[activeTab].role}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
                      <span className="flex items-center gap-1.5 py-1 px-3 bg-white/5 rounded-full border border-white/5 text-[#00f2ff]">
                        <Building2 size={14} />
                        {EXPERIENCE[activeTab].company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {EXPERIENCE[activeTab].period}
                      </span>
                    </div>
                  </div>
                  
                  <div className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified_Experience
                  </div>
                </div>

                <p className="text-gray-400 text-lg mb-10 italic border-l-2 border-[#00f2ff]/30 pl-6">
                  {EXPERIENCE[activeTab].description}
                </p>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {EXPERIENCE[activeTab].highlights.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group flex gap-4"
                    >
                      <div className="mt-1 shrink-0">
                        <CheckCircle2 size={18} className="text-[#00f2ff] opacity-40 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Automation Visual Logic */}
                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    {['SYSTEM_V4', 'AUTOMATION_ENABLED', 'REACT_TS'].map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-gray-600 bg-black/40 px-2 py-0.5 rounded italic">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Terminal size={16} className="text-[#00f2ff] opacity-20" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
