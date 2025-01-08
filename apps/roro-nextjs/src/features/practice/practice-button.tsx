"use client"
import { ArrowUpRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '~/components/ui/button'
import {v4 as uuidv4} from "uuid"

export default function PracticeButton() {
    const router = useRouter()

    const startPracticeSessionHandler = () => {
        const roomId = uuidv4()

        router.push(`/room/${roomId}`)
    }
  
  return (
    <Button
     onClick = {() => {startPracticeSessionHandler()}}
    >
        Start Practice
        <ArrowUpRight />
    </Button>
  )
}
