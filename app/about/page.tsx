import {
  ChevronDown,
  Diamond,
  DraftingCompass,
  Earth,
  Gem,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import { ScrollToSection, ScrollToTop } from "@/components/sub/ScrollButtons";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <main className="-mt-17 w-full h-full space-y-8 relative">
      <section className="relative h-screen w-full bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAAArHTzZ24lA0WwTaeA38DHPeprpbt7h434c87VPPCYgSSz7GX4_u6progTwKU_A4DUswBY18jiYvlEHqgN2w781qirZ7Thd3gdCIKppBrQA54tNe-BKWYGHAJSn-cHWElarXrJ3aaMfUgQlZVP9356flOAuDs8SEWtxdtR_MGF4l0clyj8e6yjDziHIZozmHnt0s-8Bdf51_1AypPUAfah1ebZJ2NWeJ4qaciNAyKrMQvyUlD3zguQt51UU7FsUaqB2JnZZnSXk')] bg-cover bg-center">
        <div className="w-full h-screen absolute top-0 z-1 backdrop-blur-xs bg-linear-to-r from-background/55 to-70%"></div>
        <div className="md:w-1/2 h-screen absolute top-0 z-2 p-8 pb-30 md:pb-8 flex flex-col items-start justify-end md:justify-center gap-4 md:gap-8">
          <p className="w-full text-primary tracking-widest font-semibold text-sm">
            OUR VISION
          </p>
          <h1 className="font-bold text-2xl md:text-5xl md:max-w-lg">
            DEFINING THE ART OF LIVING
          </h1>
          <p className="max-w-md text-sm">
            Beyond the structure, we curate legacies. Aesthetiq Lumina is the
            vanguard of architectural distinction, where every residence is a
            silent testament to excellence.
          </p>
          <span className="w-full max-w-lg flex items-center justify-items-start gap-2 italic text-secondary font-semibold">
            <Separator className="max-w-3/10 bg-primary" />
            Est. 1984
          </span>
        </div>
        <ScrollToSection className="hidden md:block" />
      </section>
      <section className="w-full h-fit md:p-8 p-2 space-y-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="max-w-lg h-full space-y-4">
          <h1 className="font-semibold text-2xl">A Legacy of Discretion</h1>
          <p className="text-sm md:text-lg">
            Founded on the principles of absolute privacy and architectural
            integrity, Aesthetiq Lumina has spent four decades quietly shaping
            the world's most exclusive skylines and coastal enclaves.
          </p>
          <p className="text-sm md:text-lg">
            Our journey began in Zurich, serving a select circle of families who
            demanded more than just property; they sought sanctuary. Today, that
            mission remains unchanged, though our reach has expanded to
            twenty-four territories across five continents.
          </p>
        </div>
        <div className="md:max-w-1/2 p-8 h-full relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjEhMHZMED0jZOOMwnjk4N3RUUoObf9dxx-566cGJ1klVI2WimkKgX8eeynBuJDqaYfx4_WB_SPVOt8RLkYL237BapXaXfAP5wwz2FwKGFzFEGm1DHV4cAqzI-3YWrtACm8IgGwGsrNefFq5yrfrja22zhLq2-zMMXGfUmkuwqGFRK_r-Jh-eQyDdALs_ZXV8Pa8vn5LybjZE-FlwaZIGRSbwX3FqL2egluEe7cmovMMSkL61SH0gtlTAyV_AIsTtjFLMyQyMefCM"
            alt=""
            className="w-full aspect-4/5 object-cover relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
          <span className="absolute top-3 left-3 aspect-square border-l-2 border-t-2 border-primary w-1/4"></span>
          <span className="absolute bottom-3 right-3 aspect-square border-r-2 border-b-2 border-primary w-1/4"></span>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-8 py-8 px-2 bg-muted text-muted-foreground">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="font-semibold text-2xl md:text-4xl text-primary">
            $12B+
          </h1>
          <p className="w-full tracking-widest font-semibold text-xs text-center">
            ASSETS UNDER ADVISORY
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="font-semibold text-2xl md:text-4xl text-primary">
            24
          </h1>
          <p className="w-full tracking-widest font-semibold text-xs text-center">
            GLOBAL TERRITORIES
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="font-semibold text-2xl md:text-4xl text-primary">
            380
          </h1>
          <p className="w-full tracking-widest font-semibold text-xs text-center">
            PRIVATE COLLECTIONS
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="font-semibold text-2xl md:text-4xl text-primary">
            40
          </h1>
          <p className="w-full tracking-widest font-semibold text-xs text-center">
            YEARS OF EXCELLENCE
          </p>
        </div>
      </section>
      <section className="md:p-8 p-2 space-y-10 h-fit w-full">
        <div className="space-y-4">
          <p className="w-full text-center text-primary tracking-widest font-semibold text-sm">
            OUR FOUNDATION
          </p>
          <h1 className="font-semibold text-xl md:text-3xl text-center">
            The Pillars of Aesthetiq
          </h1>
        </div>
        <div className="flex md:flex-row flex-col items-center md:items-stretch justify-center gap-8 w-full">
          {[
            {
              heading: "Curation",
              desc: "We don't just list properties; we curate experiences. Every residence in our portfolio undergoes a rigorous aesthetic and structural audit.",
              icon: DraftingCompass,
            },
            {
              heading: "Discretion",
              desc: "Privacy is the ultimate luxury. Our advisors operate with a level of confidentiality that has made us the choice of global leaders for decades.",
              icon: ShieldCheck,
            },
            {
              heading: "Elegance",
              desc: "We believe in the power of minimalism. Our aesthetic avoids the ostentatious, favoring timeless materials and masterful light.",
              icon: Gem,
            },
          ].map((i, _) => (
            <Card key={_} className="w-[80vw] md:w-1/3 shadow-xl flex flex-col">
              <CardHeader>
                <span className="w-full md:flex items-center justify-center text-primary md:p-8">
                  <i.icon size={32} />
                </span>
              </CardHeader>
              <CardContent className="grow flex flex-col items-start md:items-center justify-center gap-6">
                <CardTitle className="font-semibold text-xl md:text-2xl md:text-center">
                  {i.heading}
                </CardTitle>
                <CardDescription className="items-start md:text-center max-w-3xs text-sm md:text-lg pb-8">
                  {i.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="md:p-8 p-2 w-full h-fit">
        <div className="w-full h-full relative bg-secondary text-secondary-foreground p-10 md:p-20 space-y-10 overflow-hidden">
          <h1 className="relative z-1 font-semibold text-2xl md:text-4xl">
            Access the Unattainable
          </h1>
          <p className="relative z-1 text-xs md:text-lg max-w-xl">
            Our private advisory service offers bespoke guidance for off-market
            acquisitions and global portfolio management.
          </p>
          <div className="relative z-1 flex flex-col md:flex-row gap-4">
            <Button size={"lg"}>Consult an Advisor</Button>
            <Button variant={"outline2"} size={"lg"}>
              View Collections
            </Button>
          </div>
          <span className="absolute top-5 z-0 right-30 rotate-20 opacity-50 text-muted-foreground">
            <Earth size={250} strokeWidth={1} />
          </span>
        </div>
      </section>
    </main>
  );
};

export default Page;
