import React, { useState } from 'react'

const NavbarMobile = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <button onClick={() => {setOpen(prev => !prev)}} class="sm:hidden flex h-full aspect-square shrink-0 border-l border-border" >
      <div class="h-full w-full flex items-center justify-center">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </div>
    </button>
    <div className='fixed top-[80px] left-0 w-full z-50 borer-b border-border bg-white h-[250px]'></div>
    </>
  )
}

export default NavbarMobile