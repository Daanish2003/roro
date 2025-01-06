import React from 'react'
import MainNavbar from 'apps/roro-nextjs/src/components/main-navbar'
import PromptInput from 'apps/roro-nextjs/src/features/prompt/prompt-input'

export default function DashBoardPage() {
  return (
    <div className='w-auto'>
      <MainNavbar />
      <PromptInput />
    </div>
  )
}
