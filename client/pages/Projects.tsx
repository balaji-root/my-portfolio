import { useEffect, useState } from 'react';
import { MatrixRain } from '../components/MatrixRain';
import { allProjects } from '../data/projects';

export default function Projects() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const projects = allProjects;

  return (
    <div className="min-h-screen bg-black text-terminal-green relative overflow-hidden">
      <MatrixRain />
      
      <div className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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
                      <span className="text-terminal-green">ls projects/</span>
                    </div>
                    <div className="text-terminal-green/80 ml-4">
                      total {projects.length}<br/>
                      drwxr-xr-x 3 balaji student 4096 2024 .<br/>
                      drwxr-xr-x 4 balaji student 4096 2024 ..<br/>
                      {projects.map((project, index) => (
                        <span key={index}>
                          -rw-r--r-- 1 balaji student 2048 2024 {project.name.toLowerCase().replace(/ /g, '_')}<br/>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Title */}
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold terminal-glow mb-4">
                    <span className="text-terminal-cyan">[</span>
                    Security Projects
                    <span className="text-terminal-cyan">]</span>
                  </h1>
                  <p className="text-terminal-green/60 font-mono">
                    Cybersecurity projects and research implementations
                  </p>
                </div>

                {/* Projects Grid */}
                <div className="space-y-8">
                  {projects.map((project) => (
                    <div key={project.id} className="bg-black/60 border border-terminal-green/30 rounded-lg overflow-hidden hover:border-terminal-green hover:shadow-[0_0_30px_rgba(0,255,0,0.1)] transition-all duration-300">
                      {/* Project Header */}
                      <div className="bg-terminal-green/10 border-b border-terminal-green/20 p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h2 className="text-2xl font-mono font-bold text-terminal-green terminal-glow mb-2">
                              {project.name}
                            </h2>
                            <div className="flex items-center space-x-4 text-sm font-mono">
                              <span className="px-2 py-1 bg-terminal-cyan/20 text-terminal-cyan rounded">
                                {project.category}
                              </span>
                              <span className="px-2 py-1 bg-terminal-green/20 text-terminal-green rounded">
                                {project.status}
                              </span>
                            </div>
                          </div>
                          <div className="flex space-x-3">
                            {/* Live Demo Button */}
                            {project.showButtons.liveDemo && project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-terminal-green/20 border border-terminal-green text-terminal-green font-mono hover:bg-terminal-green/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                              >
                                🚀 Live Demo
                              </a>
                            )}

                            {/* GitHub Button */}
                            {project.showButtons.github && project.github !== "#" && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-terminal-cyan/20 border border-terminal-cyan text-terminal-cyan font-mono hover:bg-terminal-cyan/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                              >
                                📁 Code
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Description & Features */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-mono font-bold text-terminal-green mb-2">
                                ./description
                              </h3>
                              <p className="text-terminal-green/80 font-mono text-sm leading-relaxed">
                                {project.description}
                              </p>
                            </div>

                            <div>
                              <h3 className="text-lg font-mono font-bold text-terminal-green mb-2">
                                ./key_features
                              </h3>
                              <ul className="space-y-1">
                                {project.features.map((feature, index) => (
                                  <li key={index} className="flex items-center space-x-2 text-terminal-green/80 font-mono text-sm">
                                    <span className="text-terminal-cyan">&gt;</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Technical Details */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-mono font-bold text-terminal-green mb-2">
                                ./tech_stack
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                  <span 
                                    key={index}
                                    className="px-2 py-1 bg-terminal-cyan/10 text-terminal-cyan border border-terminal-cyan/30 rounded text-xs font-mono"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-mono font-bold text-terminal-green mb-2">
                                ./project_stats
                              </h3>
                              <div className="space-y-2 font-mono text-sm">
                                {project.id === 1 && (
                                  <>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Status:</span>
                                      <span className="text-terminal-green">✅ Production Ready</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Deployment:</span>
                                      <span className="text-terminal-cyan">Render.com</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Type:</span>
                                      <span className="text-terminal-yellow">Web Application</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Security Focus:</span>
                                      <span className="text-terminal-red">Phishing Detection</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Accuracy:</span>
                                      <span className="text-terminal-cyan">94.2%</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Response Time:</span>
                                      <span className="text-terminal-yellow">0.8s</span>
                                    </div>
                                  </>
                                )}
                                {project.id === 2 && (
                                  <>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Status:</span>
                                      <span className="text-terminal-yellow">🔄 In Development</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Deployment:</span>
                                      <span className="text-terminal-cyan">Local Development</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Type:</span>
                                      <span className="text-terminal-yellow">Healthcare System</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Database:</span>
                                      <span className="text-terminal-cyan">MongoDB</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Authentication:</span>
                                      <span className="text-terminal-red">JWT + Ollama</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Frontend:</span>
                                      <span className="text-terminal-yellow">React + Bootstrap</span>
                                    </div>
                                  </>
                                )}
                                {project.id === 3 && (
                                  <>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Status:</span>
                                      <span className="text-terminal-yellow">🔧 Prototype</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Environment:</span>
                                      <span className="text-terminal-cyan">VirtualBox</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Type:</span>
                                      <span className="text-terminal-yellow">Network Security</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Firewall:</span>
                                      <span className="text-terminal-red">pfSense</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Monitoring:</span>
                                      <span className="text-terminal-cyan">SIEM Integration</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-terminal-green/60">Lab Type:</span>
                                      <span className="text-terminal-yellow">Virtual Network</span>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Terminal Demo */}
                        <div className="mt-6 bg-black/80 border border-terminal-green/30 p-4 rounded">
                          <div className="font-mono text-sm space-y-1">
                            <div className="flex items-center space-x-2">
                              <span className="text-terminal-cyan">balaji@student:~$</span>
                              <span className="text-terminal-green">
                                {project.id === 1 && project.liveUrl && `curl -X POST ${project.liveUrl}api/analyze`}
                                {project.id === 2 && `npm start # Starting Swasthya development server`}
                                {project.id === 3 && `pfctl -f /etc/pf.conf # Loading firewall rules`}
                              </span>
                            </div>
                            <div className="text-terminal-green/80 ml-4">
                              {project.id === 1 && (
                                <>
                                  {"{"}<br/>
                                  &nbsp;&nbsp;"status": "analyzed",<br/>
                                  &nbsp;&nbsp;"threat_level": "safe",<br/>
                                  &nbsp;&nbsp;"confidence": "94.2%",<br/>
                                  &nbsp;&nbsp;"analysis_time": "0.8s"<br/>
                                  {"}"}
                                </>
                              )}
                              {project.id === 2 && (
                                <>
                                  Starting Swasthya Healthcare System...<br/>
                                  ✓ Database connected successfully<br/>
                                  ✓ Authentication middleware loaded<br/>
                                  ✓ Server running on http://localhost:3000<br/>
                                  Ready to manage patient records!
                                </>
                              )}
                              {project.id === 3 && (
                                <>
                                  pfSense Firewall Configuration Loaded<br/>
                                  ✓ WAN interface configured<br/>
                                  ✓ LAN interface secured<br/>
                                  ✓ Firewall rules active<br/>
                                  ✓ Intrusion detection enabled<br/>
                                  Network traffic being monitored...
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add More Projects CTA */}
                <div className="text-center">
                  <div className="bg-black/60 border border-terminal-yellow/30 p-6 rounded hover:border-terminal-yellow hover:shadow-[0_0_20px_rgba(255,255,0,0.1)] transition-all duration-300">
                    <h3 className="text-xl font-mono font-bold text-terminal-yellow mb-2">
                      More Projects Coming Soon...
                    </h3>
                    <p className="text-terminal-yellow/80 font-mono text-sm">
                      Currently working on additional cybersecurity projects and research
                    </p>
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
