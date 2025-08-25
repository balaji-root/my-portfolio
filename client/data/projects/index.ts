export { phishingAnalyzerProject } from './phishing-analyzer';
export { swasthyaProject } from './swasthya';
export { pfSenseProject } from './pfsense-firewall';

// Export all projects as an array for easy iteration
import { Project } from '../../types/project';
import { phishingAnalyzerProject } from './phishing-analyzer';
import { swasthyaProject } from './swasthya';
import { pfSenseProject } from './pfsense-firewall';

export const allProjects: Project[] = [
  phishingAnalyzerProject,
  swasthyaProject,
  pfSenseProject
];
