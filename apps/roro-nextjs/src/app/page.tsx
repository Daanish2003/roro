import { ArrowUp } from "lucide-react";
import React from "react";
import MainNavbar from "~/components/main-navbar";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";

const page = () => {
	return (
		<>
			<MainNavbar />
			<div className="h-[50rem] items-center justify-center flex">
				<div className="space-y-6">
					<h1 className="font-extrabold text-[29px] text-center">
						What can i help you with?
					</h1>
					<div className="border rounded-md shadow-md border-zinc-800">
						<Textarea
							placeholder="Type your value here"
							className="relative bg-transparent w-[720px] border-none resize-none p-3 pb-1.5"
						/>
						<div className="flex justify-end p-1.5">
							<Button size={"icon"}>
								<ArrowUp />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
