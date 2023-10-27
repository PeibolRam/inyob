import React from 'react'
import Image from 'next/image'

import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
      <Image src="/images/logo.png" width={130} height={40} objectFit='contain' />
    </nav>
  )
}

export default Navbar