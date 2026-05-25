"use client";
import { ScrollToTop } from "@/components/ScrollButtons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Bath, BedDouble, MapPin, Search, TriangleRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <main className="w-full h-full space-y-8 md:p-8 p-2">
      <section className="space-y-4">
        <h1 className="font-bold text-4xl">World-Class Inventory</h1>
        <p className="max-w-xl">
          Explore our curated collection of architectural masterpieces, from
          sun-drenched private islands to historic European chateaus.
        </p>
        <div className="h-fit w-full p-4">
          <Field orientation={"horizontal"} className="items-end">
            <Field>
              <FieldLabel htmlFor="location">Location</FieldLabel>
              <Input type="text" name="location" placeholder="ABC City, XYZ" />
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
            <Separator orientation="vertical" />
            <Field>
              <FieldLabel>Bedrooms</FieldLabel>
              <Input type="text" placeholder="Villa" />
            </Field>
            <Button size={"lg"} className="w-2/14">
              <Search /> Explore
            </Button>
          </Field>
        </div>
      </section>
      <section className="columns-4 gap-2 space-y-2 w-full h-full">
        {[...Array(20)].map((i, _) => (
          <Card
            key={_}
            className="bg-background w-full relative ring-0 shadow-none transition-all duration-300 ease-in-out hover:ring-1 hover:shadow hover:bg-card hover:-translate-y-2"
            size="sm"
            onClick={() => router.push(`/properties/${_}`)}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi-PikkxIAwFHWl8TPp3gmk2PVysb7Sd7m6YpipKwY-cCazPba4Zw2G-Hs-f23lmvyqafvkHEvhg-s19VtOROb16gcAJEm-_0xMRJhm1nJoXJonr7hbU0uJmBBQqHLzrrMfK3opqpyjFUGORVwKVtVrEHY9kmEBhiNaqPhNdnpFOw0cYqMZ1V7iZl81Sdx3iN3dZjKtlxjnEWU2e7SEymUoqCWKdeuaMppc40xMTxkRQ-NdQ_omUOHb_ipIKJgVTi45uU9n43Bfdk"
              alt=""
              className="object-cover w-full h-fit"
            />
            <span className="absolute top-2 left-2">
              <Badge variant={"outline"} className="bg-muted rounded">
                New Listing
              </Badge>
            </span>
            <CardHeader>
              <CardTitle>
                <h1 className="font-semibold text-lg">The Zenith House</h1>
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
        ))}
      </section>
    </main>
  );
};

export default Page;
