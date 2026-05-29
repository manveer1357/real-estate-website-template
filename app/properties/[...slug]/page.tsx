import PropertyBrowser from "@/components/sub/MediaGallery";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  Bath,
  BedDouble,
  MapPin,
  Mountain,
  TriangleRight,
  WavesHorizontal,
} from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <main className="w-full h-full space-y-4 md:p-8 p-2">
      <section>
        <PropertyBrowser />
      </section>
      <section className="flex flex-col md:flex-row items-start justify-between gap-4 relative">
        <section className="space-y-4 md:w-3/4">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h1 className="font-semibold text-2xl">The Zenith House</h1>
              <p className="text-primary font-semibold text-xl md:text-3xl">
                $18,750,000
              </p>
            </div>
            <p className="flex items-center text-sm justify-items-start gap-2 w-full">
              <MapPin size={16} />
              Bel Air, Los Angeles, CA
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-evenly gap-4 p-4">
            <Card className="w-full rounded">
              <CardHeader className="flex items-center justify-center text-primary">
                <BedDouble />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center font-bold text-xl">
                  6
                </CardTitle>
                <CardDescription className="text-center">
                  Bedrooms
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="w-full rounded">
              <CardHeader className="flex items-center justify-center text-primary">
                <Bath />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center font-bold text-xl">
                  8
                </CardTitle>
                <CardDescription className="text-center">
                  Bathrooms
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="w-full rounded">
              <CardHeader className="flex items-center justify-center text-primary">
                <TriangleRight />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center font-bold text-xl">
                  12000
                </CardTitle>
                <CardDescription className="text-center">sq.ft</CardDescription>
              </CardContent>
            </Card>
            <Card className="w-full rounded">
              <CardHeader className="flex items-center justify-center text-primary">
                <Mountain />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center font-bold text-xl">
                  2.4
                </CardTitle>
                <CardDescription className="text-center">Acres</CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <h3 className="border-l-3 border-primary font-bold text-lg w-full px-4">
              Architectural DNA
            </h3>
            <p>
              Carved directly into the rugged basalt cliffs of Aspen, The
              Obsidian House represents the pinnacle of contemporary
              high-altitude living. Designed by the visionary firm KHA
              Architecture, the residence seamlessly integrates raw natural
              elements with cutting-edge technology, creating a living
              experience that is both primal and sophisticated. The structure
              utilizes a palette of locally sourced obsidian-toned stone,
              charred Shou Sugi Ban wood, and frameless high-clarity glass. Each
              room is a curated gallery of views, framing the snow-capped peaks
              of the Continental Divide as if they were fine art. The central
              spine of the house is a three-story floating staircase, suspended
              by steel cables and illuminated by a bespoke fiber-optic
              installation.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="border-l-3 border-primary font-bold text-lg w-full px-4">
              Exclusive Amenities
            </h3>
            <ItemGroup className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">
              {[...Array(6)].map((i, _) => (
                <Item key={_}>
                  <ItemMedia variant={"icon"}>
                    <span className="p-2 bg-muted text-muted-foreground rounded">
                      <WavesHorizontal size={32} />
                    </span>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="font-bold">
                      Infinity Edge Pool
                    </ItemTitle>
                    <ItemDescription>
                      A 75-foot heated pool that appears to spill directly into
                      the valley below.
                    </ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>
          </div>
        </section>
        <Card className=" w-full md:w-1/4 block md:sticky top-20">
          <CardHeader>
            <CardTitle className="font-bold text-lg">
              Book a Private Tour
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FieldGroup className="pt-4">
              <Field>
                <FieldLabel>Full Name</FieldLabel>
                <Input type={"text"} placeholder="John Doe" />
              </Field>
              <Field>
                <FieldLabel>Preffered Date</FieldLabel>
                <Input type={"text"} placeholder="John Doe" />
              </Field>
              <Button className="w-full">Request Invitation</Button>
            </FieldGroup>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Page;
