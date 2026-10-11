export const profile = {
  name: "Aaroh Dharmadhikari",
  firstName: "Aaroh",
  title: "Full Stack Developer",
  subtitle: "AI Powered Developer",
  education: {
    degree: "B.Tech, Artificial Intelligence & Data Science",
    institution: "Vishwakarma University",
  },
  location: "Pune, India",
  timezone: "Asia/Kolkata",
  availability: "Open to opportunities",
  portraitSrc: "/images/portrait.jpg",
  // Add public/resume.pdf, then set this to "/resume.pdf" to activate the
  // download button in the nav. Left empty, the button doesn't render.
  resumeUrl: "",
  // Fill these in before deploying — the Contact section and footer only
  // render what's provided here, nothing is fabricated as a placeholder.
  email: "say2aaroh@gmail.com", // e.g. "aaroh@example.com"
  social: {
    github: "https://github.com/aarohDharmadhikari", // e.g. "https://github.com/yourusername"
    linkedin: "https://www.linkedin.com/in/aarohdharmadhikari/", // e.g. "https://linkedin.com/in/yourusername"
  },
};

export const navSections = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
