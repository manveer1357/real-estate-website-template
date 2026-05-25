import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About - Aesthetiq Real Estate",
  description: "",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
