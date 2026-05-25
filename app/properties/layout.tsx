import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Properties - Aesthetiq Real Estate",
  description: "",
};

export default function PropLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
