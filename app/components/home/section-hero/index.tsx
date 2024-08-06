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
      <Button color="secondary" size='lg' variant="bordered" radius='full' className='text-secondary font-[700]'>Get a Demo</Button>
        <Button size='lg' color="primary" href="#" variant="solid" className="text-[#011A41] font-[700]" radius='full'>Get started free</Button>
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