import { motion } from 'motion/react';
import { ExternalLink, Code2, Cpu } from 'lucide-react';
import { PROJECTS } from '../data';

export default function Projects() {
  return (
    <section className="py-24 px-6 lg:px-24" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <Code2 className="text-[#7000ff]" />
          <h2 className="text-4xl font-bold text-white tracking-tight">Key Projects</h2>
          <div className="h-[1px] flex-grow bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl overflow-hidden backdrop-blur-md"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <Cpu size={40} className="text-[#00f2ff]" />
              </div>

              <div className="mb-6">
                <span className="text-[#00f2ff] text-xs font-mono mb-2 block tracking-widest">{project.client}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00f2ff] transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] font-mono px-2 py-1 bg-white/5 text-gray-500 rounded border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
