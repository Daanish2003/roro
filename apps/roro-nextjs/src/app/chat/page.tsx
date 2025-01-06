import React from "react";
import MainNavbar from "~/components/main-navbar";
import PromptInput from "~features/prompt/prompt-input";

export default function DashBoardPage() {
	return (
		<div className="w-auto">
			<MainNavbar />
			<PromptInput />
		</div>
	);
}
