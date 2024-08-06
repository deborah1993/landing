import { Button } from '@nextui-org/react'
import React from 'react'

function SectionWhatIsLandtech() {
  return (
    <div className='w-full flex pb-[100px]'>
        <div className='w-[40%]'>

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
      <Button color="default" size='lg' variant="bordered" radius='full' className='text-dafualt font-[700]'>Get a Demo</Button>
        <Button size='lg' color="primary" href="#" variant="solid" className="text-[#011A41] font-[700]" radius='full'>Get started free</Button>
      </div>
        </div>
    </div>
  )
}

export default SectionWhatIsLandtech