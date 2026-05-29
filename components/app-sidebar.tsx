"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

export function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Sidebar side="left" variant="sidebar">
      <SidebarHeader className="p-4">
        <h1 className={`font-bold text-xl`}>
          <a href="/">AESTHETIQ</a>
        </h1>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => router.push("/")}
                isActive={pathname === "/"}
              >
                Home
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => router.push("/about")}
                isActive={pathname.startsWith("/about")}
              >
                About
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => router.push("/properties")}
                isActive={pathname.startsWith("/properties")}
              >
                Properties
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => router.push("/agents")}
                isActive={pathname.startsWith("/agents")}
              >
                Agents
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
