"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { FaArrowRight } from 'react-icons/fa'
import type { z } from 'zod'
import { Button } from 'apps/roro-nextjs/src/components/ui/button'
import { Textarea } from 'apps/roro-nextjs/src/components/ui/textarea'
import { PromptSchema } from 'apps/roro-nextjs/src/lib/zod/prompt-schema'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from 'apps/roro-nextjs/src/components/ui/form'


export default function PromptInput() {

    const promptForm = useForm<z.infer<typeof PromptSchema>>({
        mode: "onBlur",
        resolver: zodResolver(PromptSchema),
        defaultValues: {
            prompt: ""
        }
    })

    const promptSubmitHandler = (value: z.infer<typeof PromptSchema>) => {
        console.log(value)
    }
    return (
        <div className='justify-center mt-[200px] flex'>
            <div className='space-y-6'>
                <h1 className='font-extrabold text-[29px] text-center'>Describe your scenario?</h1>
                <Form {...promptForm}>
                    <form onSubmit={promptForm.handleSubmit(promptSubmitHandler)}>
                        <FormField
                            control={promptForm.control}
                            name="prompt"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className='border rounded-xl shadow-md border-zinc-800 flex items-center px-3 w-[720px] h-[80px]'>
                                            <Textarea
                                                placeholder='Type your value here'
                                                className='bg-transparent border-none resize-none relative'
                                                {...field}
                                            />
                                            <Button
                                                type='submit'
                                                size={"icon"}
                                                className='relative'
                                            >
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
    )
}
