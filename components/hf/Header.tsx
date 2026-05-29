"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { SidebarTrigger } from "../ui/sidebar";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => setScrollPosition(window.pageYOffset);
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
};

const Header = () => {
  const scrollPosition = useScrollPosition();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header
      className={`${scrollPosition > 20 ? " bg-white shadow-xs" : "bg-transparent backdrop-blur-sm"} transition-colors duration-300 ease-in-out px-8 py-4 flex items-center justify-between sticky top-0 z-50`}
    >
      <div className="flex items-center justify-between md:justify-start gap-4 w-full md:w-fit">
        <SidebarTrigger className="md:hidden flex items-center justify-center" />
        <h1
          className={`font-bold text-xl transition-colors duration-300 ease-in-out ${scrollPosition > 20 ? "text-foreground" : ""}`}
        >
          <a href="/">AESTHETIQ</a>
        </h1>
      </div>
      <div className="md:flex items-center justify-evenly hidden">
        <Button
          variant={"link"}
          onClick={() => router.push("/")}
          className={
            pathname === "/"
              ? "underline text-primary"
              : "text-muted-foreground"
          }
        >
          Home
        </Button>
        <Button
          variant={"link"}
          onClick={() => router.push("/about")}
          className={
            pathname === "/about"
              ? "underline text-primary"
              : "text-muted-foreground"
          }
        >
          About
        </Button>
        <Button
          variant={"link"}
          onClick={() => router.push("/properties")}
          className={
            pathname.startsWith("/properties")
              ? "underline text-primary"
              : "text-muted-foreground"
          }
        >
          Properties
        </Button>
        <Button
          variant={"link"}
          onClick={() => router.push("/agents")}
          className={
            pathname === "/agents"
              ? "underline text-primary"
              : "text-muted-foreground"
          }
        >
          Agents
        </Button>
      </div>
      <Button variant="secondary" className="hidden md:block">
        Enquire Now
      </Button>
    </header>
  );
};

export default Header;
