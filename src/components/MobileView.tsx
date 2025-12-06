import useEmblaCarousel from "embla-carousel-react";
import { User, SquareTerminal, Briefcase, Mail } from "lucide-react";

import TopBar from "../TopBar";
import { About } from "./About";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Contact as ContactSection } from "./Contact";
import { EmblaCarouselController } from "./EmblaCarouselController";

const menuItems = [
  { id: "about", label: "About", icon: User, component: <About /> },
  { id: "projects", label: "Projects", icon: SquareTerminal, component: <Projects /> },
  { id: "experience", label: "Experience", icon: Briefcase, component: <Experience /> },
  { id: "contact", label: "Contact", icon: Mail, component: <ContactSection /> },
];

export function MobileView() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    duration: 25,
    dragFree: false,
  });

  return (
    <>
      <TopBar />
      <div className="relative bg-[var(--window-bg)] shadow-[var(--shadow-window)] lg:hidden">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex h-screen w-full transition-transform duration-300 ease-out">
            <div className="flex-[0_0_100%] overflow-auto pb-24">
              {menuItems[0].component}
              <div className="h-[10vh]" />
            </div>
            <div className="flex-[0_0_100%] overflow-auto pb-24">
              {menuItems[1].component}
              <div className="h-[10vh]" />
            </div>
            <div className="flex-[0_0_100%] overflow-auto pb-24">
              {menuItems[2].component}
              <div className="h-[10vh]" />
            </div>
            <div className="flex-[0_0_100%] overflow-auto pb-24">
              {menuItems[3].component}
              <div className="h-[10vh]" />
            </div>
          </div>
        </div>
        <EmblaCarouselController emblaApi={emblaApi} menuItems={menuItems} />
      </div>
    </>
  );
}
