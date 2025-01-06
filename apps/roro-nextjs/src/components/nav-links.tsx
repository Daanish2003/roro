"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLink({title, href, icon}: {title: string, href: string, icon: React.ReactElement}) {
    const pathname = usePathname()
  return (
    <Link
    href={href}
    className={`text-sm py-3 px-6 items-center flex rounded-lg mx-3 mt-2 ${
        pathname === href ? "bg-primary": " hover:bg-primary/10"
    }`}
    >
     {icon}
     <span>{title}</span>
    </Link>
  )
}
