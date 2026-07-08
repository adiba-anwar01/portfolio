import { useRef } from 'react';
import { useInView } from 'framer-motion';


function GlassMonitor3D({ width, height, thickness = 10, className = "", style = {}, children }) {
  const T = thickness;
  
  return (
    <div
      style={{
        width,
        height,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      className={`relative ${className}`}
    >
      {}
      <div
        style={{
          transform: `translate3d(0px, 0px, ${T / 2}px)`,
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-0 rounded-2xl border border-white/[0.15] bg-gradient-to-br from-slate-900/95 to-slate-950/98 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_0_10px_rgba(129,140,248,0.12)] overflow-hidden"
      >
        {children}
      </div>

      
      <div
        style={{
          transform: `translate3d(0px, 0px, -${T / 2}px) rotateY(180deg)`,
        }}
        className="absolute inset-[12px] rounded-xl border border-white/[0.03] bg-slate-950/80"
      />

      
      <div
        style={{
          width: `${T}px`,
          left: `-${T / 2}px`,
          transform: 'rotateY(-90deg)',
        }}
        className="absolute top-[12px] bottom-[12px] bg-gradient-to-b from-slate-950/90 to-slate-950/95 border-l border-white/5 rounded-full"
      />

      
      <div
        style={{
          width: `${T}px`,
          right: `-${T / 2}px`,
          transform: 'rotateY(90deg)',
        }}
        className="absolute top-[12px] bottom-[12px] bg-gradient-to-b from-slate-950/90 to-slate-950/95 border-r border-white/5 rounded-full"
      />

      
      <div
        style={{
          height: `${T}px`,
          top: `-${T / 2}px`,
          transform: 'rotateX(90deg)',
        }}
        className="absolute left-[12px] right-[12px] bg-gradient-to-r from-slate-950/90 to-slate-950/95 border-t border-white/5 rounded-full"
      />

      
      <div
        style={{
          height: `${T}px`,
          bottom: `-${T / 2}px`,
          transform: 'rotateX(-90deg)',
        }}
        className="absolute left-[12px] right-[12px] bg-gradient-to-r from-slate-950/90 to-slate-950/95 border-b border-white/5 rounded-full"
      />
    </div>
  );
}

export default function HolographicWorkspace() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px 0px" });

  const handleMouseEnter = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty('--mx', -0.5);
    containerRef.current.style.setProperty('--my', 0);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty('--mx', 0);
    containerRef.current.style.setProperty('--my', 0);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-[450px] md:h-[550px] flex items-center justify-center cursor-default select-none perspective-container z-20 ${!isInView ? 'pause-animations' : ''}`}
      style={{ perspective: '1800px' }}
    >
      
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
        <div className="absolute w-[320px] h-[320px] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.08)_0%,transparent_65%)] -translate-x-12 -translate-y-8" />
        <div className="absolute w-[340px] h-[340px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_65%)] translate-x-16 translate-y-12" />
      </div>

      
      <div
        style={{
          transform: 'rotateX(calc(15deg + var(--my, 0) * -10deg)) rotateY(calc(-20deg + var(--mx, 0) * 12deg))',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
          willChange: 'transform',
        }}
        className="relative w-[380px] h-[380px] md:w-[440px] md:h-[440px] flex items-center justify-center z-10 scale-[0.8] xs:scale-[0.85] sm:scale-95 md:scale-100"
      >
        
        
        <div
          className="absolute w-[360px] h-[240px] pointer-events-none"
          style={{
            transform: 'rotateX(78deg) translate3d(0px, 120px, -130px)',
            transformStyle: 'preserve-3d',
          }}
        >
          
          <div
            className="absolute inset-0 border border-white/5 rounded-[40px] shadow-[inset_0_0_30px_rgba(99,102,241,0.12)]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
              backgroundSize: '16px 16px',
              maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 30%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 30%, transparent 100%)',
            }}
          />

          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[180px] h-[180px] border border-indigo-500/10 rounded-full animate-[ping_5s_ease-in-out_infinite]" />
            <div className="w-[110px] h-[110px] border border-blue-500/20 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.15)]" />
            <div className="w-[50px] h-[50px] bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 border border-indigo-400/40 rounded-full shadow-[0_0_30px_rgba(99,102,241,0.35)] flex items-center justify-center">
              
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_#60A5FA] animate-pulse" />
            </div>
          </div>
        </div>



        
        <div className="absolute animate-float-2" style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
          <div
            style={{
              transform: 'translate3d(calc(160px + var(--mx, 0) * -22px), calc(-110px + var(--my, 0) * -22px), 60px) rotateY(-15deg)',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
              willChange: 'transform',
            }}
          >
            <GlassMonitor3D
              width="120px"
              height="80px"
              thickness={6}
              className="shadow-[0_0_20px_rgba(99,102,241,0.06)]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                <div
                  className="absolute -inset-x-[100%] top-0 bottom-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent project-glass-sweep"
                  style={{ transform: 'skewX(-20deg)' }}
                />
              </div>

              <div className="p-2.5 flex flex-col justify-between h-full">
                <div className="flex justify-between items-center border-b border-white/[0.05] pb-1">
                  <span className="font-mono text-[7px] text-white/30 uppercase tracking-widest">Compiler</span>
                  <div className="w-1 h-1 rounded-full bg-emerald-500/50 shadow-[0_0_4px_#10B981]" />
                </div>
                <div className="flex items-center justify-between flex-1 py-1">
                  <span className="font-mono text-2xl font-light bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">
                    {'{ }'}
                  </span>
                  <div className="flex flex-col gap-1">
                    <div className="h-1 w-8 bg-white/10 rounded-full" />
                    <div className="h-1 w-6 bg-white/5 rounded-full" />
                  </div>
                </div>
              </div>
            </GlassMonitor3D>
          </div>
        </div>

        
        <div className="absolute z-20 animate-float-3" style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
          <div
            style={{
              transform: 'translate3d(calc(-20px + var(--mx, 0) * -12px), calc(-10px + var(--my, 0) * -12px), 80px) rotateY(-18deg)',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
              willChange: 'transform',
            }}
          >
            <GlassMonitor3D
              width="340px"
              height="240px"
              thickness={15}
              className="shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_40px_rgba(99,102,241,0.15)]"
            >
              
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-20">
                <div
                  className="absolute -inset-x-[100%] top-0 bottom-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent project-glass-sweep"
                  style={{ transform: 'skewX(-25deg)' }}
                />
              </div>

              
              <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none shadow-[0_0_35px_rgba(129,140,248,0.15)]" />

              
              <div className="w-full h-full p-2.5 bg-slate-950/80 flex flex-col justify-between">
                
                
                <div className="w-full h-full rounded-xl border border-white/[0.05] bg-[#0E0F14]/70 flex overflow-hidden">
                  
                  
                  <div className="w-10 h-full border-r border-white/[0.05] bg-white/[0.01] flex flex-col items-center justify-between py-3">
                    <div className="flex flex-col gap-3 text-white/30">
                      
                      <svg className="w-3 h-3 hover:text-indigo-400 transition-colors duration-200 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      
                      <svg className="w-3 h-3 hover:text-indigo-400 transition-colors duration-200 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                      
                      <svg className="w-3 h-3 hover:text-indigo-400 transition-colors duration-200 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polyline points="4 17 10 11 4 5" />
                        <line x1="12" y1="19" x2="20" y2="19" />
                      </svg>
                      
                      <svg className="w-3 h-3 hover:text-indigo-400 transition-colors duration-200 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                      </svg>
                    </div>
                    
                    <svg className="w-3 h-3 text-white/20 hover:text-indigo-400 transition-colors duration-200 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>

                  
                  <div className="flex-1 flex flex-col justify-between p-2">
                    
                    
                    <div className="flex items-center justify-between border-b border-white/[0.04] pb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.8)] animate-pulse" />
                        <span className="font-mono text-[7px] font-semibold text-white/40 tracking-[0.2em] uppercase">Adiba</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                      </div>
                    </div>

                    
                    <div className="flex-1 flex items-center justify-center relative my-0.5">
                      
                      <div className="absolute inset-0 opacity-15 flex items-center justify-center">
                        <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3">
                          <circle cx="50" cy="50" r="32" strokeDasharray="2 3" />
                          <circle cx="50" cy="50" r="20" />
                          <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="1 3" />
                          <line x1="10" y1="50" x2="90" y2="50" strokeDasharray="1 3" />
                        </svg>
                      </div>

                      
                      <svg
                        className="w-10 h-10 relative z-10 filter drop-shadow-[0_0_10px_rgba(129,140,248,0.3)]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="url(#main-glow-grad-3)"
                        strokeWidth="1.5"
                      >
                        <defs>
                          <linearGradient id="main-glow-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#818CF8" />
                            <stop offset="50%" stopColor="#F97316" />
                            <stop offset="100%" stopColor="#FB923C" />
                          </linearGradient>
                        </defs>
                        <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="14" y1="4" x2="10" y2="20" strokeLinecap="round" />
                      </svg>
                    </div>

                    
                    <div className="grid grid-cols-3 gap-1.5 pt-1.5 border-t border-white/[0.04]">
                      
                      <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-1 flex flex-col justify-between">
                        <span className="text-[5px] tracking-wider text-white/30 uppercase font-semibold">Tech Stack</span>
                        <div className="flex gap-1 items-center my-0.5">
                          <svg className="w-2 h-2 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="2" fill="currentColor" />
                            <ellipse rx="8" ry="3" cx="12" cy="12" transform="rotate(0 12 12)" />
                            <ellipse rx="8" ry="3" cx="12" cy="12" transform="rotate(60 12 12)" />
                            <ellipse rx="8" ry="3" cx="12" cy="12" transform="rotate(120 12 12)" />
                          </svg>
                          <span className="font-mono text-[6px] font-extrabold text-orange-400/90 leading-none">JS</span>
                          <span className="font-mono text-[6px] font-extrabold text-indigo-400/90 leading-none">C#</span>
                        </div>
                        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 w-[75%]" />
                        </div>
                      </div>

                      
                      <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-1 flex flex-col justify-between">
                        <span className="text-[5px] tracking-wider text-white/30 uppercase font-semibold">System Status</span>
                        <div className="h-2.5 my-0.5 flex items-center justify-center">
                          <svg className="w-full h-full text-emerald-500" viewBox="0 0 100 30" fill="none">
                            <path
                              d="M0 15 h30 l3 -8 l4 18 l3 -14 l3 4 h27"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="animate-dash-flow"
                            />
                          </svg>
                        </div>
                        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-[60%] animate-pulse" />
                        </div>
                      </div>

                      
                      <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-1 flex flex-col justify-between">
                        <span className="text-[5px] tracking-wider text-white/30 uppercase font-semibold">Connection</span>
                        <div className="h-2.5 my-0.5">
                          <svg className="w-full h-full text-blue-400" viewBox="0 0 100 30" fill="none">
                            <path d="M5 20 L25 10 L50 22 L75 8 L95 20" stroke="currentColor" strokeWidth="1" />
                            <circle cx="5" cy="20" r="1.5" className="fill-blue-400" />
                            <circle cx="25" cy="10" r="1.5" className="fill-indigo-400" />
                            <circle cx="50" cy="22" r="1.5" className="fill-blue-500 animate-pulse" />
                            <circle cx="75" cy="8" r="1.5" className="fill-indigo-500" />
                            <circle cx="95" cy="20" r="1.5" className="fill-blue-400" />
                          </svg>
                        </div>
                        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[85%]" />
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </GlassMonitor3D>
          </div>
        </div>

        
        <div className="absolute animate-float-4" style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
          <div
            style={{
              transform: 'translate3d(calc(140px + var(--mx, 0) * -22px), calc(100px + var(--my, 0) * -22px), 110px) rotateY(-20deg)',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
              willChange: 'transform',
            }}
          >
            <GlassMonitor3D
              width="110px"
              height="95px"
              thickness={6}
              className="shadow-[0_0_20px_rgba(249,115,22,0.06)]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                <div
                  className="absolute -inset-x-[100%] top-0 bottom-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent project-glass-sweep"
                  style={{ transform: 'skewX(-20deg)' }}
                />
              </div>

              <div className="p-2 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between border-b border-white/[0.05] pb-1">
                  <div className="flex gap-0.5">
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="w-1 h-1 rounded-full bg-white/10" />
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50 shadow-[0_0_5px_rgba(249,115,22,0.5)] animate-pulse" />
                </div>
                <div className="flex gap-2 items-center flex-1 py-1">
                  <svg className="w-7 h-7 text-orange-400/50 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="18" cy="18" r="2.5" className="fill-orange-400/20" />
                    <circle cx="6" cy="6" r="2.5" className="fill-white/10" />
                    <circle cx="6" cy="18" r="2.5" className="fill-white/10" />
                    <path d="M18 15.5V9a4 4 0 0 0-4-4H8.5" strokeLinecap="round" />
                    <line x1="6" y1="8.5" x2="6" y2="15.5" strokeLinecap="round" />
                  </svg>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <div className="h-1 w-full bg-white/20 rounded-full" />
                    <div className="h-1 w-[70%] bg-orange-400/30 rounded-full" />
                  </div>
                </div>
              </div>
            </GlassMonitor3D>
          </div>
        </div>

        
        <div className="absolute animate-float-5" style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
          <div
            style={{
              transform: 'translate3d(calc(-140px + var(--mx, 0) * -22px), calc(80px + var(--my, 0) * -22px), 100px) rotateY(-15deg)',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
              willChange: 'transform',
            }}
          >
            <GlassMonitor3D
              width="80px"
              height="65px"
              thickness={6}
              className="shadow-[0_0_15px_rgba(99,102,241,0.04)]"
            >
              <div className="p-2 flex flex-col justify-between h-full">
                <div className="flex justify-between items-center">
                  <svg className="w-3 h-3 text-indigo-400/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="w-1 h-1 rounded-full bg-indigo-400/40" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="h-1 w-10 bg-white/15 rounded-full" />
                  <div className="h-1 w-6 bg-indigo-500/20 rounded-full" />
                </div>
              </div>
            </GlassMonitor3D>
          </div>
        </div>

        
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{ transform: 'translate3d(0px, 0px, 0px)', transformStyle: 'preserve-3d' }}
        >
          <svg className="w-full h-full text-indigo-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.25">

            
            <path d="M 78 30 L 56 46" className="animate-dash-flow" style={{ animationDirection: 'reverse' }} />
            
            <path d="M 75 72 L 56 52" className="animate-dash-flow" />
          </svg>
        </div>

      </div>
    </div>
  );
}
