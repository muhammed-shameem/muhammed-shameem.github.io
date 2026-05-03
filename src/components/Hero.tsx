import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronRight, Gitlab } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import ThreeDPhoto from './ThreeDPhoto';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center pt-24 lg:pt-0 px-6 lg:px-24 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl z-10 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-[#00f2ff]/20 bg-[#00f2ff]/5 mb-8 mx-auto lg:mx-0">
            <div className="w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse" />
            <span className="font-mono text-[#00f2ff] text-[10px] uppercase tracking-[0.2em]">
              Currently building at IQVIA
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 lg:mb-8 tracking-tight leading-[1.2] lg:leading-[1.1]">
            Engineering Automation & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#7000ff] to-[#0066ff]">
              Scalable Platforms
            </span>
          </h1>
          
          <p className="text-gray-400 text-base lg:text-xl max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed mb-10 lg:mb-12">
            Fullstack engineer focused on automation systems, low-code tools, and scalable architectures. 
            Currently building at <span className="text-white font-medium">IQVIA</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-[#00f2ff] text-[#020617] font-bold rounded-full flex items-center justify-center gap-2 group transition-all hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]"
            >
              Explore My Work
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <div className="flex items-center gap-6">
              <SocialLink href={PERSONAL_INFO.github} icon={<Github size={24} />} />
              <SocialLink href={PERSONAL_INFO.gitlab || '#'} icon={<Gitlab size={24} />} />
              <SocialLink href={PERSONAL_INFO.linkedin} icon={<Linkedin size={24} />} />
              <SocialLink href={`mailto:${PERSONAL_INFO.email}`} icon={<Mail size={24} />} />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] lg:h-[700px] w-full hidden lg:block"
        >
          {/* Abstract glow behind the 3D element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00f2ff]/10 rounded-full blur-[120px]" />
          <ThreeDPhoto />
          
          {/* Real Work Overlay elements */}
          <div className="absolute bottom-12 right-0 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl min-w-[220px]">
            <p className="text-[#00f2ff] font-mono text-[10px] mb-2 font-bold tracking-widest">FOCUS_AREAS</p>
            <div className="space-y-3">
              <WorkIndicator label="Automation Systems" />
              <WorkIndicator label="Low-Code Testing" />
              <WorkIndicator label="CI/CD Pipelines" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 select-none">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[2px] h-10 bg-gradient-to-b from-[#00f2ff] to-transparent"
        />
      </div>
    </section>
  );
}

function WorkIndicator({ label }: { label: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center text-[9px] font-mono text-white/60">
        <span>{label}</span>
        <span className="text-[#00f2ff]">ACTIVE</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full w-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }} 
          animate={{ width: "100%" }} 
          transition={{ duration: 1.5, delay: Math.random() }} 
          className="h-full bg-[#00f2ff]" 
        />
      </div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, color: '#00f2ff' }}
      className="text-gray-500 transition-colors"
    >
      {icon}
    </motion.a>
  );
}
