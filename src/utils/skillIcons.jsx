import { 
  SiJavascript, SiCplusplus, SiReact, SiHtml5, SiCss, 
  SiTailwindcss, SiGit, SiPostman, SiLinux,
  SiPython, SiTypescript, SiNextdotjs, SiBootstrap, SiReactquery,
  SiNodedotjs, SiExpress, SiFastapi, SiMongodb, SiMysql, SiFirebase,
  SiCloudinary, SiNpm, SiGithub, SiGooglechrome
} from 'react-icons/si';

import {
  Code2, Database, Network, Server, Settings,
  Cpu, Layout, Component, Blocks, Terminal,
  Lock, BrainCircuit, Layers,
  Key, ShieldCheck, Bug, RotateCcw, RefreshCw
} from 'lucide-react';

export const getSkillData = (skillName) => {
  const iconProps = { className: "w-4 h-4" };

  switch (skillName) {
    
    case 'JavaScript': return { icon: <SiJavascript {...iconProps} />, color: "#F7DF1E" };
    case 'TypeScript': return { icon: <SiTypescript {...iconProps} />, color: "#3178C6" };
    case 'C++': return { icon: <SiCplusplus {...iconProps} />, color: "#00599C" };
    case 'Python': return { icon: <SiPython {...iconProps} />, color: "#3776AB" };
    case 'SQL': return { icon: <Database {...iconProps} />, color: "#00758F" };

    
    case 'React.js': return { icon: <SiReact {...iconProps} />, color: "#61DAFB" };
    case 'Next.js': return { icon: <SiNextdotjs {...iconProps} />, color: "#ffffff" };
    case 'HTML5': return { icon: <SiHtml5 {...iconProps} />, color: "#E34F26" };
    case 'CSS3': return { icon: <SiCss {...iconProps} />, color: "#1572B6" };
    case 'Tailwind CSS': return { icon: <SiTailwindcss {...iconProps} />, color: "#06B6D4" };
    case 'Bootstrap': return { icon: <SiBootstrap {...iconProps} />, color: "#7952B3" };
    case 'Zustand': return { icon: <Layers {...iconProps} />, color: "#60A5FA" };
    case 'React Query': return { icon: <SiReactquery {...iconProps} />, color: "#FF4154" };
    case 'Responsive Web Design': return { icon: <Layout {...iconProps} />, color: "#38BDF8" };
    case 'Component-Based Architecture': return { icon: <Component {...iconProps} />, color: "#C084FC" };
    case 'Feature-Based Architecture': return { icon: <Blocks {...iconProps} />, color: "#2DD4BF" };

    
    case 'Node.js': return { icon: <SiNodedotjs {...iconProps} />, color: "#5FA04E" };
    case 'Express.js': return { icon: <SiExpress {...iconProps} />, color: "#ffffff" };
    case 'FastAPI': return { icon: <SiFastapi {...iconProps} />, color: "#009688" };
    case 'REST APIs': return { icon: <Server {...iconProps} />, color: "#10B981" };
    case 'JWT': return { icon: <Key {...iconProps} />, color: "#F472B6" };
    case 'Authentication & Authorization': return { icon: <Lock {...iconProps} />, color: "#FBBF24" };
    case 'MVC Architecture': return { icon: <Layers {...iconProps} />, color: "#60A5FA" };
    case 'API Integration': return { icon: <Server {...iconProps} />, color: "#34D399" };

    
    case 'MongoDB': return { icon: <SiMongodb {...iconProps} />, color: "#47A248" };
    case 'MySQL': return { icon: <SiMysql {...iconProps} />, color: "#4479A1" };
    case 'Firebase Authentication': return { icon: <SiFirebase {...iconProps} />, color: "#FFCA28" };
    case 'Firebase Firestore': return { icon: <SiFirebase {...iconProps} />, color: "#FFCA28" };
    case 'Firebase Storage': return { icon: <SiFirebase {...iconProps} />, color: "#FFCA28" };
    case 'Cloudinary': return { icon: <SiCloudinary {...iconProps} />, color: "#3448C5" };
    case 'Database Design': return { icon: <Database {...iconProps} />, color: "#94A3B8" };
    case 'Data Modeling': return { icon: <Layout {...iconProps} />, color: "#A8A29E" };

    
    case 'Data Structures and Algorithms': return { icon: <Blocks {...iconProps} />, color: "#4ADE80" };
    case 'Object-Oriented Programming': return { icon: <Component {...iconProps} />, color: "#C084FC" };
    case 'Database Management Systems': return { icon: <Database {...iconProps} />, color: "#94A3B8" };
    case 'Operating Systems': return { icon: <Terminal {...iconProps} />, color: "#A8A29E" };
    case 'Computer Networks': return { icon: <Network {...iconProps} />, color: "#818CF8" };
    case 'System Design': return { icon: <Settings {...iconProps} />, color: "#9CA3AF" };
    case 'Problem Solving': return { icon: <BrainCircuit {...iconProps} />, color: "#A78BFA" };
    case 'Software Design Principles': return { icon: <Cpu {...iconProps} />, color: "#F87171" };

    
    case 'Git': return { icon: <SiGit {...iconProps} />, color: "#F05032" };
    case 'GitHub': return { icon: <SiGithub {...iconProps} />, color: "#ffffff" };
    case 'VS Code': return { icon: <Code2 {...iconProps} />, color: "#007ACC" };
    case 'Postman': return { icon: <SiPostman {...iconProps} />, color: "#FF6C37" };
    case 'npm': return { icon: <SiNpm {...iconProps} />, color: "#CB3837" };
    case 'API Testing': return { icon: <ShieldCheck {...iconProps} />, color: "#10B981" };
    case 'Agile Development': return { icon: <RotateCcw {...iconProps} />, color: "#F59E0B" };
    case 'Debugging': return { icon: <Bug {...iconProps} />, color: "#EF4444" };
    case 'Chrome DevTools': return { icon: <SiGooglechrome {...iconProps} />, color: "#4285F4" };
    case 'React Developer Tools': return { icon: <SiReact {...iconProps} />, color: "#61DAFB" };
    case 'Linux': return { icon: <SiLinux {...iconProps} />, color: "#FCC624" };
    case 'JavaScript (ES6)': return { icon: <SiJavascript {...iconProps} />, color: "#F7DF1E" };
    case 'Git & GitHub': return { icon: <SiGit {...iconProps} />, color: "#F05032" };
    case 'Real-Time Listeners': return { icon: <RefreshCw {...iconProps} />, color: "#38BDF8" };
    case 'Role-Based Access Control': return { icon: <Lock {...iconProps} />, color: "#EF4444" };

    default: return { icon: <Code2 {...iconProps} />, color: "#A3A3A3" };
  }
};
