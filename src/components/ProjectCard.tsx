import React from 'react';
import { ExternalLink, FolderCode } from 'lucide-react';
import type { Project } from '../data/info';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative bg-gradient-to-b from-[#1e293b] to-[#161e2c] p-10 rounded-[2.5rem] border border-slate-700/50 hover:border-emerald-500/40 hover:translate-y-[-8px] transition-all duration-500 flex flex-col h-full shadow-2xl overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/5 blur-[80px] group-hover:bg-emerald-500/10 transition-colors" />

      <div className="flex justify-between items-center mb-8">
        <div className="p-4 bg-slate-800/80 rounded-2xl text-emerald-400 border border-slate-700 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-500">
          <FolderCode size={28} />
        </div>
        <div className="flex gap-4">
           <ExternalLink size={20} className="text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-emerald-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-400 text-[15px] leading-relaxed mb-8 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-700/30">
        {project.tech.map((t) => (
          <span key={t} className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800 group-hover:border-slate-700 group-hover:text-slate-200 transition-all">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;