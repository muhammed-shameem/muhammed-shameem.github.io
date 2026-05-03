import { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Cpu, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-24 py-4 lg:py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 px-4 lg:px-8 py-3 lg:py-4 rounded-2xl">
          <div className="flex items-center gap-2">
            <Cpu className="text-[#00f2ff] animate-pulse" size={20} />
            <span className="text-white font-bold tracking-tight text-lg lg:text-xl">M_S.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact" primary>Connect</NavLink>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <motion.div
          className="h-1 bg-gradient-to-r from-[#00f2ff] to-[#7000ff] origin-left mx-6 mt-2 rounded-full"
          style={{ scaleX }}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#020617]/95 backdrop-blur-xl md:hidden pt-32 px-8"
          >
            <div className="flex flex-col gap-8 text-center">
              <MobileNavLink href="#experience" onClick={closeMenu}>Experience</MobileNavLink>
              <MobileNavLink href="#projects" onClick={closeMenu}>Projects</MobileNavLink>
              <MobileNavLink href="#skills" onClick={closeMenu}>Skills</MobileNavLink>
              <MobileNavLink href="#contact" onClick={closeMenu} primary>Connect</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      className={primary 
        ? "px-5 py-2 bg-[#00f2ff] text-[#020617] rounded-full font-bold text-sm tracking-tight"
        : "text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-tight"
      }
    >
      {children}
    </motion.a>
  );
}

function MobileNavLink({ href, children, primary, onClick }: { href: string; children: React.ReactNode; primary?: boolean; onClick: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={primary
        ? "px-8 py-4 bg-[#00f2ff] text-[#020617] rounded-full font-bold text-xl inline-block mx-auto"
        : "text-gray-400 hover:text-white text-2xl font-bold transition-colors"
      }
    >
      {children}
    </a>
  );
}
