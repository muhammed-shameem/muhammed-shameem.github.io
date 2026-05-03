/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Background3D from './components/Background3D';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden selection:bg-[#00f2ff] selection:text-[#020617]">
      <Background3D />
      <Navbar />
      
      <div className="pt-8">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        
        <footer className="py-12 bg-[#020617] border-t border-white/5 flex flex-col items-center">
          <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
            Muhammed Shameem © 2026 / Build_v2.4.0
          </p>
        </footer>
      </div>
    </main>
  );
}
