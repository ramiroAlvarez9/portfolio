import type { EmblaCarouselType } from "embla-carousel";
import { useState, useEffect, useCallback } from "preact/hooks";
import { clsx } from "clsx";
import type { LucideProps } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  component: React.ReactNode;
}

interface EmblaCarouselControllerProps {
  emblaApi: EmblaCarouselType | undefined;
  menuItems: MenuItem[];
}

export function EmblaCarouselController({ emblaApi, menuItems }: EmblaCarouselControllerProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <nav className="glass-bg glass-border fixed bottom-4 left-1/2 z-[1000] flex -translate-x-1/2 flex-row gap-1 rounded-xl border p-1 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-in-out lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:flex-col">
      {menuItems.map((item, index) => {
        const IconComponent = item.icon;

        return (
          <button
            key={item.id}
            className={clsx(
              "ease relative flex size-8 cursor-pointer flex-col items-center justify-center rounded-lg border-none bg-transparent p-2 transition-all duration-200 hover:scale-110",
              selectedIndex === index && "active-bg scale-105",
            )}
            title={item.label}
            type="button"
            onClick={() => scrollTo(index)}
          >
            <IconComponent size={20} />
            <div
              className={clsx(
                "ease absolute bottom-1 h-1 w-1 rounded-full transition-all duration-200 lg:bottom-auto lg:left-0 lg:h-3 lg:w-1",
                selectedIndex === index ? "indicator-bg" : "bg-transparent",
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}
