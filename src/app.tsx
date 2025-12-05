import useEmblaCarousel from "embla-carousel-react";
import { User, SquareTerminal, Briefcase, Mail } from "lucide-react";

import Dash from "./Dash";
import TopBar from "./TopBar";
import { useWindowStore } from "./store/windowStore";
import { Window } from "./components/Window";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact as ContactSection } from "./components/Contact";
import { EmblaCarouselController } from "./components/EmblaCarouselController";

const menuItems = [
  { id: "about", label: "About", icon: User, component: <About /> },
  {
    id: "projects",
    label: "Projects",
    icon: SquareTerminal,
    component: <Projects />,
  },
  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
    component: <Experience />,
  },
  { id: "contact", label: "Contact", icon: Mail, component: <ContactSection /> },
];

export function App() {
  const { windows } = useWindowStore();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  return (
    <>
      <div className="relative lg:hidden">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex h-screen w-full">
            {menuItems.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] overflow-auto">
                {item.component}
              </div>
            ))}
          </div>
        </div>
        <EmblaCarouselController emblaApi={emblaApi} menuItems={menuItems} />
      </div>
      <div className="hidden lg:block">
        <TopBar />
        <div className="h-[calc(100vh-2rem)] w-full">
          {windows.map((window) => {
            return (
              <div
                key={window.id}
                className={`transition-[opacity,transform] duration-300 ease-in-out ${
                  window.isMinimized
                    ? "pointer-events-none translate-y-full scale-0 opacity-0"
                    : "translate-y-0 scale-100 opacity-100"
                }`}
              >
                <Window window={window}>{window.content}</Window>
              </div>
            );
          })}
        </div>
        <Dash />
      </div>
    </>
  );
}
