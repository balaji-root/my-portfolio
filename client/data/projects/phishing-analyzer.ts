import { Project } from '../../types/project';

export const phishingAnalyzerProject: Project = {
  id: 1,
  name: "Live URL Phishing Analyzer",
  description: "Advanced phishing detection system using machine learning algorithms to analyze URLs and websites for malicious content",
  tech: ["Python", "Machine Learning", "Flask", "Scikit-learn", "HTML/CSS", "JavaScript"],
  status: "Live & Deployed",
  liveUrl: "https://live-url-phising-analyzer.onrender.com/",
  github: "https://github.com/balaji-root/LIve-URL-phising-analyzer",
  features: [
    "Real-time URL analysis",
    "Machine learning-based detection",
    "User-friendly web interface",
    "Detailed threat reports",
    "Performance metrics dashboard"
  ],
  category: "Web Security",
  showButtons: {
    liveDemo: true,
    github: true
  }
};
