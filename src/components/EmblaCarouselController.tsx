import type { EmblaCarouselType } from "embla-carousel";
import { useState, useEffect, useCallback } from "preact/hooks";
import { clsx } from "clsx";

interface MenuItem {
  id: string;
  label: string;
  icon: any;
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
  }, [emblaApi, setSelectedIndex]);

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
    <nav className="glass-bg glass-border fixed top-1/2 left-1 z-[1000] flex -translate-y-1/2 flex-col gap-1 rounded-xl border p-1 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-in-out">
      {menuItems.map((item, index) => {
        const IconComponent = item.icon;

        return (
          <button
            key={item.id}
            className={clsx(
              "ease hover-bg relative flex size-8 cursor-pointer flex-col items-center justify-center rounded-lg border-none bg-transparent p-2 transition-all duration-200 hover:scale-110 active:scale-95",
              selectedIndex === index && "active-bg scale-105",
            )}
            title={item.label}
            type="button"
            onClick={() => scrollTo(index)}
          >
            <IconComponent size={20} />
            <div
              className={clsx(
                "ease absolute left-0 h-3 w-1 rounded-full transition-all duration-200",
                selectedIndex === index ? "indicator-bg" : "bg-transparent",
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}
