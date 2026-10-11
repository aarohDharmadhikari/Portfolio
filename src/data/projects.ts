export interface Project {
  slug: string;
  name: string;
  description: string;
  status?: string;
  progress?: number;
  tags: string[];
  featured: boolean;
  repoUrl?: string;
  demoUrl?: string;
}
export const projects: Project[] = [
  {
    slug: "max-ios",
    name: "MAX iOS",
    description:
      "An AI operating system inspired by intelligent assistants — a future ecosystem spanning memory, automation, a voice assistant, computer vision, and multi-agent AI.",
    status: "Architecture phase",
    progress: 5,
    tags: ["AI Agents", "Voice AI", "Computer Vision", "System Design"],
    featured: true,
  },
  {
    slug: "speech-to-text-dialect-normalization",
    name: "Speech-to-Text & Dialect Normalization Framework",
    description:
      "A deep learning system that converts spoken Ahirani into standard Marathi, built on Whisper.",
    status: "In development",
    progress: 100,
    tags: ["Whisper", "Speech Recognition", "NLP", "Deep Learning"],
    featured: true,
  },
  {
    slug: "ai-bhavishya-patrika",
    name: "AI Bhavishya Patrika",
    description: "An AI application for generating personalized predictions.",
    status: "Completed",
    progress: 100,
    tags: ["AI", "ML", "NLP"],
    featured: true,
  },
  {
    slug: "resume-analyzer",
    name: "Resume Analyzer",
    description: "An AI tool that analyzes resumes and gives feedback.",
    status: "Completed",
    progress: 100,
    tags: ["AI", "ML", "NLP"],
    featured: true,
  },
  {
    slug: "ai-plagiarism-detection",
    name: "AI Plagiarism Detection",
    description: "An AI system for detecting plagiarism in written text.",
    status: "Completed",
    progress: 100,
    tags: ["AI", "ML", "NLP"],
    featured: true,
  },
];
