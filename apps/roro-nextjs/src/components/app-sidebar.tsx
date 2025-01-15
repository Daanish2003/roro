"use client";

import type * as React from "react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	SidebarTrigger,
} from "~/components/ui/sidebar";
import { BookOpen, Flag, Globe, LayoutDashboard, ListTodo, Settings } from "lucide-react";
import Logo from "./logo";
import { NavUser } from "./nav-user";
import { useSession } from "~/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
	{
	  title: "Overview",
	  url: "/dashboard/overview",
	  icon: LayoutDashboard,
	},
	{
	  title: "Practice",
	  url: "/dashboard/practice",
	  icon: BookOpen,
	},
	{
	  title: "Feedback",
	  url: "/dashboard/feedback",
	  icon: Flag,
	},
	{
		title: "My Topics",
		url: "/dashboard/my-topics",
		icon: ListTodo
	},
	{
	  title: "Explore",
	  url: "/dashboard/explore",
	  icon: Globe,
	},
	{
	  title: "Settings",
	  url: "/dashboard/settings",
	  icon: Settings,
	},
  ]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const pathname = usePathname()
	const {data: session} = useSession();

	if (!session?.user) {
		return null;
	  }
	
	  const user = {
		name: session.user.name ?? '',
		email: session.user.email ?? '',
		avatar: session.user.image ?? '/default-avatar.png' // Provide a default avatar URL
	  }


	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
			     <NavUser user={user}/>
			</SidebarHeader>
			<SidebarContent>
			<SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild 
				  isActive={pathname.startsWith(item.url)}
				  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
