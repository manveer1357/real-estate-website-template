"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

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
      className={`${scrollPosition > 20 ? " bg-white shadow-xs" : "bg-secondary/30 backdrop-blur-lg"} transition-colors duration-300 ease-in-out px-8 py-4 flex items-center justify-between sticky top-0 z-50`}
    >
      <h1
        className={`font-bold text-xl transition-colors duration-300 ease-in-out ${scrollPosition > 20 ? "text-foreground" : ""}`}
      >
        <a href="/">AESTHETIQ</a>
      </h1>
      <div className="flex items-center justify-evenly">
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
      <Button variant="secondary">Enquire Now</Button>
    </header>
  );
};

export default Header;
