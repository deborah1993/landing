import { Image } from '@nextui-org/react'
import React from 'react'

function SectionTrustedBy() {
  return (
    <div className='w-full flex text-center flex-col items-center space-y-10 my-[15vh]'>
        <p className="text-[2rem] font-[800]">Trusted by US industry leaders</p>
        <div className='flex space-x-10'>
            <Image src='./trusted-by/resia.webp' width='300px'/>
            <Image src='./trusted-by/pulte.webp' width='300px'/>
            <Image src='./trusted-by/tollbros.webp' width='300px'/>
        </div>
    </div>
  )
}

export default SectionTrustedBy