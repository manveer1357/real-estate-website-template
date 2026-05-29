"use client";
import Featured from "@/components/sub/Featured";
import { ScrollToSection, ScrollToTop } from "@/components/sub/ScrollButtons";
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
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
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
    <main className="-mt-17 w-full h-full space-y-8 no-scrollbar">
      <section className="h-screen w-full">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnc3HG5UJj-WaKjCUnYgOGUMczJxLimrJEHjuCy4SNxVuX1KLulQyaoJmUz5Gzz0zB8wHxxUQYQaC5cEZYMbJSAEOZfTytxD1j4CePRXHHB-OmDfcoqnBehKIkuPuozJKtlqW1AHyhOAj1gz_1R_qujcOByq7KduYsORFK7Ap0pmHFy0DWZm0Xz_7RSo4WSDE1ZdMXJ3U-CtnLxwISFiLkYwpNET1JL09uVzrKZ5WuAmYMyooHjzvYyfd_MzGu1Xi7GEHNOotehvc"
          alt=""
          className="object-cover w-full h-full max-w-screen"
        />
        <div className="w-full h-screen absolute top-0 z-1 backdrop-blur-xs bg-linear-to-t from-background via-background/30 to-100%"></div>
        <div className="w-full h-screen absolute top-0 z-2 p-4 flex flex-col items-start md:items-center justify-end md:justify-center gap-4 md:gap-12">
          <h1 className="font-bold text-4xl sm:text-5xl md:max-w-2xl md:text-center text-secondary">
            Find Your Next Architectural Masterpiece
          </h1>
          <Card className="h-fit w-full md:w-[80vw] bg-background p-4  sm:block">
            <FieldGroup className="flex sm:flex-row sm:items-end justify-around sm:gap-4 gap-2">
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
              <Button className="md:w-2/12 w-full mt-auto">
                <Search /> Explore
              </Button>
            </FieldGroup>
          </Card>
          <Separator className="max-w-2/10 bg-primary block md:hidden" />
          <ScrollToSection className="hidden md:block" />
        </div>
      </section>
      <Separator />
      <section className="md:p-8 p-2 space-y-8 w-full h-fit">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
          <p className="w-full text-primary tracking-widest font-semibold text-xs md:text-sm">
            THE COLLECTION
          </p>
          <div className="flex items-end justify-between w-full">
            <h1 className="font-bold text-xl md:text-2xl">
              Featured Properties
            </h1>
            <Button
              variant={"link"}
              size={"xs"}
              className="text-secondary hidden md:block"
            >
              View All Properties
            </Button>
          </div>
        </div>
        <Featured />
      </section>
      <section className="md:p-8 p-4 space-y-8 w-full h-fit bg-muted text-muted-foreground">
        <main className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div className="space-y-2 md:space-y-4 md:max-w-1/2">
            <p className="text-primary tracking-widest font-semibold text-xs md:text-sm">
              THE ADVISORY
            </p>
            <h1 className="font-semibold text-xl md:text-3xl text-secondary">
              Personalized Guidance For Global Portfolios
            </h1>
            <p className="text-sm">
              Our bespoke advisory service connects you with the world's most
              exclusive architectural treasures. Schedule a private consultation
              to discuss your vision.
            </p>
            <Card className="w-fit hidden md:block" size="sm">
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
          <div className="w-full md:w-1/2 relative">
            <Card className="md:w-2/3 mx-auto z-10 relative shadow-lg">
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
                <p className="font-semibold tracking-widest text-primary text-center">
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
            <Card className="hidden md:block absolute top-10 right-15 bg-card/50 border w-2/3 h-full z-5"></Card>
          </div>
        </main>
      </section>
    </main>
  );
}
