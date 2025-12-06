import { Mail, ExternalLink } from "lucide-react";
import { SlSocialLinkedin as LinkedIn } from "react-icons/sl";
import { FiGithub as Github } from "react-icons/fi";

import profileData from "../data/profile.json";

export function Contact() {
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
                className="glass-bg flex items-center gap-4 p-4 transition-all duration-200 xl:hover-bg xl:hover:scale-105"
                href={contact.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex size-10 items-center justify-center bg-blue-500/20">
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

        <div className="glass-bg mt-8 p-4">
          <h3 className="mb-3 font-semibold">Let&apos;s Connect</h3>
          <p className="mb-4 text-sm text-window-content opacity-75">
            Available for freelance projects and full-time opportunities.
          </p>
          <a
            className="block w-full bg-blue-500 px-4 py-2 text-center font-medium text-window-content transition-colors hover:bg-blue-600"
            href={`mailto:${contact.email}?subject=Contact from Portfolio&body=Hello Ramiro,%0D%0A%0D%0AI&apos;m reaching out regarding...`}
          >
            Send Message
          </a>
        </div>
      </div>
    </div>
  );
}
