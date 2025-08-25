import { useEffect, useState } from 'react';

interface TerminalProps {
  commands: string[];
  prompt?: string;
  className?: string;
}

export const Terminal = ({ commands, prompt = "balaji@student:~$", className = "" }: TerminalProps) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      setIsTyping(false);
      return;
    }

    const command = commands[currentCommandIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= command.length) {
        setCurrentText(command.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentCommandIndex(prev => prev + 1);
          setCurrentText('');
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentCommandIndex, commands]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`font-mono text-terminal-green bg-black/80 p-6 rounded border border-terminal-green/30 ${className}`}>
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
        </div>
        <div className="text-terminal-green/60 text-sm mb-4">Terminal - Balaji R Student Portfolio</div>
      </div>
      
      <div className="space-y-2">
        {commands.slice(0, currentCommandIndex).map((cmd, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-terminal-cyan">{prompt}</span>
              <span className="text-terminal-green">{cmd}</span>
            </div>
            <div className="text-terminal-green/80 ml-4">
              {getCommandOutput(cmd)}
            </div>
          </div>
        ))}
        
        {currentCommandIndex < commands.length && (
          <div className="flex items-center space-x-2">
            <span className="text-terminal-cyan">{prompt}</span>
            <span className="text-terminal-green">
              {currentText}
              {isTyping && showCursor && <span className="text-terminal-green animate-terminal-blink">█</span>}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const getCommandOutput = (command: string): string => {
  switch (command) {
    case 'whoami':
      return 'Balaji R - 3rd Year Computer Science Student\nVidya Vikas Institute of Engineering & Technology\nCGPA: 7.97/10.0 | 7th Semester';
    case 'cat /etc/skills':
      return `Learning: Network Security | Ethical Hacking | Digital Forensics
Languages: Python | Bash | JavaScript | SQL
Tools: Wireshark | Nmap | Metasploit | Burp Suite | Kali Linux`;
    case 'ls -la ~/projects':
      return `total 12
-r--r--rwx 1 balaji student 1024 2024 network_scanner.py
-rw-r--rw- 1 balaji student 2048 2024 vulnerability_assessment_lab
-rw-r--r-- 1 balaji student 1536 2024 honeypot_project
-rw-r--r-- 1 balaji student 896 2024 ctf_writeups`;
    case 'cat ~/.motto':
      return '"The best way to learn cybersecurity is by doing." - Student Mindset';
    case 'systemctl status portfolio.service':
      return `● portfolio.service - Balaji R Student Portfolio
   Loaded: loaded (/etc/systemd/system/portfolio.service; enabled)
   Active: active (running) since ${new Date().toLocaleDateString()}
   Status: "Ready to learn and contribute to cybersecurity"`;
    case 'cat ~/hobbies.txt':
      return 'Gaming 🎮 | Anime 📺 | Badminton 🏸 | Cybersecurity Research 🔐\nTryHackMe Active User | CTF Participant | Home Lab Enthusiast';
    default:
      return 'Command executed successfully.';
  }
};
