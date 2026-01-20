import React from 'react';
import { Terminal, Linkedin, FileDown } from 'lucide-react'; // Added FileDown icon
import { profileData } from '../data/info';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#0f172a]/80 backdrop-blur-xl z-50 border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-black text-xl text-white tracking-tighter">
          <div className="bg-emerald-500 p-1.5 rounded-lg text-slate-900">
            <Terminal size={20} />
          </div>
          <span>SHIVA<span className="text-emerald-400">.</span>PRASAD</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-widest text-slate-400">
          <a href="#about" className="hover:text-emerald-400 transition">About</a>
          <a href="#education" className="hover:text-emerald-400 transition">Education</a>
          <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
          
          <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#0077B5] transition">
            <Linkedin size={18} />
          </a>

          {/* New Download CV Button */}
          <a 
            href="/Shiva_Prasad_Resume.pdf" 
            download="Shiva_Prasad_Resume.pdf"
            className="flex items-center gap-2 bg-emerald-500 text-slate-900 px-6 py-2.5 rounded-full hover:bg-emerald-400 transition-all font-bold uppercase text-[10px]"
          >
            <FileDown size={14} />
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;