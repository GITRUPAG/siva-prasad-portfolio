import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { profileData } from './data/info';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Linkedin, 
  Layout, 
  Database,
  Check
} from 'lucide-react';

/**
 * Sub-component: EmailFlipCard
 * Features: 3D Flip effect on hover & Click-to-copy functionality
 */
const EmailFlipCard = () => {
  const [copied, setCopied] = useState(false);
  const email = "Shivaprasadmanchala777@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    /* Increased width to w-80 to fit the long email address */
    <div 
      className="group perspective-1000 w-80 h-10 cursor-pointer"
      onClick={handleCopy}
    >
      <div className={`relative w-full h-full transition-all duration-500 preserve-3d group-hover:[transform:rotateX(180deg)]`}>
        
        {/* Front Side: Label */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 text-slate-500 font-bold text-sm uppercase tracking-widest backface-hidden">
          <Mail size={18} className="text-emerald-500/50"/> 
          <span>Email Me</span>
        </div>

        {/* Back Side: The Actual Email */}
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-500 text-slate-900 rounded-full text-[11px] font-black px-4 [transform:rotateX(180deg)] backface-hidden shadow-[0_0_20px_rgba(16,185,129,0.4)]">
          {copied ? (
            <span className="flex items-center gap-1 uppercase tracking-tighter"><Check size={14}/> Copied to Clipboard!</span>
          ) : (
            <span className="whitespace-nowrap">{email}</span>
          )}
        </div>
        
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] font-sans text-slate-200 selection:bg-emerald-500/30">
      {/* Dynamic Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[30%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <header id="about" className="pt-44 pb-24 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
          <Sparkles size={14} /> Available for Java Full Stack Roles
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{profileData.name}</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
          Specializing in <span className="text-white font-semibold">Java Full Stack Development</span>. 
          Building high-performance <span className="text-white font-semibold">Spring Boot</span> backends 
          and modern <span className="text-white font-semibold">React</span> frontends with precision.
        </p>
        
        {/* Contact Strip */}
        <div className="flex flex-wrap justify-center gap-8 text-slate-500 font-bold text-sm uppercase tracking-widest items-center">
          <span className="flex items-center gap-2"><MapPin size={18} className="text-emerald-500/50"/> {profileData.location}</span>
          <a href={`tel:${profileData.phone}`} className="flex items-center gap-2 hover:text-emerald-400 transition"><Phone size={18}/> {profileData.phone}</a>
          
          <EmailFlipCard />

          <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#0077B5] transition border-l border-slate-800 pl-8">
            <Linkedin size={18}/> LinkedIn
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-32 pb-32">
        
        {/* Experience & Tech Stack Section */}
        <section className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 space-y-8 flex flex-col">
            <h2 className="text-3xl font-black text-white flex items-center gap-3">
              <Briefcase className="text-emerald-400" size={28}/> Experience
            </h2>
            <div className="flex-grow bg-[#1e293b]/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-slate-700/50 shadow-2xl flex flex-col justify-center">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{profileData.internship.role}</h3>
                  <p className="text-emerald-400 font-bold text-lg mt-1">{profileData.internship.company}</p>
                </div>
                <span className="text-[11px] font-black text-emerald-400 border border-emerald-500/30 px-5 py-2 rounded-xl bg-emerald-500/10 uppercase tracking-widest">
                  {profileData.internship.period}
                </span>
              </div>
              <ul className="space-y-5">
                {profileData.internship.points.map((p, i) => (
                  <li key={i} className="flex gap-5 text-slate-300 text-[16px] leading-relaxed">
                    <span className="mt-2.5 h-2 w-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.8)]" /> 
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <h2 className="text-3xl font-black text-white flex items-center gap-3">
              <Database className="text-emerald-400" size={28}/> Tech Stack
            </h2>
            <div className="flex-grow bg-[#1e293b]/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-slate-700/50 space-y-10 shadow-2xl flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-5">Backend & Logic</p>
                <div className="flex flex-wrap gap-2.5">
                  {[...profileData.skills.languages, ...profileData.skills.backend].map(s => (
                    <span key={s} className="px-4 py-2 bg-slate-800/80 text-slate-200 rounded-xl text-xs font-bold border border-slate-700 hover:border-emerald-500/50 transition-colors">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-5">Frontend</p>
                <div className="flex flex-wrap gap-2.5">
                  {profileData.skills.frontend.map(s => (
                    <span key={s} className="px-4 py-2 bg-emerald-500/5 text-emerald-400 rounded-xl text-xs font-bold border border-emerald-500/20">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-5">Database & Tools</p>
                <div className="flex flex-wrap gap-2.5">
                  {[...profileData.skills.database, ...profileData.skills.tools].map(s => (
                    <span key={s} className="px-4 py-2 bg-blue-500/5 text-blue-400 rounded-xl text-xs font-bold border border-blue-500/20">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <h2 className="text-4xl font-black text-white flex items-center gap-3">
            <Layout className="text-emerald-400" size={32}/> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {profileData.projects.map((proj, index) => (
              <ProjectCard key={index} project={proj} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-12">
          <h2 className="text-4xl font-black text-white flex items-center gap-3">
            <GraduationCap className="text-emerald-400" size={32}/> Academic Background
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {profileData.education.map((edu, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-[#1e293b]/40 border border-slate-700/50 hover:border-emerald-500/30 transition-all group shadow-xl">
                <p className="text-emerald-500 font-black text-[11px] tracking-[0.2em] mb-4 uppercase">{edu.year}</p>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-tight">{edu.degree}</h3>
                <p className="text-slate-500 text-sm font-semibold mb-6">{edu.institution}</p>
                {edu.score && (
                  <span className="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-xl text-[11px] font-black border border-emerald-500/20">
                    {edu.score}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-24 border-t border-slate-800/50 text-center bg-[#0a1120]">
        <p className="text-slate-400 text-sm">
          © 2026 {profileData.name} • Java Full Stack Developer
        </p>
      </footer>
    </div>
  );
};

export default App;