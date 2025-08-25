import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'home', path: '/', command: 'cd ~' },
  { name: 'about', path: '/about', command: 'cat about.txt' },
  { name: 'projects', path: '/projects', command: 'ls projects/' },
  { name: 'contact', path: '/contact', command: 'ping contact' },
];

export const Navigation = () => {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-terminal-green/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-terminal-green font-mono font-bold text-lg terminal-glow">
              [student@balaji-learning]#
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`group relative font-mono text-sm transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-terminal-green terminal-glow'
                    : 'text-terminal-green/70 hover:text-terminal-green'
                }`}
              >
                <span className="group-hover:hidden">{item.name}</span>
                <span className="hidden group-hover:inline-block text-terminal-cyan text-xs">
                  {item.command}
                </span>
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-terminal-green animate-glow-pulse"></div>
                )}
              </Link>
            ))}
          </div>

          {/* System Status */}
          <div className="hidden lg:flex items-center space-x-4 text-xs font-mono">
            <div className="text-terminal-green/60">
              uptime: {Math.floor(Date.now() / 1000 / 60 / 60 / 24)} days
            </div>
            <div className="text-terminal-cyan">
              {currentTime.toLocaleTimeString()}
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
              <span className="text-terminal-green/60">online</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-terminal-green">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scan line effect */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-terminal-green to-transparent animate-scan-lines"></div>
    </nav>
  );
};
