"use client"
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useSession } from "~/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function LoginButton() {
	const { data: session } = useSession()

	if (!session?.user) {
		return (
			<Button asChild>
				<Link href="/auth/login">Login</Link>
			</Button>
		);
	}

	if (session.user) {
		return (
			<Avatar>
				<AvatarImage src={session.user.image ?? undefined}/>
				<AvatarFallback>A</AvatarFallback>
			</Avatar>
		)
	}
	return null
}
