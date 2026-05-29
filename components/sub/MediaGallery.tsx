"use client";

import * as React from "react";
import Image from "next/image";
import { Camera, Map, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Mock data representing your building images
const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Exterior modern villa at dusk",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Minimalist living room",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    alt: "Modern black and gold kitchen",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    alt: "Aerial view of estate",
  },
  // Add as many images as you'd like
];

export default function PropertyBrowser() {
  const [mainApi, setMainApi] = React.useState<CarouselApi>();
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Sync the thumbnail state when the main carousel slides
  React.useEffect(() => {
    if (!mainApi || !thumbApi) return;

    const onSelect = () => {
      const index = mainApi.selectedScrollSnap();
      setSelectedIndex(index);
      thumbApi.scrollTo(index);
    };

    mainApi.on("select", onSelect);
    return () => {
      mainApi.off("select", onSelect);
    };
  }, [mainApi, thumbApi]);

  // Handle clicking a thumbnail directly
  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi, thumbApi],
  );

  return (
    <div className="w-full h-full mx-auto select-none">
      {/* 2-Column Layout: Main Content (Left) & Thumbnails (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[85vh]">
        {/* ================= LEFT: MAIN VIEWPORT ================= */}
        <div className="relative md:col-span-3 rounded-2xl overflow-hidden group h-full md:h-full bg-neutral-900 aspect-video">
          <Carousel
            setApi={setMainApi}
            className="w-full h-full [&>div]:h-full"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="h-full ml-0">
              {images.map((img) => (
                <CarouselItem
                  key={img.id}
                  className="relative h-full w-full pl-0 shrink-0 grow-0 basis-full"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1920px) 100vw, 75vw"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom Forward / Backward Arrow Navigation */}
          <div className="absolute inset-y-0 left-2 md:left-4 flex items-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full w-9 aspect-square bg-white/80 hover:bg-white backdrop-blur-sm"
              onClick={() => mainApi?.scrollPrev()}
              disabled={!mainApi?.canScrollPrev()}
            >
              <ChevronLeft className="h-5 text-neutral-800" />
            </Button>
          </div>
          <div className="absolute inset-y-0 right-2 md:right-4 flex items-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full aspect-square w-9 bg-white/80 hover:bg-white backdrop-blur-sm"
              onClick={() => mainApi?.scrollNext()}
              disabled={!mainApi?.canScrollNext()}
            >
              <ChevronRight className="h-5 text-neutral-800" />
            </Button>
          </div>
        </div>

        {/* ================= RIGHT: THUMBNAILS PANEL ================= */}
        {/* On desktop, it's a vertical list. On mobile, it falls back to a horizontal scrollable row */}
        <div className="md:col-span-1 h-full">
          <Carousel
            setApi={setThumbApi}
            opts={{ containScroll: "keepSnaps", dragFree: true }}
            orientation="horizontal"
            className="w-full h-full md:hidden" // Mobile Carousel Configuration
          >
            <CarouselContent className="flex gap-2 ml-0 p-2">
              {images.map((img, index) => (
                <CarouselItem
                  key={img.id}
                  onClick={() => onThumbClick(index)}
                  className={cn(
                    "relative basis-1/3 aspect-video rounded-xl overflow-hidden cursor-pointer shrink-0 transition-all border-2",
                    selectedIndex === index
                      ? "border-white ring-2 ring-primary"
                      : "border-transparent opacity-60",
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1920px) 100vw, 75vw"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Desktop Only Vertical List View (Replicating your exact layout) */}
          <div className="hidden md:flex flex-col gap-3 h-full overflow-y-auto pr-1">
            {images.slice(0, 3).map((img, index) => {
              const isLastStaticThumb = index === 2;
              const hasMoreImages = images.length > 3;

              return (
                <div
                  key={img.id}
                  onClick={() => onThumbClick(index)}
                  className={cn(
                    "relative flex-1 rounded-2xl overflow-hidden cursor-pointer transition-all border-2 min-h-30",
                    selectedIndex === index
                      ? "border-neutral-900 scale-[0.98]"
                      : "border-transparent opacity-70 hover:opacity-100",
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />

                  {/* If it's the 3rd image slot and there are more images in array, show the overlay */}
                  {isLastStaticThumb && hasMoreImages && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[1px]">
                      <span className="text-white text-xs font-semibold tracking-widest uppercase">
                        + {images.length - 3} More
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
