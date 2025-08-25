import { MatrixRain } from './MatrixRain';

interface PlaceholderPageProps {
  title: string;
  description: string;
  command: string;
}

export const PlaceholderPage = ({ title, description, command }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-black text-terminal-green relative overflow-hidden">
      <MatrixRain />
      
      <div className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Terminal Header */}
            <div className="bg-black/80 border border-terminal-green/30 p-6 rounded mb-8 font-mono">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
              </div>
              <div className="text-left space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-terminal-cyan">balaji@cybersec:~$</span>
                  <span className="text-terminal-green">{command}</span>
                </div>
                <div className="text-terminal-green/80">
                  {description}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold terminal-glow">
                <span className="text-terminal-cyan">[</span>
                {title}
                <span className="text-terminal-cyan">]</span>
              </h1>
              
              <div className="bg-black/60 border border-terminal-yellow/30 p-8 rounded">
                <div className="text-terminal-yellow font-mono text-lg mb-4">
                  ⚠️ Section Under Development
                </div>
                <p className="text-terminal-green/80 font-mono">
                  This section is currently being developed with cutting-edge cybersecurity content.
                  <br />
                  Please check back soon or continue exploring other sections.
                </p>
                <div className="mt-6">
                  <button 
                    onClick={() => window.history.back()}
                    className="px-6 py-3 bg-terminal-green/10 border border-terminal-green text-terminal-green font-mono hover:bg-terminal-green/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]"
                  >
                    &lt; Go Back
                  </button>
                </div>
              </div>

              {/* Command Suggestions */}
              <div className="bg-black/40 border border-terminal-green/20 p-6 rounded">
                <div className="text-terminal-green/60 font-mono text-sm text-left">
                  <div className="mb-2">Suggested commands:</div>
                  <div className="space-y-1">
                    <div>$ cd ~/ <span className="text-terminal-cyan"># Return to homepage</span></div>
                    <div>$ ls skills/ <span className="text-terminal-cyan"># View technical skills</span></div>
                    <div>$ cat projects.log <span className="text-terminal-cyan"># Browse projects</span></div>
                    <div>$ ping contact <span className="text-terminal-cyan"># Get in touch</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scan lines overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
        <div className="scan-lines"></div>
      </div>
    </div>
  );
};
