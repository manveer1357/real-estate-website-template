"use client";
import { ArrowUp, ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const ScrollToSection = () => {
  return (
    <>
      <span
        className="absolute bottom-1/20 left-1/2 z-3 cursor-pointer"
        onClick={() => window.scrollBy({ top: 555, behavior: "smooth" })}
      >
        <ChevronDown />
      </span>
    </>
  );
};

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down more than 400px
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use 'auto' for instant scrolling
    });
  }

  return (
    <Button
      variant={"secondary"}
      size={"icon-lg"}
      className={`fixed ${isVisible ? "opacity-100" : "opacity-0"} 
        transition-all duration-300 ease-in-out z-500 bottom-5 right-10`}
      onClick={scrollToTop}
    >
      <ArrowUp />
    </Button>
  );
};
