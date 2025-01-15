"use client"

import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { Card, CardContent, CardHeader } from '~/components/ui/card'
import { useSession } from '~/lib/auth-client'
import { io } from "socket.io-client"

const URL = "http://localhost:4000"

export default function RoomPage() {
  const {data: session} = useSession()
  const params = useParams()
  const roomId = params.roomId

  const username = session?.user.name

  useEffect(() => {
   if(username && roomId) {
    console.log(username && roomId)
    const socket = io(URL)

    socket.emit('joinRoom', {username, roomId})

    socket.on('connect', () => {
      console.log('Connected to server')
    })

    socket.on('roomJoined', (data) => {
      console.log(`Joined room ${data.roomId} as ${data.username}`)

      // Initialize media streams and UI updates here
    })

    socket.on('connect_error', (error) => {
      console.error('Connection error', error);
      throw new Error ('Connection Failed. Please try again')
    });
   } else {
     throw new Error("Please enter your name and roomId")
   }
  }, [username, roomId])

  return (
    <div className='flex flex-col items-center gap-y-6'>
    <div className='flex mt-4 mx-6 gap-x-10'>
      <div className='relative w-[1000px] h-[550px]'>
      <Card className='w-[1000px] h-[550px] absolute'>
        <CardContent>
          AI voice agent
        </CardContent>
      </Card>
      <Card className='absolute right-0 bottom-0 w-[350px] h-[200px]'>
      <CardContent>
        Video
      </CardContent>
      </Card>
      </div>
      <Card className='w-[450px]'>
        <CardHeader className='border-b'>
          Live Conversation
        </CardHeader>
      </Card>
    </div>
    <div className='w-[720px] border h-12 rounded-md'>
      Controller
    </div>
    </div>
  )
}
