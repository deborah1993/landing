import { Button } from '@nextui-org/react'
import React from 'react'

function Footer() {
  return (
    <div className='w-full py-10 flex flex-col justify-center items-center gap-5 bg-default'>
          <p className="text-[2rem] font-[700] text-[white]">Finding land and property should be easy, right?</p>
          <Button size='lg' color="primary" href="#" variant="solid" className="text-[#011A41] font-[700]" radius='full'>Get LandTech</Button>
    </div>
  )
}

export default Footer