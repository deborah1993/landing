'use client'

import { Button, Link } from '@nextui-org/react'
import React from 'react'

function Footer() {
  return (
    <div className='w-full py-10 flex flex-col justify-center items-center gap-5 bg-default'>
          <p className="text-[1.7rem] font-[700] text-[white]">Finding land and property should be easy, right?</p>
          <div className="flex gap-3"><Button size='lg' color="primary" href="#" variant="solid" className="text-[#011A41] font-[700]" radius='full' onClick={()=> window.open('https://landtech.us/request-your-landtech-demo')}>Get a Demo</Button>
          <Button color="secondary" size='lg' variant="bordered" radius='full' className='text-secondary font-[700]'  onClick={()=> window.open('https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month&__hstc=167995198.a545ea292245c4d89df71abfc2d151e2.1723005037834.1723005037834.1723005037834.1&__hssc=167995198.2.1723005037835&__hsfp=4242423886')}>Get started free</Button></div>
          <div className='flex w-full justify-between px-[10vw]'>
            <p className='text-secondary'>{`©${new Date().getFullYear()}  Land Technologies Inc.`}</p>
            <div className='flex gap-10'>
            <Link onClick={()=> window.open('https://landtech.us/legal')} color="foreground">Legal terms</Link>
            <Link onClick={()=> window.open('https://landtech.us/legal#privacy-policy')} color="foreground">Privacy policy</Link>
            </div>
          </div>
    </div>
  )
}

export default Footer