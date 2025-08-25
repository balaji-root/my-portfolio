import { useEffect, useState } from 'react';
import { MatrixRain } from '../components/MatrixRain';

export default function About() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

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
                      <span className="text-terminal-green">cat about.txt</span>
                    </div>
                    <div className="text-terminal-green/80 ml-4">
                      Displaying personal profile and academic journey...
                    </div>
                  </div>
                </div>

                {/* Main Title */}
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold terminal-glow mb-4">
                    <span className="text-terminal-cyan">[</span>
                    About Me
                    <span className="text-terminal-cyan">]</span>
                  </h1>
                </div>

                {/* Personal Info Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Academic Profile */}
                  <div className="bg-black/60 border border-terminal-green/30 p-6 rounded hover:border-terminal-green hover:shadow-[0_0_20px_rgba(0,255,0,0.1)] transition-all duration-300">
                    <h2 className="text-2xl font-mono font-bold text-terminal-green mb-4 terminal-glow">
                      ./academic_profile
                    </h2>
                    <div className="space-y-3 font-mono text-sm">
                      <div className="flex items-start space-x-2">
                        <span className="text-terminal-cyan">&gt;</span>
                        <div>
                          <div className="text-terminal-green">Institution:</div>
                          <div className="text-terminal-green/80 ml-2">Vidya Vikas Institute of Engineering & Technology</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-terminal-cyan">&gt;</span>
                        <div>
                          <div className="text-terminal-green">Current Status:</div>
                          <div className="text-terminal-green/80 ml-2">3rd Year Student | 7th Semester</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-terminal-cyan">&gt;</span>
                        <div>
                          <div className="text-terminal-green">CGPA:</div>
                          <div className="text-terminal-green/80 ml-2">
                            <span className="text-terminal-cyan font-bold">7.97</span> / 10.0
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-terminal-cyan">&gt;</span>
                        <div>
                          <div className="text-terminal-green">Specialization:</div>
                          <div className="text-terminal-green/80 ml-2">Cybersecurity & Ethical Hacking</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Learning Platforms */}
                  <div className="bg-black/60 border border-terminal-cyan/30 p-6 rounded hover:border-terminal-cyan hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-300">
                    <h2 className="text-2xl font-mono font-bold text-terminal-cyan mb-4 terminal-glow">
                      ./learning_platforms
                    </h2>
                    <div className="space-y-3 font-mono text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-terminal-green">&rarr;</span>
                        <div>
                          <div className="text-terminal-cyan">TryHackMe Active User</div>
                          <div className="text-terminal-cyan/80 text-xs ml-2">Hands-on cybersecurity learning</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-terminal-green">&rarr;</span>
                        <div>
                          <div className="text-terminal-cyan">CTF Competitions</div>
                          <div className="text-terminal-cyan/80 text-xs ml-2">Regular participant</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-terminal-green">&rarr;</span>
                        <div>
                          <div className="text-terminal-cyan">Home Lab Setup</div>
                          <div className="text-terminal-cyan/80 text-xs ml-2">Kali Linux & VMs</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-terminal-green">&rarr;</span>
                        <div>
                          <div className="text-terminal-cyan">Online Courses</div>
                          <div className="text-terminal-cyan/80 text-xs ml-2">Continuous learning</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hobbies & Interests */}
                <div className="bg-black/60 border border-terminal-red/30 p-6 rounded hover:border-terminal-red hover:shadow-[0_0_20px_rgba(255,0,0,0.1)] transition-all duration-300">
                  <h2 className="text-2xl font-mono font-bold text-terminal-red mb-6 terminal-glow">
                    ./hobbies_and_interests
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3 font-mono text-sm">
                      <h3 className="text-terminal-red/80 font-bold">Entertainment:</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-terminal-red">🎮</span>
                          <span className="text-terminal-red/80">Gaming Enthusiast</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-terminal-red">📺</span>
                          <span className="text-terminal-red/80">Anime Fan</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 font-mono text-sm">
                      <h3 className="text-terminal-red/80 font-bold">Activities:</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-terminal-red">🏸</span>
                          <span className="text-terminal-red/80">Badminton (Shuttle)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-terminal-red">🔐</span>
                          <span className="text-terminal-red/80">Cybersecurity Research</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Focus */}
                <div className="bg-black/60 border border-terminal-yellow/30 p-6 rounded hover:border-terminal-yellow hover:shadow-[0_0_20px_rgba(255,255,0,0.1)] transition-all duration-300">
                  <h2 className="text-2xl font-mono font-bold text-terminal-yellow mb-4 terminal-glow">
                    ./current_focus
                  </h2>
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex items-start space-x-2">
                      <span className="text-terminal-yellow">▶</span>
                      <div>
                        <div className="text-terminal-yellow font-bold">Academic Excellence:</div>
                        <div className="text-terminal-yellow/80 ml-2">Maintaining high CGPA while diving deep into cybersecurity concepts</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-terminal-yellow">▶</span>
                      <div>
                        <div className="text-terminal-yellow font-bold">Practical Learning:</div>
                        <div className="text-terminal-yellow/80 ml-2">Building hands-on experience through TryHackMe and personal projects</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-terminal-yellow">▶</span>
                      <div>
                        <div className="text-terminal-yellow font-bold">Research & Development:</div>
                        <div className="text-terminal-yellow/80 ml-2">Working on cybersecurity projects and exploring emerging threats</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-terminal-yellow">▶</span>
                      <div>
                        <div className="text-terminal-yellow font-bold">Career Preparation:</div>
                        <div className="text-terminal-yellow/80 ml-2">Preparing for entry-level cybersecurity roles and internships</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terminal Footer */}
                <div className="bg-black/80 border border-terminal-green/30 p-4 rounded font-mono text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-terminal-cyan">balaji@student:~$</span>
                    <span className="text-terminal-green">echo "Passionate about cybersecurity, always learning!"</span>
                  </div>
                  <div className="text-terminal-green/80 ml-4 mt-1">
                    Passionate about cybersecurity, always learning!
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
