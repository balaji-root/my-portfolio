import { Project } from '../../types/project';

export const pfSenseProject: Project = {
  id: 3,
  name: "Virtualized Network Firewall with pfSense",
  description: "As an individual project, I designed and implemented a network-based firewall using pfSense in a VirtualBox environment.",
  tech: ["pfSense", "VirtualBox", "Network Security", "Firewall Configuration", "SIEM", "Virtual Labs"],
  status: "Prototype",
  liveUrl: null,
  github: "#",
  features: [
    "Network traffic monitoring",
    "Firewall rule configuration",
    "Intrusion detection system",
    "Security log analysis",
    "Virtual lab environment"
  ],
  category: "Network Security",
  showButtons: {
    liveDemo: false,
    github: false
  }
};
