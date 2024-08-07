'use client'

import { Button, Image } from '@nextui-org/react'
import React from 'react'

function SectionHero() {
  return (
    <section className="flex w-full py-[20vh] items-center custom-bg-hero bg-cover bg-center px-[10vw]">
    <div className="flex flex-col w-[40%] gap-8 m-[auto] justify-center">
    <p className="text-[.875rem] uppercase font-[700] text-secondary">landtech customer platform</p>
      <p className="text-[3.75rem] leading-tight font-[600] text-secondary">A powerful, easy to use one stop shop application</p>
      <p className="text-[.875rem] text-secondary">Say goodbye to jumping around various ordinance platforms and inconsistent data. With LandTech, you can access standardized zoning information with one login.</p>
      <div className="flex gap-3">
      <Button size='lg' color="primary" href="#" variant="solid" className="text-[#011A41] font-[700]" radius='full' onClick={()=> window.open('https://landtech.us/request-your-landtech-demo')}>Get a Demo</Button>
        <Button color="secondary" size='lg' variant="bordered" radius='full' className='text-secondary font-[700]'  onClick={()=> window.open('https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month&__hstc=167995198.a545ea292245c4d89df71abfc2d151e2.1723005037834.1723005037834.1723005037834.1&__hssc=167995198.2.1723005037835&__hsfp=4242423886')}>Get started free</Button>
      </div>
      <p className="text-[.875rem] text-secondary">
      Get a demo of our premium software, or get started with free tools.
      </p>
    </div>

    <div className="flex flex-col w-[40%] gap-8 m-[auto] justify-center">
      <Image src='/three-phones.webp' height='100%'/> 
    </div>
  </section>
  )
}

export default SectionHero