import { useState } from "react";
import { motion } from "motion/react";
import {
  Gamepad2,
  Download,
  MonitorPlay,
  Handshake,
  Scale,
  Eye,
  MessageSquare,
  Youtube,
  Twitter,
  Instagram,
  Copy
} from "lucide-react";

export default function App() {
  const [playNowClicked, setPlayNowClicked] = useState(false);

  const handlePlayNowClick = () => {
    navigator.clipboard.writeText("play.elysianrp.com");
    setPlayNowClicked(true);
    setTimeout(() => setPlayNowClicked(false), 500);
  };

  return (
    <div className="min-h-screen bg-slate-light font-sans text-slate-dark selection:bg-electric selection:text-white bg-grain">

      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-50 w-full pt-0 pb-4 px-8 md:px-16 flex items-center justify-between bg-transparent absolute top-0"
      >
        <div className="flex items-center justify-center">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full ring-4 ring-white/50 drop-shadow-md transform -skew-x-12 object-cover" />
        </div>
        <div className="hidden md:flex space-x-10 font-bold text-[0.7rem] tracking-[0.15em] uppercase text-slate-600">
          <a href="#about" className="hover:text-[#4a8ff6] transition-colors">Home</a>
          <a href="https://gta5elisionroleplay.com/forums/forums/server-rules.36/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4a8ff6] transition-colors">Rules</a>
          <a href="https://forum.gta5elision.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4a8ff6] transition-colors">Forums</a>
          <a href="#connect" className="hover:text-[#4a8ff6] transition-colors">Connect</a>
        </div>
        <button onClick={handlePlayNowClick} className={`bg-[#4a8ff6] text-white font-bold py-3 px-8 rounded-md text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20 ${playNowClicked ? 'animate-pulse' : ''}`}>
          <div className="w-4 h-4 bg-white text-[#4a8ff6] rounded-full flex items-center justify-center pl-[1px]">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
          PLAY NOW
        </button>
      </motion.nav>

      {/* Hero Section */}
      <section id="about" className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-16 lg:px-32 bg-[#ebf0f4] overflow-hidden -mt-[104px] pt-[104px]">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-multiply" style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Left Content */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start pt-12 lg:pt-0 pb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 font-bold text-xs tracking-[0.3em] uppercase mb-4 pl-1"
          >
            Welcome To
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-8xl lg:text-[7.5rem] text-[#1e2329] uppercase mb-6 leading-[1.1] brush-text drop-shadow-sm whitespace-nowrap" 
          >
            Los Santos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-slate-500 text-sm max-w-[280px] font-medium leading-[1.8] mb-10 pl-1"
          >
            Where every choice matters. Build your empire, forge your legacy.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pl-1"
          >
            <button onClick={() => document.getElementById('roles').scrollIntoView({ behavior: 'smooth' })} className="bg-[#4a8ff6] hover:bg-blue-600 text-white text-[0.7rem] font-bold py-3.5 px-8 uppercase tracking-widest rounded-md shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1">
              Start Your Journey
            </button>
            <button className="bg-transparent border border-blue-200/60 text-[#4a8ff6] hover:border-[#4a8ff6] hover:bg-blue-50/50 text-[0.7rem] font-bold py-3.5 px-8 uppercase tracking-widest rounded-md transition-all hover:-translate-y-1">
              Join Discord
            </button>
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="relative z-10 w-full lg:w-1/2 h-[50vh] lg:h-[90vh] flex justify-center lg:justify-end items-end pt-12"
        >
          {/* We'll use a cutout image and mask to blend the bottom */}
          <img
            src="/Img/female_main.png"
            alt="GTA Character Concept"
            className="max-h-[110%] w-auto object-contain filter drop-shadow-2xl z-20 mix-blend-multiply"
            style={{
              WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 25%)',
              maskImage: 'linear-gradient(to top, transparent 5%, black 25%)'
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Character Roles Section */}
      <section id="roles" className="py-20 px-8 md:px-16 bg-[#ebf0f4] relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <div className="w-10 h-[2px] bg-blue-500/40 mb-8"></div>
          <h2 className="text-[1.1rem] md:text-[1.3rem] font-medium font-sans text-slate-500 uppercase tracking-[0.25em] leading-[1.8] max-w-3xl">
            Select your character's background<br/>
            and rise through the ranks of Los<br/>
            Santos
          </h2>
          <div className="w-10 h-[2px] bg-blue-500/40 mt-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-[1400px] mx-auto">
          {[
            {
              title: "Law Enforcement Officer",
              desc: "Enforce justice on the streets of Los Santos. Join the LSPD or BCSO and maintain order in a city that never sleeps.",
              img: "/Img/person_1.png",
              stats: [["Authority", "HIGH"], ["Risk", "MEDIUM"], ["Respect", "HIGH"]]
            },
            {
              title: "Street Gangster",
              desc: "Rule the streets with fear and respect. Build your empire through loyalty, territory control, and street wisdom.",
              img: "/Img/person_2.png",
              stats: [["Power", "HIGH"], ["Risk", "HIGH"], ["Loyalty", "CRITICAL"]]
            },
            {
              title: "Business Owner",
              desc: "Dominate the legitimate and illegitimate markets. From nightclubs to chop shops, build wealth through smart business.",
              img: "/Img/person_3.png",
              stats: [["Wealth", "HIGH"], ["Risk", "MEDIUM"], ["Influence", "HIGH"]]
            },
            {
              title: "Family Member",
              desc: "Blood is thicker than water. Join the old-school mafia families and honor the codes that have stood for generations.",
              img: "/Img/person_4.png",
              stats: [["Legacy", "HIGH"], ["Risk", "HIGH"], ["Honor", "CRITICAL"]]
            }
          ].map((role, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={i} 
              className="bg-white rounded-xl p-6 md:p-8 flex flex-col group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(59,130,246,0.15)] transition-all duration-500 ease-out border border-transparent hover:border-blue-200 transform hover:-translate-y-3 hover:scale-[1.03] hover:z-10 relative"
            >
              <div className="w-full aspect-square mb-6 overflow-hidden rounded-lg bg-gray-50 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 rounded-lg pointer-events-none mix-blend-overlay"></div>
                <img
                  src={role.img}
                  alt={role.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-[1.35rem] md:text-2xl font-black font-heading uppercase tracking-wide text-slate-800 mb-4 pr-2 leading-[1.1]">{role.title}</h3>
              <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed font-medium">{role.desc}</p>
              
              <div className="flex flex-col gap-3 pt-5 relative">
                {/* Custom top border to match the clean vibe */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gray-100 via-gray-200 to-transparent"></div>
                {role.stats.map((stat, j) => (
                  <div key={j} className="flex justify-between items-center text-[13px]">
                    <span className="text-slate-400 font-semibold">{stat[0]}</span>
                    <span className={`font-black uppercase tracking-wider ${stat[1] === 'CRITICAL' ? 'text-[#2563eb]' : 'text-[#3b82f6]'}`}>
                      {stat[1]}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How to Start */}
      <section id="start" className="py-32 px-8 md:px-16 bg-slate-dark text-white relative overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black font-heading uppercase tracking-tighter mb-6 text-white">How To <span className="text-electric">Start</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">Follow these three simple steps to join the city and start your journey.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pl-4 pr-4 md:pl-10">
            {[
              { icon: <MonitorPlay size={32} />, title: "1. Have GTA V", desc: "A legitimate copy of Grand Theft Auto V is required. Steam or Epic Games versions both work perfectly.", btn: "Get on Steam" },
              { icon: <Download size={32} />, title: <>2. Download <a href="https://rage.mp/" target="_blank" rel="noopener noreferrer" className="underline">RageMp</a></>, desc: "Install the RageMp client to connect to modded servers. It won't affect your native GTA Online files.", btn: "Download Client" },
              { icon: <Gamepad2 size={36} />, title: "3. Connect & Play", desc: "Search for 'Los Santos RP' in the server browser or connect directly through our portal.", btn: "Copy IP" },
            ].map((step, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                key={i} 
                className="slanted-wrapper bg-white/5 backdrop-blur-md text-white h-full min-h-[340px] sharp-card border border-white/10 hover:bg-white/10 hover:border-electric/50 hover:shadow-[12px_12px_0px_rgba(0,229,255,0.15),0_30px_60px_rgba(0,229,255,0.2)] group hover:scale-[1.03] hover:-translate-y-3 transition-all duration-500 ease-out z-10 hover:z-20"
              >
                <div className="unskew-content h-full p-8 md:p-12 flex flex-col items-start relative overflow-hidden">
                  {/* Faint Big Number Background */}
                  <div className="absolute -bottom-8 -right-4 text-[160px] font-black text-white/5 font-heading leading-none select-none z-0 group-hover:text-electric/10 transition-colors duration-500">
                    0{i+1}
                  </div>
                  
                  <div className="w-16 h-16 bg-electric/10 border border-electric/20 rounded-sm flex items-center justify-center text-electric mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-heading uppercase tracking-wider mb-4 relative z-10 group-hover:text-electric transition-colors">{step.title}</h3>
                  <p className="text-gray-400 text-sm mb-12 flex-grow relative z-10 leading-relaxed font-light">{step.desc}</p>
                  
                  {step.btn === "Get on Steam" ?
                    <a href="https://store.steampowered.com/app/3240220/Grand_Theft_Auto_V_Enhanced/" target="_blank" rel="noopener noreferrer" className="relative z-10 border-b-2 border-electric/50 pb-1 text-sm font-bold uppercase tracking-[0.2em] text-white hover:text-electric hover:border-electric transition-all focus:outline-none">
                      {step.btn}
                    </a>
                  : step.btn === "Download Client" ?
                    <a href="https://rage.mp/" target="_blank" rel="noopener noreferrer" className="relative z-10 border-b-2 border-electric/50 pb-1 text-sm font-bold uppercase tracking-[0.2em] text-white hover:text-electric hover:border-electric transition-all focus:outline-none">
                      {step.btn}
                    </a>
                  : step.btn === "Copy IP" ?
                    <button onClick={() => navigator.clipboard.writeText("play.elysianrp.com")} className="relative z-10 border-b-2 border-electric/50 pb-1 text-sm font-bold uppercase tracking-[0.2em] text-white hover:text-electric hover:border-electric transition-all focus:outline-none">
                      {step.btn}
                    </button>
                  :
                  <button className="relative z-10 border-b-2 border-electric/50 pb-1 text-sm font-bold uppercase tracking-[0.2em] text-white hover:text-electric hover:border-electric transition-all focus:outline-none">
                    {step.btn}
                  </button>
                  }
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section id="rules" className="py-32 px-8 md:px-16 bg-slate-light">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-black font-heading uppercase tracking-tighter mb-6">Code of <span className="text-electric">Conduct</span></h2>
              <div className="w-32 h-1.5 bg-electric mb-6 md:mb-0"></div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-6">
              <p className="text-gray-500 max-w-md md:text-right font-medium text-lg leading-relaxed">
                We enforce strict roleplay rules to ensure a high-quality experience for everyone.
              </p>
              <a href="#" className="flex items-center gap-2 text-electric font-bold uppercase tracking-widest text-sm hover:text-slate-800 transition-colors group">
                <span className="border-b-2 border-electric group-hover:border-slate-800 transition-colors pb-0.5">Read Full Rulebook</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Handshake size={48} strokeWidth={1} />, title: "Respect Community", desc: "Toxicity, hate speech, or harassment will result in an immediate permanent ban. Keep conflicts in-character.", color: "text-electric" },
              { icon: <Scale size={48} strokeWidth={1} />, title: "Value Your Life", desc: "Your character must fear death. If you are held at gunpoint completely disadvantaged, you must comply.", color: "text-electric" },
              { icon: <Eye size={48} strokeWidth={1} />, title: "No Metagaming", desc: "Using outside information (like Twitch streams or Discord) to benefit your character in-game is forbidden.", color: "text-electric" }
            ].map((rule, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                key={i} 
                className="bg-white p-12 sharp-card border border-gray-100 hover:border-electric/30 hover:shadow-[12px_12px_0px_rgba(0,229,255,0.1),0_30px_60px_rgba(0,229,255,0.15)] aspect-square flex flex-col justify-center group transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-3 relative z-10 hover:z-20"
              >
                <div className={`mb-10 ${rule.color} group-hover:scale-110 transition-transform duration-500 ease-out`}>
                  {rule.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading uppercase tracking-wide mb-4">{rule.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium">{rule.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Footer */}
      <footer className="bg-white pt-32 pb-12 px-8 md:px-16 border-t border-gray-100 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent pt-[1px]"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* Discord Card */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="https://discord.com/invite/XXR9EUjr"
            target="_blank"
            rel="noopener noreferrer"
            className="sharp-card p-10 flex items-center justify-between group bg-[#5865F2]/[0.03] hover:bg-[#5865F2] border border-[#5865F2]/10 hover:shadow-[12px_12px_0px_rgba(88,101,242,0.15),0_30px_60px_rgba(88,101,242,0.4)] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-3 relative z-10 hover:z-20"
          >
             <div>
               <p className="text-[#5865F2] group-hover:text-white font-bold text-xs tracking-[0.2em] uppercase mb-2 transition-colors">Join the</p>
               <h3 className="text-slate-dark group-hover:text-white text-4xl font-heading font-black uppercase transition-colors">Discord</h3>
             </div>
             {/* Simple custom Discord icon path */}
             <svg width="56" height="56" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#5865F2] group-hover:text-white transition-all group-hover:scale-110 group-hover:-rotate-12 duration-500 ease-out origin-center">
                <path d="M107.75 25.4938C99.715 21.8415 91.1396 19.1672 82.1643 17.5147C81.9366 17.4729 81.7162 17.6083 81.6062 17.818C80.5053 19.8006 79.284 22.3732 78.4328 24.4449C68.9103 23.0135 59.4674 23.0135 50.0549 24.4449C49.1932 22.2885 47.9402 19.8006 46.8288 17.818C46.7209 17.6105 46.4984 17.4751 46.2685 17.5147C37.2933 19.1672 28.7178 21.8415 20.6828 25.4938C20.6481 25.5103 20.6179 25.5327 20.5922 25.5601C4.30596 50.1555 -1.33923 74.1205 0.281861 97.7954C0.288001 97.893 0.334138 97.9855 0.408796 98.0416C11.1963 106.014 21.6508 110.871 31.9056 114.07C32.148 114.145 32.4069 114.054 32.553 113.86C34.966 110.536 37.1425 107.03 39.0494 103.388C39.206 103.088 39.0519 102.723 38.7369 102.604C35.2974 101.288 32.0163 99.7188 28.8924 97.9174C28.5363 97.7126 28.508 97.2023 28.8358 96.9535C29.5441 96.4173 30.2505 95.8643 30.9238 95.3013C31.0967 95.1568 31.3364 95.1279 31.5397 95.2198C52.4777 104.839 74.8876 104.839 95.5342 95.2198C95.7386 95.126 95.9793 95.1558 96.1522 95.3013C96.8255 95.8643 97.5319 96.4173 98.2403 96.9535C98.5714 97.2033 98.541 97.7126 98.1849 97.9174C95.0504 99.7288 91.7693 101.288 88.3298 102.604C88.0127 102.722 87.8596 103.09 88.0183 103.388C89.9323 107.03 92.1109 110.536 94.5126 113.86C94.6587 114.054 94.9176 114.145 95.1599 114.07C105.425 110.871 115.88 106.014 126.667 98.0416C126.743 97.9845 126.789 97.892 126.795 97.7954C128.714 70.3644 120.354 46.5492 107.75 25.4938ZM42.548 79.4795C35.2974 79.4795 29.3146 72.8465 29.3146 64.717C29.3146 56.5875 35.1517 49.9545 42.548 49.9545C49.9863 49.9545 55.8655 56.6304 55.7194 64.717C55.7194 72.8465 49.9443 79.4795 42.548 79.4795ZM84.6203 79.4795C77.3697 79.4795 71.3869 72.8465 71.3869 64.717C71.3869 56.5875 77.224 49.9545 84.6203 49.9545C92.0586 49.9545 97.9378 56.6304 97.7917 64.717C97.7917 72.8465 92.0166 79.4795 84.6203 79.4795Z" fill="currentColor"/>
             </svg>
          </motion.a>

          {/* Forums Card */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href="https://forum.gta5elision.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="sharp-card p-10 flex items-center justify-between group bg-blue-50/30 hover:bg-[#00E5FF] border border-blue-100 hover:shadow-[12px_12px_0px_rgba(0,229,255,0.15),0_30px_60px_rgba(0,229,255,0.4)] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-3 relative z-10 hover:z-20"
          >
             <div>
               <p className="text-blue-500 group-hover:text-slate-dark font-bold text-xs tracking-[0.2em] uppercase mb-2 transition-colors">Discuss on</p>
               <h3 className="text-slate-dark text-4xl font-heading font-black uppercase transition-colors">Forums</h3>
             </div>
             <MessageSquare size={56} className="text-blue-500 group-hover:text-slate-dark transition-all group-hover:scale-110 group-hover:rotate-12 duration-500 ease-out origin-center" strokeWidth={1.5} />
          </motion.a>

          {/* YouTube Card */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sharp-card p-10 flex items-center justify-between group bg-[#FF0000]/[0.03] hover:bg-[#FF0000] border border-[#FF0000]/10 hover:shadow-[12px_12px_0px_rgba(255,0,0,0.15),0_30px_60px_rgba(255,0,0,0.4)] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-3 relative z-10 hover:z-20"
          >
             <div>
               <p className="text-[#FF0000] group-hover:text-white font-bold text-xs tracking-[0.2em] uppercase mb-2 transition-colors">Watch on</p>
               <h3 className="text-slate-dark group-hover:text-white text-4xl font-heading font-black uppercase transition-colors">YouTube</h3>
             </div>
             <Youtube size={64} className="text-[#FF0000] group-hover:text-white transition-all group-hover:scale-110 group-hover:-rotate-12 duration-500 ease-out origin-center" strokeWidth={1.5} />
          </motion.a>

        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-[0.15em]">
          <p>&copy; {new Date().getFullYear()} Elision Roleplay. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-electric transition-colors">Privacy</a>
            <a href="#" className="hover:text-electric transition-colors">Terms</a>
            <a href="#" className="hover:text-electric transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
