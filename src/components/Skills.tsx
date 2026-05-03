import { motion } from 'motion/react';
import { SKILLS } from '../data';

export default function Skills() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-[#020617]/50" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16 tracking-tight">Core Competencies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCategory title="Frontend" skills={SKILLS.frontend} delay={0} color="#00f2ff" />
          <SkillCategory title="Backend" skills={SKILLS.backend} delay={0.1} color="#7000ff" />
          <SkillCategory title="Databases" skills={SKILLS.databases} delay={0.2} color="#0066ff" />
          <SkillCategory title="Tools" skills={SKILLS.tools} delay={0.3} color="#ffffff" />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills, delay, color }: { title: string; skills: string[]; delay: number; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl border border-white/5 bg-white/5"
    >
      <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span 
            key={idx} 
            className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-lg border border-white/5 hover:border-[#00f2ff]/30 hover:text-white transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
