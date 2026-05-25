"use client";
import { ScrollToSection, ScrollToTop } from "@/components/ScrollButtons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Bath,
  BedDouble,
  Calendar1,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Search,
  TriangleRight,
} from "lucide-react";
import React from "react";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
    ),
  );
  return (
    <main className="-mt-17 w-full h-full space-y-8">
      <section className="h-screen w-full bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzzefpm1ncYI_5fNtHR5TadNou4P799yZGIPd9E17OTUoyoWBhQo0F2k6HubyGkTRW-cvozS6j7xli-NsSwaBJbgMqxvmpJN0FVL-ktYUHEAvdYUftIJn1RCZDNPJJlAzgwJqSyEerET9I2wTYMcgbNBXf02I59OjLU964jYz0HvfILVMg1wixTkU60lezlYQm-nJuDIr5Qv638wUEq_lRK7iVec0yXeZisT4K81vKJ66wiAqhlBcsAjXpZTZk2HV5oL1f8ZaxUUE')] bg-cover bg-center">
        <div className="w-full h-screen absolute top-0 z-1 backdrop-blur-xs bg-linear-to-t from-background to-90%"></div>
        <div className="w-full h-screen absolute top-0 z-2 p-4 flex flex-col items-center justify-center gap-12">
          <h1 className="font-bold text-5xl max-w-2xl text-center text-secondary">
            Find Your Next Architectural Masterpiece
          </h1>
          <div className="h-fit w-[90vw] bg-background p-4 rounded">
            <Field orientation={"horizontal"}>
              <Field>
                <FieldLabel htmlFor="location">Location</FieldLabel>
                <Input
                  type="text"
                  name="location"
                  placeholder="ABC City, XYZ"
                />
              </Field>
              <Separator orientation="vertical" />
              <Field>
                <FieldLabel>Price Range</FieldLabel>
                <Input type="text" placeholder="$10M - $20M" />
              </Field>
              <Separator orientation="vertical" />
              <Field>
                <FieldLabel>Property Type</FieldLabel>
                <Input type="text" placeholder="Villa" />
              </Field>
              <Button className="w-2/14 mt-auto">
                <Search /> Explore
              </Button>
            </Field>
          </div>
          <ScrollToSection />
        </div>
      </section>
      <Separator />
      <section className="md:p-8 p-2 space-y-8 w-full h-fit">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="w-full text-primary tracking-widest font-semibold text-sm">
            THE COLLECTION
          </p>
          <div className="flex items-end justify-between w-full">
            <h1 className="font-bold text-2xl">Featured Properties</h1>
            <Button variant={"link"} size={"xs"} className="text-secondary">
              View All Properties
            </Button>
          </div>
        </div>
        <main className="flex items-center justify-center w-full h-fit">
          <Carousel className="w-full max-w-9/10">
            <CarouselContent className="p-4">
              <CarouselItem className="basis-3/10">
                <Card size="sm" className="relative">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi-PikkxIAwFHWl8TPp3gmk2PVysb7Sd7m6YpipKwY-cCazPba4Zw2G-Hs-f23lmvyqafvkHEvhg-s19VtOROb16gcAJEm-_0xMRJhm1nJoXJonr7hbU0uJmBBQqHLzrrMfK3opqpyjFUGORVwKVtVrEHY9kmEBhiNaqPhNdnpFOw0cYqMZ1V7iZl81Sdx3iN3dZjKtlxjnEWU2e7SEymUoqCWKdeuaMppc40xMTxkRQ-NdQ_omUOHb_ipIKJgVTi45uU9n43Bfdk"
                    alt=""
                    className="object-cover w-full"
                  />
                  <span className="absolute top-2 left-2">
                    <Badge variant={"outline"} className="bg-background">
                      New Listing
                    </Badge>
                  </span>
                  <CardHeader>
                    <CardTitle>
                      <h1 className="font-semibold text-lg">
                        The Zenith House
                      </h1>
                    </CardTitle>
                    <CardDescription>
                      <p className="flex items-start justify-items-start gap-1 w-full">
                        <MapPin size={20} />
                        Bel Air, Los Angeles, CA
                      </p>
                    </CardDescription>
                    <CardAction>
                      <p className="text-primary font-semibold text-xl">
                        $18,750,000
                      </p>
                    </CardAction>
                  </CardHeader>
                  <Separator />
                  <CardFooter className="gap-4 justify-between">
                    <span className="flex items-center text-xs justify-items-start gap-2">
                      <BedDouble size={16} /> 6 Beds
                    </span>
                    <span className="flex items-center text-xs justify-items-start gap-2">
                      <Bath size={16} /> 6 Baths
                    </span>
                    <span className="flex items-center text-xs justify-items-start gap-2">
                      <TriangleRight size={16} /> 12,000 sq.ft
                    </span>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-3/10">
                <Card size="sm" className="relative">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi-PikkxIAwFHWl8TPp3gmk2PVysb7Sd7m6YpipKwY-cCazPba4Zw2G-Hs-f23lmvyqafvkHEvhg-s19VtOROb16gcAJEm-_0xMRJhm1nJoXJonr7hbU0uJmBBQqHLzrrMfK3opqpyjFUGORVwKVtVrEHY9kmEBhiNaqPhNdnpFOw0cYqMZ1V7iZl81Sdx3iN3dZjKtlxjnEWU2e7SEymUoqCWKdeuaMppc40xMTxkRQ-NdQ_omUOHb_ipIKJgVTi45uU9n43Bfdk"
                    alt=""
                    className="object-cover w-xs"
                  />
                  <span className="absolute top-2 left-2">
                    <Badge variant={"outline"} className="bg-background">
                      New Listing
                    </Badge>
                  </span>
                  <CardHeader>
                    <CardTitle>
                      <h1 className="font-semibold text-lg max-w-2/3">
                        The Zenith House
                      </h1>
                    </CardTitle>
                    <CardDescription>
                      <span className="flex items-center justify-items-start gap-2 w-full">
                        <MapPin />
                        Bel Air, Los Angeles, CA
                      </span>
                    </CardDescription>
                    <CardAction>
                      <p className="text-primary font-semibold text-xl">
                        $18,750,000
                      </p>
                    </CardAction>
                  </CardHeader>
                  <Separator />
                  <CardFooter className="gap-4 justify-between">
                    <span className="flex items-center text-sm justify-items-start gap-2">
                      <BedDouble size={16} /> 6 Beds
                    </span>
                    <span className="flex items-center text-sm justify-items-start gap-2">
                      <Bath size={16} /> 6 Baths
                    </span>
                    <span className="flex items-center text-sm justify-items-start gap-2">
                      <TriangleRight size={16} /> 12,000 sq.ft
                    </span>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-3/10">
                <Card size="sm" className="relative">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi-PikkxIAwFHWl8TPp3gmk2PVysb7Sd7m6YpipKwY-cCazPba4Zw2G-Hs-f23lmvyqafvkHEvhg-s19VtOROb16gcAJEm-_0xMRJhm1nJoXJonr7hbU0uJmBBQqHLzrrMfK3opqpyjFUGORVwKVtVrEHY9kmEBhiNaqPhNdnpFOw0cYqMZ1V7iZl81Sdx3iN3dZjKtlxjnEWU2e7SEymUoqCWKdeuaMppc40xMTxkRQ-NdQ_omUOHb_ipIKJgVTi45uU9n43Bfdk"
                    alt=""
                    className="object-cover w-xs"
                  />
                  <span className="absolute top-2 left-2">
                    <Badge variant={"outline"} className="bg-background">
                      New Listing
                    </Badge>
                  </span>
                  <CardHeader>
                    <CardTitle>
                      <h1 className="font-semibold text-lg max-w-2/3">
                        The Zenith House
                      </h1>
                    </CardTitle>
                    <CardDescription>
                      <span className="flex items-center justify-items-start gap-2 w-full">
                        <MapPin />
                        Bel Air, Los Angeles, CA
                      </span>
                    </CardDescription>
                    <CardAction>
                      <p className="text-primary font-semibold text-xl">
                        $18,750,000
                      </p>
                    </CardAction>
                  </CardHeader>
                  <Separator />
                  <CardFooter className="gap-4 justify-between">
                    <span className="flex items-center text-sm justify-items-start gap-2">
                      <BedDouble size={16} /> 6 Beds
                    </span>
                    <span className="flex items-center text-sm justify-items-start gap-2">
                      <Bath size={16} /> 6 Baths
                    </span>
                    <span className="flex items-center text-sm justify-items-start gap-2">
                      <TriangleRight size={16} /> 12,000 sq.ft
                    </span>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-3/10">
                <Card size="sm" className="relative">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi-PikkxIAwFHWl8TPp3gmk2PVysb7Sd7m6YpipKwY-cCazPba4Zw2G-Hs-f23lmvyqafvkHEvhg-s19VtOROb16gcAJEm-_0xMRJhm1nJoXJonr7hbU0uJmBBQqHLzrrMfK3opqpyjFUGORVwKVtVrEHY9kmEBhiNaqPhNdnpFOw0cYqMZ1V7iZl81Sdx3iN3dZjKtlxjnEWU2e7SEymUoqCWKdeuaMppc40xMTxkRQ-NdQ_omUOHb_ipIKJgVTi45uU9n43Bfdk"
                    alt=""
                    className="object-cover w-xs"
                  />
                  <span className="absolute top-2 left-2">
                    <Badge variant={"outline"} className="bg-background">
                      New Listing
                    </Badge>
                  </span>
                  <CardHeader>
                    <CardTitle>
                      <h1 className="font-semibold text-lg max-w-2/3">
                        The Zenith House
                      </h1>
                    </CardTitle>
                    <CardDescription>
                      <span className="flex items-center justify-items-start gap-2 w-full">
                        <MapPin />
                        Bel Air, Los Angeles, CA
                      </span>
                    </CardDescription>
                    <CardAction>
                      <p className="text-primary font-semibold text-xl">
                        $18,750,000
                      </p>
                    </CardAction>
                  </CardHeader>
                  <Separator />
                  <CardFooter className="gap-4 justify-between">
                    <span className="flex items-center text-sm justify-items-start gap-2">
                      <BedDouble size={16} /> 6 Beds
                    </span>
                    <span className="flex items-center text-sm justify-items-start gap-2">
                      <Bath size={16} /> 6 Baths
                    </span>
                    <span className="flex items-center text-sm justify-items-start gap-2">
                      <TriangleRight size={16} /> 12,000 sq.ft
                    </span>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </main>
      </section>
      <section className="md:p-8 p-2 space-y-8 w-full h-fit bg-muted text-muted-foreground">
        <main className="flex items-center justify-between">
          <div className="space-y-4 max-w-1/2">
            <p className="text-primary tracking-widest font-semibold text-sm">
              THE ADVISORY
            </p>
            <h1 className="font-semibold text-3xl text-secondary">
              Personalized Guidance For Global Portfolios
            </h1>
            <p>
              Our bespoke advisory service connects you with the world's most
              exclusive architectural treasures. Schedule a private consultation
              to discuss your vision.
            </p>
            <Card className="w-fit" size="sm">
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  // month={currentMonth}
                  // onMonthChange={setCurrentMonth}
                  fixedWeeks
                  className="p-0 [--cell-size:--spacing(9)]"
                />
              </CardContent>
              <CardFooter className="flex items-center justify-center border-t">
                <Button variant={"secondary"} className="w-full">
                  Confirm Appointment
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="w-1/2 relative">
            <Card
              size="default"
              className="w-2/3 mx-auto z-10 relative shadow-lg"
            >
              <CardContent className="flex flex-col items-center justify-center gap-2">
                <div className="rounded-full overflow-hidden w-45 p-1 border-2 border-primary">
                  <img
                    src="https://github.com/shadcn.png"
                    alt=""
                    className="object-cover rounded-full"
                  />
                </div>
                <CardTitle className="font-semibold text-secondary text-xl">
                  Marcus Thomas
                </CardTitle>
                <p className="font-semibold tracking-widest text-primary">
                  GLOBAL PORTFOLIO ADVISOR
                </p>
                <CardDescription className="italic max-w-xs text-center mt-6">
                  "Architecture is the silent language of prestige. My goal is
                  to find the space that speaks your vernacular of success."
                </CardDescription>
              </CardContent>
              <CardFooter className="flex items-center text-muted-foreground justify-center gap-8 py-4">
                <a href="mailto:mnvr269@gmail.com">
                  <Mail />
                </a>
                <a href="#">
                  <Phone />
                </a>
                <a href="#">
                  <Calendar1 />
                </a>
              </CardFooter>
            </Card>
            <div className="absolute top-10 right-15 bg-card/50 border w-2/3 h-full z-5"></div>
          </div>
        </main>
      </section>
    </main>
  );
}
