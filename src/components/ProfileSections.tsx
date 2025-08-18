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
          <p className="mb-2 text-window-content opacity-75">Full Stack Developer</p>
          <div className="flex items-center gap-2 text-sm text-window-content opacity-60">
            <MapPin size={16} />
            <span>Remote</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="leading-relaxed text-window-content opacity-75">
          Passionate full-stack developer with expertise in modern web technologies. I love building user-centric
          applications with clean, maintainable code and excellent user experiences.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="glass-bg rounded-lg p-4">
            <h3 className="mb-2 font-semibold">Frontend</h3>
            <p className="text-sm text-window-content opacity-75">React, TypeScript, Tailwind CSS</p>
          </div>
          <div className="glass-bg rounded-lg p-4">
            <h3 className="mb-2 font-semibold">Backend</h3>
            <p className="text-sm text-window-content opacity-75">Node.js, Python, PostgreSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio OS",
      description:
        "A desktop-like portfolio built with Preact and TypeScript featuring draggable windows and theme switching.",
      tech: ["Preact", "TypeScript", "Tailwind CSS", "Zustand"],
      status: "In Development",
    },
    {
      title: "Task Management App",
      description: "Full-stack task management application with real-time collaboration and team features.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      status: "Completed",
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with payment integration and admin dashboard.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      status: "Completed",
    },
  ];

  return (
    <div className="p-6 text-window-content">
      <h2 className="mb-6 text-xl font-bold">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="glass-bg glass-border rounded-lg border p-5">
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-lg font-semibold text-window-content ">{project.title}</h3>
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
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded bg-gray-700/50 px-2 py-1 text-xs text-window-content opacity-75"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button className="flex items-center gap-2 text-sm text-window-content opacity-80 transition-all hover:opacity-100">
              <ExternalLink size={14} />
              View Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Lead development of client-facing applications using React, Node.js, and cloud technologies. Mentored junior developers and improved team productivity by 40%.",
      skills: ["React", "Node.js", "AWS", "Team Leadership"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications for various clients. Specialized in React and modern CSS frameworks with focus on performance optimization.",
      skills: ["React", "JavaScript", "CSS", "Performance Optimization"],
    },
    {
      title: "Junior Developer",
      company: "Startup Ventures",
      period: "2019 - 2020",
      description:
        "Started career building web applications and learning modern development practices. Contributed to multiple projects and gained experience with agile methodologies.",
      skills: ["HTML", "CSS", "JavaScript", "Git"],
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
      value: "ramiro.alvarez@example.com",
      href: "mailto:ramiro.alvarez@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ramiroalvarez",
      href: "https://linkedin.com/in/ramiroalvarez",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ramiroalvarez",
      href: "https://github.com/ramiroalvarez",
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
          <button className="w-full rounded-lg bg-blue-500 px-4 py-2 font-medium transition-colors hover:bg-blue-600">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
