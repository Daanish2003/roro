"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import type { z } from "zod";
import { Button } from "~/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";
import { Textarea } from "~/components/ui/textarea";
import { useSession } from "~/lib/auth-client";
import { PromptSchema } from "~/lib/zod/prompt-schema";
import { v4 as uuidv4 } from "uuid"
import { useRouter } from "next/navigation";

export default function PromptInput() {
	const router = useRouter()
	const { data } = useSession()
	const promptForm = useForm<z.infer<typeof PromptSchema>>({
		mode: "onBlur",
		resolver: zodResolver(PromptSchema),
		defaultValues: {
			prompt: "",
		},
	});

	const promptSubmitHandler = async (value: z.infer<typeof PromptSchema>) => {
		const username = data?.user.name
		const roomId = uuidv4()
		const aiPrompt = value.prompt;

		try {
			const response = await fetch("/api/initialize-room", {
				method: "POST",
				headers: {
					"content-Type": "application/json"
				},
				body: JSON.stringify({
					username,
					aiPrompt,
					roomId
				})
			});

			if (response.ok) {
				router.push(`/room/${roomId}`);
			} else {
				console.error("Failed to create room")
			}
		} catch (error) {
			console.log("Error submitting prompt:", error)
		}
	};
	
	return (
		<div className="justify-center mt-[200px] flex">
			<div className="space-y-6">
				<h1 className="font-extrabold text-[29px] text-center">
					Describe your scenario?
				</h1>
				<Form {...promptForm}>
					<form onSubmit={promptForm.handleSubmit(promptSubmitHandler)}>
						<FormField
							control={promptForm.control}
							name="prompt"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className="border rounded-xl shadow-md border-zinc-800 flex items-center px-3 w-[720px] h-[80px]">
											<Textarea
												placeholder="Type your value here"
												className="bg-transparent border-none resize-none relative"
												{...field}
											/>
											<Button type="submit" size={"icon"} className="relative">
												<FaArrowRight />
											</Button>
										</div>
									</FormControl>
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</div>
		</div>
	);
}
