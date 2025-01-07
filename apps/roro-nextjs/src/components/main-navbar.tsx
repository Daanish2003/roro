import React from "react";
import LoginButton from "./login-button";
import Logo from "./logo";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";

export default function MainNavbar() {
	return (
		<nav className="px-4 py-3 justify-between flex shadow-md border-b items-center">
			<div className="flex items-center gap-x-2">
			<SidebarTrigger />
			<Separator orientation="vertical" className="border-[1px] rounded-xl h-5"/>
			<Logo />
			</div>
			<LoginButton />
		</nav>
	);
}
