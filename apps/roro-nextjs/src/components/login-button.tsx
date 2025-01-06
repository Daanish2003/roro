import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function LoginButton() {
	return (
		<Button asChild>
			<Link href="/auth/login">Login</Link>
		</Button>
	);
}
