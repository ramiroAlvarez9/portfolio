import { Calendar } from "lucide-react";

import profileData from "../data/profile.json";

export function Experience() {
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
