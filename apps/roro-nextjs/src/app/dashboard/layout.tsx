import type React from "react";
import { AppSidebar } from "~/components/app-sidebar";
import MainNavbar from "~/components/main-navbar";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

export default function DashboardLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<div className="w-auto">
					<MainNavbar />
				</div>
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
