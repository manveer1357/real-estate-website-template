import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Field } from "../ui/field";
import { Input } from "../ui/input";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="py-24 px-8 p-2 flex flex-col md:flex-row md:items-start justify-between gap-8 bg-white">
        <div className="md:w-3/10 w-full space-y-4">
          <h1 className="font-bold text-3xl">AESTHETIQ</h1>
          <p className="text-sm">
            Redefining luxury real estate through architectural excellence and
            global vision.
          </p>
        </div>
        <div className="space-y-2 flex flex-col items-start justify-items-start">
          <h1 className="font-semibold tracking-wider">Navigation</h1>
          <div className="flex flex-col items-start justify-items-start">
            <Button variant={"link"}>Legal</Button>
            <Button variant={"link"}>Privacy Policy</Button>
            <Button variant={"link"}>Cookie Settings</Button>
            <Button variant={"link"}>Careers</Button>
          </div>
        </div>
        <div>
          <h1 className="font-semibold tracking-wider">Socials</h1>
          <div className="flex flex-col items-start justify-items-start">
            <Button variant={"link"}>Instagram</Button>
            <Button variant={"link"}>Facebook</Button>
            <Button variant={"link"}>X</Button>
          </div>
        </div>
        <div className="md:w-3/10 w-full space-y-4">
          <h1 className="font-semibold tracking-wider">Newsletter</h1>
          <p className="text-xs">
            Be The First To Know About New Exclusive Listings
          </p>
          <Field orientation={"horizontal"}>
            <Input type="email" placeholder="Your Email" />
            <Button size={"icon"}>
              <ArrowRight />
            </Button>
          </Field>
        </div>
      </footer>
      <Separator />
      <p className="text-xs p-4 w-full">
        © 2024 AESTHETIQ LUXURY REAL ESTATE. ALL RIGHTS RESERVED.
      </p>
    </>
  );
};

export default Footer;
