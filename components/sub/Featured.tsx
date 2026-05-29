"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Bath, BedDouble, MapPin, TriangleRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation";

const Featured = () => {
  const router = useRouter();
  return (
    <main className="flex items-center justify-center w-full h-fit">
      <Carousel
        opts={{
          watchDrag: true,
          dragFree: false,
        }}
        className="w-full sm:max-w-[90vw] select-none"
      >
        <CarouselContent className="md:p-4">
          {[...Array(5)].map((i, _) => (
            <CarouselItem key={_} className="basis-4/5 sm:basis-3/10">
              <Card
                size="sm"
                className="relative"
                onClick={() => router.push(`/properties/${_}`)}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi-PikkxIAwFHWl8TPp3gmk2PVysb7Sd7m6YpipKwY-cCazPba4Zw2G-Hs-f23lmvyqafvkHEvhg-s19VtOROb16gcAJEm-_0xMRJhm1nJoXJonr7hbU0uJmBBQqHLzrrMfK3opqpyjFUGORVwKVtVrEHY9kmEBhiNaqPhNdnpFOw0cYqMZ1V7iZl81Sdx3iN3dZjKtlxjnEWU2e7SEymUoqCWKdeuaMppc40xMTxkRQ-NdQ_omUOHb_ipIKJgVTi45uU9n43Bfdk"
                  alt=""
                  className="object-cover w-full aspect-square"
                />
                <span className="absolute top-2 left-2">
                  <Badge variant={"outline"} className="bg-background">
                    New Listing
                  </Badge>
                </span>
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-start justify-between gap-4">
                      <h1 className="font-semibold text-lg max-w-9/10">
                        The Zenith House
                      </h1>
                      <p className="text-primary font-semibold text-xl">
                        $18,750,000
                      </p>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    <p className="flex items-center justify-items-start gap-1 text-sm w-full">
                      <MapPin size={16} color="#000000" />
                      Bel Air, Los Angeles, CA
                    </p>
                  </CardDescription>
                </CardHeader>
                <Separator />
                <CardFooter className="gap-1 sm:gap-4 justify-around">
                  <span className="flex items-center text-xs justify-items-start gap-1">
                    <BedDouble size={16} /> 6 Beds
                  </span>
                  <span className="flex items-center text-xs justify-items-start gap-1">
                    <Bath size={16} /> 6 Baths
                  </span>
                  <span className="flex items-center text-xs justify-items-start gap-1">
                    <TriangleRight size={16} /> 12000 sq.ft
                  </span>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </main>
  );
};

export default Featured;
