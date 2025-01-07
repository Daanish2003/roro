import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<Link href="/dashboard/overview" className="flex px-2 py-1 hover:bg-primary/10 rounded-md">
			<span className={"font-bold text-xl"}>Roro.ai</span>
			<span className={"font-bold text-xl hidden"}>Rr</span>
		</Link>
	);
};

export default Logo;
