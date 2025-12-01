import { MapPin } from "lucide-react";

import profileData from "../data/profile.json";

export function About() {
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
