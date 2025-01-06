import React from 'react'
import Logo from './logo'
import LoginButton from './login-button'

export default function MainNavbar() {
    
  return (
    <nav
    className='px-8 py-3 justify-between flex shadow-md'
    >
        <Logo />
        <LoginButton />
    </nav>
  )
}
