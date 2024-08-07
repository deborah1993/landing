'use client'

import { Button, Image } from '@nextui-org/react'
import React from 'react'

function SectionWhatIsLandtech() {
  return (
    <div className='w-full flex my-[15vh]'>
         <div className="flex flex-col w-[40%] gap-8 m-[auto] justify-center">
      <Image src='/three-phones.webp' height='100%'/> 
    </div>
        <div className='flex flex-col justify-center w-[40%] m-auto gap-8 '>
        <p className="text-[2rem] font-[800]">
      What is LandTech ?
      </p>
        <p className="text-[1rem]">
        It is a platform that combines data like ownership and zoning into one place, so that you’ll save hours, if not days, searching for sites that meet your requirements. You’ll also save time by streamlining your team’s collaboration on opportunities using our sites pipeline.
Simply put, our platform helps to fast track acquisition, due diligence and collaboration all in one place. All you need to do is log in and start searching for the perfect opportunity. 
      </p>
      <div className="flex gap-3">
      <Button size='lg' color="primary" href="#" variant="solid" className="text-[#011A41] font-[700]" radius='full' onClick={()=> window.open('https://landtech.us/request-your-landtech-demo')}>Get a Demo</Button>
        <Button color="default" size='lg' variant="bordered" radius='full' className='text-default font-[700]' onClick={()=> window.open('https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month&__hstc=167995198.a545ea292245c4d89df71abfc2d151e2.1723005037834.1723005037834.1723005037834.1&__hssc=167995198.2.1723005037835&__hsfp=4242423886')}>Get started free</Button>
      </div>
        </div>
    </div>
  )
}

export default SectionWhatIsLandtech