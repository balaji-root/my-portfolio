import { useEffect, useState } from 'react';
import { MatrixRain } from '../components/MatrixRain';

export default function Contact() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const contactMethods = [
    {
      type: 'email',
      label: 'Email',
      value: 'balajimail0615@gmail.com',
      link: 'mailto:balajimail0615@gmail.com',
      icon: '📧',
      command: 'sendmail',
      status: 'Active'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/balaji-r-06i5',
      link: 'https://www.linkedin.com/in/balaji-r-06i5/',
      icon: '💼',
      command: 'curl -L',
      status: 'Professional Network'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-terminal-green relative overflow-hidden">
      <MatrixRain />
      
      <div className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {showContent && (
              <div className="space-y-8 animate-fade-in-up">
                {/* Terminal Header */}
                <div className="bg-black/80 border border-terminal-green/30 p-6 rounded font-mono">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
                  </div>
                  <div className="text-left space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-terminal-cyan">balaji@student:~$</span>
                      <span className="text-terminal-green">ping contact</span>
                    </div>
                    <div className="text-terminal-green/80 ml-4">
                      PING contact.balaji.dev (192.168.1.100): 56 data bytes<br/>
                      64 bytes from contact.balaji.dev: icmp_seq=0 time=0.045ms<br/>
                      Contact channels established successfully!
                    </div>
                  </div>
                </div>

                {/* Main Title */}
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold terminal-glow mb-4">
                    <span className="text-terminal-cyan">[</span>
                    Contact Me
                    <span className="text-terminal-cyan">]</span>
                  </h1>
                  <p className="text-terminal-green/60 font-mono">
                    Establishing secure communication channels...
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="grid md:grid-cols-2 gap-8">
                  {contactMethods.map((contact, index) => (
                    <div key={index} className="bg-black/60 border border-terminal-green/30 p-6 rounded hover:border-terminal-green hover:shadow-[0_0_20px_rgba(0,255,0,0.1)] transition-all duration-300">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{contact.icon}</span>
                          <div>
                            <h3 className="text-xl font-mono font-bold text-terminal-green">
                              ./{contact.label.toLowerCase()}
                            </h3>
                            <span className="text-terminal-cyan/60 text-sm font-mono">
                              {contact.status}
                            </span>
                          </div>
                        </div>

                        <div className="bg-black/80 border border-terminal-green/20 p-4 rounded font-mono text-sm">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-terminal-cyan">balaji@student:~$</span>
                              <span className="text-terminal-green">{contact.command} {contact.value}</span>
                            </div>
                            <div className="text-terminal-green/80 ml-4">
                              Connection established ✓<br/>
                              Status: {contact.status}<br/>
                              Ready to communicate!
                            </div>
                          </div>
                        </div>

                        <a
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-3 bg-terminal-green/10 border border-terminal-green text-terminal-green font-mono text-center hover:bg-terminal-green/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                        >
                          {contact.icon} Connect via {contact.label}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* TryHackMe Section */}
                <div className="bg-black/60 border border-terminal-red/30 p-6 rounded hover:border-terminal-red hover:shadow-[0_0_20px_rgba(255,0,0,0.1)] transition-all duration-300">
                  <h2 className="text-2xl font-mono font-bold text-terminal-red mb-6 terminal-glow">
                    ./cybersecurity_achievements
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4">
                      <div className="bg-black/80 border border-terminal-red/20 p-4 rounded font-mono text-sm">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-terminal-cyan">balaji@student:~$</span>
                            <span className="text-terminal-green">curl -s tryhackme.com/p/balajimail0615</span>
                          </div>
                          <div className="text-terminal-red/80 ml-4">
                            🎯 Active TryHackMe User<br/>
                            🔥 Cybersecurity Learning Path<br/>
                            ⚡ Hands-on Security Training<br/>
                            🏆 Achievement Badge Unlocked
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-mono font-bold text-terminal-red">Platform Highlights:</h3>
                        <ul className="space-y-1 font-mono text-sm">
                          <li className="flex items-center space-x-2">
                            <span className="text-terminal-red">&gt;</span>
                            <span className="text-terminal-red/80">Practical cybersecurity challenges</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="text-terminal-red">&gt;</span>
                            <span className="text-terminal-red/80">Real-world attack scenarios</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="text-terminal-red">&gt;</span>
                            <span className="text-terminal-red/80">Security tool mastery</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="text-terminal-red">&gt;</span>
                            <span className="text-terminal-red/80">Community learning & rankings</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="bg-black/80 border border-terminal-red/20 p-4 rounded">
                        <h4 className="text-terminal-red font-mono font-bold mb-4">Live Achievement Badge:</h4>
                        <div className="inline-block p-3 bg-white/5 rounded border border-terminal-red/30">
                          <img 
                            src="https://tryhackme-badges.s3.amazonaws.com/balajimail0615.png" 
                            alt="Balaji R TryHackMe Achievement Badge" 
                            className="max-w-full h-auto rounded"
                            style={{ maxHeight: '200px' }}
                          />
                        </div>
                        <p className="text-terminal-red/60 font-mono text-xs mt-2">
                          Real-time progress tracking
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Summary */}
                <div className="bg-black/80 border border-terminal-cyan/30 p-6 rounded">
                  <h2 className="text-2xl font-mono font-bold text-terminal-cyan mb-4 terminal-glow">
                    ./quick_connect
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="space-y-2">
                      <div className="text-terminal-green font-mono text-lg">📧</div>
                      <div className="text-terminal-green/80 font-mono text-sm">Email Response</div>
                      <div className="text-terminal-cyan font-mono text-xs">&lt; 24 hours</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-terminal-green font-mono text-lg">💼</div>
                      <div className="text-terminal-green/80 font-mono text-sm">LinkedIn Active</div>
                      <div className="text-terminal-cyan font-mono text-xs">Professional Network</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-terminal-green font-mono text-lg">🎯</div>
                      <div className="text-terminal-green/80 font-mono text-sm">TryHackMe</div>
                      <div className="text-terminal-cyan font-mono text-xs">Learning Progress</div>
                    </div>
                  </div>
                </div>

                {/* Footer Terminal */}
                <div className="bg-black/80 border border-terminal-green/30 p-4 rounded font-mono text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-terminal-cyan">balaji@student:~$</span>
                    <span className="text-terminal-green">echo "Looking forward to connecting with fellow cybersecurity enthusiasts!"</span>
                  </div>
                  <div className="text-terminal-green/80 ml-4 mt-1">
                    Looking forward to connecting with fellow cybersecurity enthusiasts!
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scan lines overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
        <div className="scan-lines"></div>
      </div>
    </div>
  );
}
