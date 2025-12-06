import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export function Projects() {
  const [pinnedProjects, setPinnedProjects] = useState<
    {
      title: string;
      description: string;
      tech: string[];
      github: string;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    interface PinnedRepo {
      author: string;
      name: string;
      description: string;
      language: string;
    }

    const fetchPinnedRepos = async () => {
      setIsLoading(true);
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
          setIsLoading(false);

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
      } finally {
        setIsLoading(false);
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
    <div key={index} className="glass-bg p-5">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-window-content">{project.title}</h3>
        {project.status && (
          <span
            className={`rounded-full px-2 py-1 text-xs ${
              project.status === "Completed"
                ? "bg-green-500/20 text-green-600 dark:text-green-400"
                : "bg-blue-500/20 text-blue-600 dark:text-blue-400"
            }`}
          >
            {project.status}
          </span>
        )}
      </div>
      <p className="mb-4 text-sm text-window-content opacity-75">{project.description}</p>
      <div className="mb-3 flex flex-wrap gap-2">
        {project.tech.map((tech: string, techIndex: number) => (
          <span
            key={techIndex}
            className="rounded bg-[var(--window-secondary)] px-2 py-1 text-xs text-window-content opacity-75"
          >
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
        {isLoading && pinnedProjects.length === 0 ? (
          <div className="flex h-32 items-center justify-center">
            <div className="size-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
          </div>
        ) : (
          <div className="space-y-4">{pinnedProjects.map(renderProject)}</div>
        )}
      </div>
    </div>
  );
}
