import { useState, useEffect } from 'react';
import { Code, Github, Linkedin, Mail, Layers, Stars ,Twitter} from 'lucide-react';

export default function PortfolioHero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredTech, setHoveredTech] = useState(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const parallaxOffset = {
    x: mousePosition.x / 50,
    y: mousePosition.y / 50
  };

  const techStack = [
    { name: "React", color: "blue", icon: "⚛️" },
    { name: "Next.js", color: "gray", icon: "▲" },
    { name: "TypeScript", color: "blue", icon: "TS" },
    { name: "Node.js", color: "green", icon: "⬢" },
    { name: "Tailwind", color: "teal", icon: "🌊" }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array(144).fill(0).map((_, i) => (
            <div key={i} className="border border-gray-500" />
          ))}
        </div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute text-blue-500 opacity-20 text-6xl"
          style={{ 
            top: '15%', 
            left: '10%', 
            transform: `translate(${parallaxOffset.x * 0.8}px, ${parallaxOffset.y * 0.8}px)`
          }}
        >
          <Code />
        </div>
        <div 
          className="absolute text-purple-500 opacity-20 text-5xl"
          style={{ 
            top: '25%', 
            right: '20%',
            transform: `translate(${-parallaxOffset.x * 1.2}px, ${parallaxOffset.y * 1.2}px)`
          }}
        >
          <Stars />
        </div>
        <div 
          className="absolute text-green-500 opacity-20 text-4xl"
          style={{ 
            bottom: '30%', 
            left: '20%',
            transform: `translate(${parallaxOffset.x * 1.5}px, ${-parallaxOffset.y * 1.5}px)`
          }}
        >
          <Layers />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-3xl px-6 py-16 text-center space-y-8">
        <div 
          className="mb-6 inline-block"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <div className="relative inline-flex items-center p-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-blue-300">
            <span className="animate-ping absolute h-2 w-2 rounded-full bg-blue-400 opacity-75 mr-2"></span>
            <span className="relative h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
            Available for hire
          </div>
        </div>
        
        <h1 
          className="text-5xl sm:text-6xl font-bold tracking-tight"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
            Aman Kumar
          </span>
        </h1>
        
        <p 
          className="text-xl sm:text-2xl text-gray-300 font-light max-w-2xl mx-auto"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          Full-stack developer crafting elegant solutions with modern technologies and clean code.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg hover:shadow-blue-500/30">
            View My Work
          </button>
          <button className="px-6 py-3 rounded-md bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium transition-all">
            Contact Me
          </button>
        </div>
        
        {/* Enhanced Tech Stack Showcase */}
        <div className="mt-16 pt-8 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          
          <div className="relative">
            <p className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-900 px-4 text-sm font-medium text-gray-400">
              TECH STACK
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {techStack.map((tech) => (
              <div 
                key={tech.name}
                className="relative group"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className={`
                  flex items-center gap-2 px-5 py-3 
                  rounded-lg backdrop-blur-md transition-all duration-300
                  ${hoveredTech === tech.name ? 'bg-gray-800/80 scale-110' : 'bg-gray-800/40'}
                  border border-gray-700 hover:border-gray-600
                `}>
                  <span className="text-lg font-mono">{tech.icon}</span>
                  <span className="font-medium">{tech.name}</span>
                </div>
                
                {/* Glow effect */}
                <div className={`
                  absolute -inset-0.5 rounded-lg blur-sm transition-opacity duration-300
                  ${hoveredTech === tech.name ? 'opacity-30' : 'opacity-0'}
                  ${tech.color === 'blue' ? 'bg-blue-500' : 
                    tech.color === 'green' ? 'bg-green-500' : 
                    tech.color === 'teal' ? 'bg-teal-500' : 'bg-gray-500'}
                `}></div>
              </div>
            ))}
          </div>
          
          {/* Tech experience bar */}
          <div className="mt-10 flex items-center justify-center">
            <div className="w-full max-w-md bg-gray-800/30 h-1 rounded-full overflow-hidden">
              <div className="h-full w-2/5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
            <span className="ml-3 text-sm text-gray-400">2+ Years of experience</span>
          </div>
        </div>
      </div>
      
      {/* Social Links */}
      <div className="absolute bottom-8 flex gap-6 z-10">
        <a href="https://github.com/Aman-web-dev" target='_blank' className="text-gray-400 hover:text-white transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/aman-ku/" target='_blank' className="text-gray-400 hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:amanzhx1234@gmail.com" target='_blank' className="text-gray-400 hover:text-white transition-colors">
          <Mail size={20} />
        </a>
        <a href="https://x.com/Aman29615102" target='_blank' className="text-gray-400 hover:text-white transition-colors">
          <Twitter size={20} />
        </a>
      </div>
      
      {/* Decorative Corner Elements */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-blue-500/30"></div>
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-blue-500/30"></div>
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-blue-500/30"></div>
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-blue-500/30"></div>
    </div>
  );
}