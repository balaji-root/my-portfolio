import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from '../components/Terminal';
import { MatrixRain } from '../components/MatrixRain';

export default function Index() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTerminal(true), 500);
    const timer2 = setTimeout(() => setShowContent(true), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const bootCommands = [
    'whoami',
    'cat /etc/skills',
    'ls -la ~/projects',
    'cat ~/.motto'
  ];

  return (
    <div className="min-h-screen bg-black text-terminal-green relative overflow-hidden">
      <MatrixRain />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Boot Terminal */}
            {showTerminal && (
              <div className="mb-12 animate-fade-in-up">
                <Terminal commands={bootCommands} />
              </div>
            )}

            {/* Main Hero Content */}
            {showContent && (
              <div className="text-center space-y-8 animate-fade-in-up">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold terminal-glow">
                    <span className="text-terminal-green">Balaji</span>{' '}
                    <span className="text-terminal-cyan">R</span>
                  </h1>
                  <div className="text-xl md:text-2xl font-mono">
                    <span className="text-terminal-green/80">Cybersecurity Student</span>
                  </div>
                  <div className="text-terminal-cyan/60 font-mono">
                    Vidya Vikas Institute of Engineering & Technology | 3rd Year | CGPA: 7.97
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="flex justify-center space-x-8 text-sm font-mono">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
                    <span className="text-terminal-green/60">Seeking Entry-Level Opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-terminal-cyan rounded-full animate-pulse"></div>
                    <span className="text-terminal-cyan/60">Open to Learning & Internships</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <Link
                    to="/projects"
                    className="px-6 py-3 bg-terminal-green/10 border border-terminal-green text-terminal-green font-mono hover:bg-terminal-green/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] text-center"
                  >
                    &gt; View Projects
                  </Link>
                  <a
                    href="/resume.pdf"
                    download="Balaji_R_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-terminal-cyan/10 border border-terminal-cyan text-terminal-cyan font-mono hover:bg-terminal-cyan/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] text-center"
                  >
                    &gt; Download Resume
                  </a>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-terminal-red/10 border border-terminal-red text-terminal-red font-mono hover:bg-terminal-red/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] text-center"
                  >
                    &gt; Contact Me
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      {showContent && (
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-mono font-bold text-center mb-12 terminal-glow">
                <span className="text-terminal-cyan">[</span>
                Learning & Skills
                <span className="text-terminal-cyan">]</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Ethical Hacking */}
                <div className="bg-black/60 border border-terminal-red/30 p-6 rounded hover:border-terminal-red hover:shadow-[0_0_20px_rgba(255,0,0,0.1)] transition-all duration-300">
                  <h3 className="text-xl font-mono font-bold text-terminal-red mb-4">
                    ./ethical_hacking_basics
                  </h3>
                  <ul className="space-y-2 font-mono text-sm text-terminal-red/80">
                    <li>&rarr; Learning Penetration Testing</li>
                    <li>&rarr; Basic Vulnerability Scanning</li>
                    <li>&rarr; Capture The Flag (CTF)</li>
                    <li>&rarr; Social Engineering Awareness</li>
                    <li>&rarr; Web Application Security</li>
                    <li>&rarr; Network Security Fundamentals</li>
                  </ul>
                </div>

                {/* Security Analysis */}
                <div className="bg-black/60 border border-terminal-green/30 p-6 rounded hover:border-terminal-green hover:shadow-[0_0_20px_rgba(0,255,0,0.1)] transition-all duration-300">
                  <h3 className="text-xl font-mono font-bold text-terminal-green mb-4">
                    ./security_analysis_learning
                  </h3>
                  <ul className="space-y-2 font-mono text-sm text-terminal-green/80">
                    <li>&rarr; Security Fundamentals</li>
                    <li>&rarr; Risk Assessment Basics</li>
                    <li>&rarr; Log Analysis</li>
                    <li>&rarr; Malware Detection</li>
                    <li>&rarr; Digital Forensics Intro</li>
                    <li>&rarr; Security Compliance</li>
                  </ul>
                </div>

                {/* Technical Skills */}
                <div className="bg-black/60 border border-terminal-cyan/30 p-6 rounded hover:border-terminal-cyan hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-300">
                  <h3 className="text-xl font-mono font-bold text-terminal-cyan mb-4">
                    ./technical_toolkit
                  </h3>
                  <ul className="space-y-2 font-mono text-sm text-terminal-cyan/80">
                    <li>&rarr; Python | JavaScript | SQL</li>
                    <li>&rarr; Learning Metasploit & Burp</li>
                    <li>&rarr; Wireshark | Nmap | Nessus</li>
                    <li>&rarr; Kali Linux | OSINT Tools</li>
                    <li>&rarr; VM & Networking Basics</li>
                    <li>&rarr; Git | Linux | Windows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Activities */}
      {showContent && (
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-mono font-bold text-center mb-12 terminal-glow">
                <span className="text-terminal-green">[</span>
                Recent Learning & Projects
                <span className="text-terminal-green">]</span>
              </h2>

              <div className="bg-black/80 border border-terminal-green/30 p-6 rounded font-mono text-sm">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-terminal-cyan">[2024-02-09 11:30]</span>
                    <span className="text-terminal-green">&rarr;</span>
                    <span className="text-terminal-green/80">Built a network vulnerability scanner in Python </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-terminal-cyan">[2024-05-12 09:15]</span>
                    <span className="text-terminal-green">&rarr;</span>
                    <span className="text-terminal-green/80">Advanced to top 10% on TryHackMe leaderboard with 50+ room completions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-terminal-cyan">[2024-07-21 16:45]</span>
                    <span className="text-terminal-green">&rarr;</span>
                    <span className="text-terminal-green/80">Completed TryHackMe Advent of Cyber and earned certificate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-terminal-cyan">[2024-12-18 11:20]</span>
                    <span className="text-terminal-green">&rarr;</span>
                    <span className="text-terminal-green/80">Set up home lab with Kali Linux and vulnerable VMs</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer Terminal */}
      {showContent && (
        <footer className="py-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center font-mono text-sm text-terminal-green/60">
              <div className="mb-2">
                balaji@student:~$ echo "VVIET Student | Always learning, always securing"
              </div>
              <div>
                © 2024 Balaji R | Cybersecurity Student | All rights reserved
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* Scan lines overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
        <div className="scan-lines"></div>
      </div>
    </div>
  );
}
