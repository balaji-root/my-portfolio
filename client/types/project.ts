export interface ProjectShowButtons {
  liveDemo: boolean;
  github: boolean;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  status: string;
  liveUrl: string | null;
  github: string;
  features: string[];
  category: string;
  showButtons: ProjectShowButtons;
}
