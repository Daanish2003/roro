import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
    href="/dashboard"
    className='flex'
    >
    <span className={"font-bold text-xl"}>Roro</span>
    </Link>
  )
}

export default Logo