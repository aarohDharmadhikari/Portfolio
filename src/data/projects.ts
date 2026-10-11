
export interface Project {
  slug: string;
  name: string;
  description: string;
  status: string;
  tags: string[];
  featured: boolean;
  repoUrl: string;
  demoUrl?: string;
  contribution?: string;
}

export const projects: Project[] = [
  {
    slug: "personal-portfolio",
    name: "Personal Portfolio",
    description:
      "A personal portfolio built with Next.js, TypeScript, React, and Tailwind CSS, focused on presenting projects and technical work through a responsive interface.",
    status: "In development",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    featured: true,
    repoUrl: "https://github.com/aarohDharmadhikari/Portfolio",
  },
  {
    slug: "repograph",
    name: "REPOGRAPH",
    description:
      "A repository intelligence interface designed to help developers explore and understand code repositories. The dashboard implementation is underway.",
    status: "In development",
    tags: ["Next.js", "TypeScript", "React", "UI Engineering"],
    featured: true,
    repoUrl: "https://github.com/aarohDharmadhikari/REPOGRAPH",
  },
  {
    slug: "max-ai-operating-system",
    name: "MAX AI Operating System",
    description:
      "A long-term concept for an AI operating layer spanning memory, voice interaction, computer vision, automation, and multi-agent reasoning.",
    status: "Long-term project",
    tags: ["AI Systems", "Automation", "System Design"],
    featured: false,
    repoUrl: "https://github.com/aarohDharmadhikari/MAXAIOS",
  },
  {
    slug: "ai-bhavishya-patrika",
    name: "AI Bhavishya Patrika",
    description:
      "An AI-powered application developed to generate personalized Bhavishya Patrika reports.",
    status: "Completed",
    tags: ["React", "Node.js", "Express", "MongoDB Atlas"],
    featured: false,
    repoUrl: "https://github.com/aarohDharmadhikari/AI-Bhavishya-Patrika",
  },
  {
    slug: "speech-to-text-dialect-normalization",
    name: "Speech-to-Text & Dialect Normalization Framework",
    description:
      "A deep-learning project focused on recognizing spoken Ahirani and normalizing the resulting text into Standard Marathi.",
    status: "Completed",
    tags: ["Python", "Whisper", "Speech Recognition", "Marathi NLP"],
    featured: false,
    repoUrl: "https://github.com/aarohDharmadhikari/AhiraniProject",
  },
  {
    slug: "equinox",
    name: "EQUINOX",
    description:
      "A collaborative project focused on autonomous, energy-aware workload migration orchestration.",
    status: "Collaborative project",
    tags: ["Workload Migration", "Energy Awareness", "Backend Logic"],
    featured: false,
    repoUrl: "https://github.com/Tanishq-IMCA/Equinox",
    contribution:
      "My contribution: implementing the server-room logic and backend logic.",
  },
];
