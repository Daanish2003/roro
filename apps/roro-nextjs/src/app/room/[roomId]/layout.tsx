import { Settings } from 'lucide-react'
import type React from 'react'
import Logo from '~/components/logo'
import { Button } from '~/components/ui/button'

export default function Roomlayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <nav className='px-8 py-2 border-b flex justify-between items-center'>
        <Logo />
        <Button
        variant={"ghost"}
        >
          <Settings />
        </Button>
      </nav>
      {children}
    </div>
  )
}
