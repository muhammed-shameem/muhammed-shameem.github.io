import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  return (
    <section className="py-24 px-6 lg:px-24" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#00f2ff]/10 via-[#7000ff]/10 to-[#0066ff]/10 p-12 rounded-3xl border border-white/10 backdrop-blur-lg"
        >
          <h2 className="text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Currently open to discussing new opportunities, automation solutions, or architectural challenges.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ContactItem icon={<Mail className="text-[#00f2ff]" />} label="Email" value={PERSONAL_INFO.email} href={`mailto:${PERSONAL_INFO.email}`} />
            <ContactItem icon={<Phone className="text-[#7000ff]" />} label="Phone" value={PERSONAL_INFO.phone} href={`tel:${PERSONAL_INFO.phone}`} />
            <ContactItem icon={<MapPin className="text-[#0066ff]" />} label="Location" value={PERSONAL_INFO.location} />
          </div>

          <div className="h-[1px] w-full bg-white/10 mb-8" />
          
          <motion.a
            href={`mailto:${PERSONAL_INFO.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#020617] font-bold rounded-full transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Initiate Pulse
            <Send size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors group">
      <div className="p-3 rounded-full bg-white/5 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{label}</span>
      <span className="text-white font-medium text-sm">{value}</span>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : content;
}
