import { Mail, MapPin, Calendar, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { SlSocialLinkedin as LinkedIn } from "react-icons/sl";
import { FiGithub as Github } from "react-icons/fi";

import profileData from "../data/profile.json";

export function AboutSection() {
  const { name, title, location, summary, skills } = profileData;

  const summaryParts = summary.split("Tech Stack:");
  const mainSummary = summaryParts[0];
  const techStack: { [key: string]: string } = {};

  if (summaryParts.length > 1) {
    const techString = summaryParts[1];
    const frontendMatch = techString.match(/Frontend:(.*?)(Backend:|Exploring:|$)/);

    if (frontendMatch) {
      techStack["Frontend"] = frontendMatch[1].trim();
    }
    const backendMatch = techString.match(/Backend:(.*?)(Exploring:|$)/);

    if (backendMatch) {
      techStack["Backend"] = backendMatch[1].trim();
    }
    const exploringMatch = techString.match(/Exploring:(.*?)(Specialized in|$)/);

    if (exploringMatch) {
      techStack["Additional"] = exploringMatch[1].trim().replace(/\.$/, "");
    }
  }

  return (
    <div className="p-6 text-window-content">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold">
          {name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div>
          <h1 className="mb-1 text-2xl font-bold">{name}</h1>
          <p className="mb-2 text-window-content opacity-75">{title}</p>
          <div className="flex items-center gap-2 text-sm text-window-content opacity-60">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="leading-relaxed text-window-content opacity-75">{mainSummary}</p>

        <div className="mt-6 space-y-4 text-window-content">
          {Object.entries(techStack).map(([key, value]) => (
            <div key={key} className="glass-bg rounded-lg p-4">
              <h3 className="mb-2 font-semibold text-window-content">{key}</h3>
              <p className="text-sm text-window-content opacity-75">{value as string}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4 text-window-content">
          <div className="glass-bg rounded-lg p-4">
            <h3 className="mb-2 font-semibold text-window-content">Languages</h3>
            {skills.languages.map((lang) => (
              <p key={lang.name} className="text-sm text-window-content opacity-75">
                {lang.name}: {lang.level}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [pinnedProjects, setPinnedProjects] = useState<
    {
      title: string;
      description: string;
      tech: string[];
      github: string;
    }[]
  >([]);

  useEffect(() => {
    interface PinnedRepo {
      author: string;
      name: string;
      description: string;
      language: string;
    }

    const fetchPinnedRepos = async () => {
      const cacheKey = "pinnedReposCache";
      const cachedData = localStorage.getItem(cacheKey);
      const now = new Date().getTime();
      const twentyFourHours = 24 * 60 * 60 * 1000;

      const processData = (data: PinnedRepo[]) => {
        const transformed = data.map((repo) => ({
          title: repo.name,
          description: repo.description || "No description provided.",
          tech: repo.language ? [repo.language] : [],
          github: `https://github.com/${repo.author}/${repo.name}`,
        }));

        setPinnedProjects(transformed);
      };

      if (cachedData) {
        const { timestamp, data } = JSON.parse(cachedData);

        if (now - timestamp < twentyFourHours) {
          processData(data);

          return;
        }
      }

      try {
        const response = await fetch("https://pinned.berrysauce.dev/get/ramiroAlvarez9");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const cachePayload = {
          timestamp: now,
          data: data,
        };

        localStorage.setItem(cacheKey, JSON.stringify(cachePayload));
        processData(data);
      } catch (error) {
        return error;
      }
    };

    fetchPinnedRepos();
  }, []);

  const renderProject = (
    project: {
      title: string;
      description: string;
      tech: string[];
      status?: string;
      github: string | null;
    },
    index: number,
  ) => (
    <div key={index} className="glass-bg glass-border rounded-lg border p-5">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-window-content">{project.title}</h3>
        {project.status && (
          <span
            className={`rounded-full px-2 py-1 text-xs ${
              project.status === "Completed" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"
            }`}
          >
            {project.status}
          </span>
        )}
      </div>
      <p className="mb-4 text-sm text-window-content opacity-75">{project.description}</p>
      <div className="mb-3 flex flex-wrap gap-2">
        {project.tech.map((tech: string, techIndex: number) => (
          <span key={techIndex} className="rounded bg-gray-700/50 px-2 py-1 text-xs text-window-content opacity-75">
            {tech}
          </span>
        ))}
      </div>
      {project.github && (
        <a
          className="flex items-center gap-2 text-sm text-window-content opacity-80 transition-all hover:opacity-100"
          href={project.github}
          rel="noopener noreferrer"
          target="_blank"
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

      <div>
        <h3 className="mb-4 text-lg font-semibold text-window-content">Personal Projects</h3>
        <div className="space-y-4">{pinnedProjects.map(renderProject)}</div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const experiences = profileData.experience;

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
                  <h3 className="font-semibold">{exp.position}</h3>
                  <div className="flex items-center gap-1 text-sm text-window-content">
                    <Calendar size={14} />
                    <span>{`${exp.startDate} - ${exp.endDate}`}</span>
                  </div>
                </div>
                <p className="mb-3 text-sm text-window-content ">{exp.company}</p>
                <ul className="mb-3 ml-5 list-disc space-y-1 text-sm text-window-content ">
                  {exp.description.map((descItem, descIndex) => (
                    <li key={descIndex}>{descItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactSection() {
  const { contact } = profileData;

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: LinkedIn,
      label: "LinkedIn",
      value: contact.linkedin.replace("www.", ""),
      href: `https://${contact.linkedin}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: contact.github.replace("https://", ""),
      href: contact.github,
    },
  ];

  return (
    <div className="p-6 text-window-content">
      <h2 className="mb-6 text-xl font-bold">Contact</h2>
      <div className="space-y-4">
        <p className="mb-6 text-window-content opacity-75">
          I&apos;m always interested in new opportunities and collaborations. Feel free to reach out if you&apos;d like
          to work together or just want to chat!
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
                  <p className="font-medium text-window-content">{contact.label}</p>
                  <p className="text-sm text-window-content opacity-60">{contact.value}</p>
                </div>
                <ExternalLink className="ml-auto text-window-content opacity-60" size={16} />
              </a>
            );
          })}
        </div>

        <div className="glass-bg glass-border mt-8 rounded-lg border p-4">
          <h3 className="mb-3 font-semibold">Let&apos;s Connect</h3>
          <p className="mb-4 text-sm text-window-content opacity-75">
            Available for freelance projects and full-time opportunities.
          </p>
          <a
            className="block w-full rounded-lg bg-blue-500 px-4 py-2 text-center font-medium text-window-content transition-colors hover:bg-blue-600"
            href={`mailto:${contact.email}?subject=Contact from Portfolio&body=Hello Ramiro,%0D%0A%0D%0AI&apos;m reaching out regarding...`}
          >
            Send Message
          </a>
        </div>
      </div>
    </div>
  );
}
