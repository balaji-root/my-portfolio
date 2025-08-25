import { Project } from '../../types/project';

export const swasthyaProject: Project = {
  id: 2,
  name: "Swasthya",
  description: "Healthcare management system designed to streamline patient data management and improve healthcare delivery",
  tech: ["React", "Node.js", "MongoDB", "Express.js", "Bootstrap", "JWT", "Ollama"],
  status: "In Development",
  liveUrl: null,
  github: "https://github.com/balaji0615/swasthya-",
  features: [
    "Patient record management",
    "Appointment scheduling",
    "Doctor-patient communication",
    "Medical history tracking",
    "Secure authentication system"
  ],
  category: "Healthcare Technology",
  showButtons: {
    liveDemo: false,
    github: true
  }
};
