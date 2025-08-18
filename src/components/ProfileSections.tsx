import { Github, Linkedin, Mail, MapPin, Calendar, ExternalLink } from "lucide-react";

export function AboutSection() {
  return (
    <div className="p-6 text-window-content">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold">
          RA
        </div>
        <div>
          <h1 className="mb-1 text-2xl font-bold">Ramiro Alvarez</h1>
          <p className="mb-2 text-window-content opacity-75">Full-Stack Developer | Remote | Buenos Aires, Argentina</p>
          <div className="flex items-center gap-2 text-sm text-window-content opacity-60">
            <MapPin size={16} />
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="leading-relaxed text-window-content opacity-75">
          Full-stack developer with expertise in modern web technologies and React ecosystem. Specialized in TypeScript and React.js, with experience building scalable full-stack applications using cutting-edge tools.
        </p>

        <div className="mt-6 space-y-4">
          <div className="glass-bg rounded-lg p-4">
            <h3 className="mb-2 font-semibold">Frontend</h3>
            <p className="text-sm text-window-content opacity-75">React.js, TypeScript, Tailwind CSS</p>
          </div>
          <div className="glass-bg rounded-lg p-4">
            <h3 className="mb-2 font-semibold">Full-Stack</h3>
            <p className="text-sm text-window-content opacity-75">Remix, SQL, Cloudflare</p>
          </div>
          <div className="glass-bg rounded-lg p-4">
            <h3 className="mb-2 font-semibold">Backend</h3>
            <p className="text-sm text-window-content opacity-75">Node.js, RESTful APIs, database design</p>
          </div>
          <div className="glass-bg rounded-lg p-4">
            <h3 className="mb-2 font-semibold">Additional</h3>
            <p className="text-sm text-window-content opacity-75">Rust (experimental projects), real-time audio processing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const personalProjects = [
    {
      title: "🎵 Audio Pitch Detector",
      description: "A browser-based musical note detector that analyzes audio input in real-time to identify pitch and musical notes with accurate pitch detection algorithms.",
      tech: ["JavaScript", "Web Audio API", "Real-time Processing"],
      status: "Completed",
      github: "https://github.com/ramiroAlvarez9/detect-audio-pitch",
    },
    {
      title: "⚽ Soccer Players Backend",
      description: "Backend API for managing soccer player data with comprehensive scoring and statistics system, featuring scalable architecture and data validation.",
      tech: ["TypeScript", "Node.js", "RESTful API"],
      status: "Completed",
      github: "https://github.com/ramiroAlvarez9/soccer-players-be",
    },
    {
      title: "🔗 ShortLink Service",
      description: "Complete URL shortening service with modern React frontend and high-performance Rust backend for fast URL processing and scalable architecture.",
      tech: ["TypeScript", "React", "Rust", "Database Integration"],
      status: "Completed",
      github: "https://github.com/ramiroAlvarez9/shortlink-front",
    },
    {
      title: "🌐 BCN-Tec Frontend",
      description: "Modern web application frontend built with React patterns and TypeScript for enhanced type safety and component-based architecture.",
      tech: ["TypeScript", "React.js", "Modern UI Components"],
      status: "Completed",
      github: "https://github.com/ramiroAlvarez9/bcn-tec-frontend",
    },
  ];

  const professionalProjects = [
    {
      title: "💼 Morfar - Restaurant Menu Management",
      description: "Complete menu handling solution for restaurants with integrated CMS functionality. Developed critical features for product image management and database seeding systems.",
      tech: ["React (Remix)", "Tailwind CSS", "SQLite", "Cloudflare"],
      status: "Completed",
      github: "https://github.com/ramiroAlvarez9/morfar",
    },
    {
      title: "🏢 FirstClose MVP & New Product",
      description: "Co-developed MVP from conception to deployment, currently building new product features with monthly stakeholder presentations and cross-functional team collaboration.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zod", "TanStack Query"],
      status: "In Development",
      github: null,
    },
    {
      title: "📱 DigitalMeri Web Application",
      description: "Next.js full-stack development with focus on API integration and content management. Implemented Contentful API setup and data integration.",
      tech: ["Next.js", "TypeScript", "Contentful CMS"],
      status: "Completed",
      github: null,
    },
  ];

  const renderProject = (project: any, index: number) => (
    <div key={index} className="glass-bg glass-border rounded-lg border p-5">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-window-content">{project.title}</h3>
        <span
          className={`rounded-full px-2 py-1 text-xs ${
            project.status === "Completed" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"
          }`}
        >
          {project.status}
        </span>
      </div>
      <p className="mb-4 text-sm text-window-content opacity-75">{project.description}</p>
      <div className="mb-3 flex flex-wrap gap-2">
        {project.tech.map((tech: string, techIndex: number) => (
          <span
            key={techIndex}
            className="rounded bg-gray-700/50 px-2 py-1 text-xs text-window-content opacity-75"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-window-content opacity-80 transition-all hover:opacity-100"
        >
          <ExternalLink size={14} />
          View on GitHub
        </a>
      )}
    </div>
  );

  return (
    <div className="p-6 text-window-content">
      <h2 className="mb-6 text-xl font-bold">Projects</h2>
      
      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-window-content">Professional Projects</h3>
        <div className="space-y-4">
          {professionalProjects.map(renderProject)}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-window-content">Personal Projects</h3>
        <div className="space-y-4">
          {personalProjects.map(renderProject)}
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend Web Developer",
      company: "FirstClose (via Koplus)",
      period: "Oct 2024 - Present",
      description:
        "Co-developed Minimum Viable Product (MVP) from conception to deployment. Currently developing a new company product using React, Vite, and Tailwind CSS. Collaborated with design team to align UI component decisions and coordinated with backend team for API integration. Delivered monthly demos in English to showcase product progress to stakeholders.",
      skills: ["React", "TypeScript", "Styled Components", "Axios", "Yup", "Vite", "Tailwind CSS", "Zod", "TanStack Query"],
    },
    {
      title: "Frontend Web Developer",
      company: "Koplus, Inc.",
      period: "Aug 2024 - Sep 2024",
      description:
        "Frontend development using modern technologies and frameworks, contributing to web application development with focus on modern React ecosystem.",
      skills: ["React", "TypeScript", "Modern Frontend Technologies"],
    },
    {
      title: "Frontend Developer",
      company: "DigitalMeri",
      period: "Mar 2024 - Jun 2024",
      description:
        "Contributed to web application development using Next.js framework. Leveraged TypeScript and Contentful.js for enhanced functionality and content management. Acted as full-stack developer, setting up Contentful API and integrating data within Next.js applications.",
      skills: ["Next.js", "TypeScript", "Contentful.js", "API Integration", "Full-Stack Development"],
    },
  ];

  return (
    <div className="p-6 text-window-content">
      <h2 className="mb-6 text-xl font-bold">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="size-3 rounded-full bg-blue-500" />
                {index < experiences.length - 1 && <div className="mt-2 h-16 w-px bg-gray-600" />}
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-window-content">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="mb-3 text-sm text-window-content ">{exp.company}</p>
                <p className="mb-3 text-sm text-window-content ">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="rounded bg-gray-700/50 px-2 py-1 text-window-content">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ramiro.al.alvarez@gmail.com",
      href: "mailto:ramiro.al.alvarez@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ramiro-alejandro-alvarez-80a432128",
      href: "https://www.linkedin.com/in/ramiro-alejandro-alvarez-80a432128/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ramiroalvarez9",
      href: "https://github.com/ramiroalvarez9",
    },
  ];

  return (
    <div className="p-6 text-window-content">
      <h2 className="mb-6 text-xl font-bold">Contact</h2>
      <div className="space-y-4">
        <p className="mb-6 text-window-content opacity-75">
          I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work
          together or just want to chat!
        </p>

        <div className="space-y-4">
          {contactMethods.map((contact, index) => {
            const IconComponent = contact.icon;

            return (
              <a
                key={index}
                className="glass-bg glass-border hover-bg flex items-center gap-4 rounded-lg border p-4 transition-all duration-200 hover:scale-105"
                href={contact.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500/20">
                  <IconComponent className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="font-medium">{contact.label}</p>
                  <p className="text-sm text-window-content opacity-60">{contact.value}</p>
                </div>
                <ExternalLink className="ml-auto text-window-content opacity-60" size={16} />
              </a>
            );
          })}
        </div>

        <div className="glass-bg glass-border mt-8 rounded-lg border p-4">
          <h3 className="mb-3 font-semibold">Let's Connect</h3>
          <p className="mb-4 text-sm text-window-content opacity-75">
            Available for freelance projects and full-time opportunities.
          </p>
          <a 
            href="mailto:ramiro.al.alvarez@gmail.com?subject=Contact from Portfolio&body=Hello Ramiro,%0D%0A%0D%0AI'm reaching out regarding..."
            className="block w-full rounded-lg bg-blue-500 px-4 py-2 font-medium text-center transition-colors hover:bg-blue-600 text-white"
          >
            Send Message
          </a>
        </div>
      </div>
    </div>
  );
}
