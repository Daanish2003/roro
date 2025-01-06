import React from "react";
import LoginButton from "./login-button";
import Logo from "./logo";

export default function MainNavbar() {
	return (
		<nav className="px-8 py-3 justify-between flex shadow-md">
			<Logo />
			<LoginButton />
		</nav>
	);
}
