import { Button, Image } from '@nextui-org/react'
import React from 'react'

function AboutUsComponent() {
  return (
    <div>
    <section className='custom-bg-hero bg-cover bg-center text-center' style={{ padding: '50px 150px 100px 150px' }}>
        <p className='text-[4.5rem] font-[700] mt-[3rem] text-secondary mb-[30px]'>{`About us`}</p>
    </section>

    <section className='w-full flex my-[15vh] px-[10vw]'>
           <div className='flex flex-col justify-center w-[40%] m-auto gap-8 '>
        <p className="text-[2rem] font-[800]">
       {`We all need homes. You want to build them. So, why is it so hard?`}
      </p>
        <p className="text-[1rem]">
        {`This is pretty much what was going through Andrew’s head, our co-founder, back in 2010.`}
      </p>
      <p className="text-[1rem]">
      {`He wanted to build himself a house, but realized the process was way more complicated than it should be.`}
      </p>
      <p className="text-[1rem]">
      {`So he tried to solve the problem using his skills as a software developer. He tweeted "Property software startup seeks co-founder" and got a response from Jonny, our other co-founder, who was also on Twitter. Turns out, they were already ahead of their time.`}
      </p>
 
        </div>

        <div className="flex flex-col w-[40%] gap-8 m-[auto] justify-center">
      <Image className='two-column-img-inner' src='/about-us/andrew-jonny-about-us.webp' width='100%'/> 
    </div>
    </section>

    <section className='w-full flex my-[15vh] px-[10vw]'>
        <div className="flex flex-col w-[40%] gap-8 m-[auto] justify-center">
      <Image className='two-column-img-inner' src='/about-us/jonny-about-us.webp' width='100%'/> 
    </div>

    <div className='flex flex-col justify-center w-[40%] m-auto gap-8 '>
        <p className="text-[1rem]">
        Jonny was a town planner who wanted to bring the property sector into the 21st century.
      </p>
      <p className="text-[1rem]">
      Andrew never ended up building his house, but he, along with Jonny, broke ground on LandTech, which made it easier for everyone else to build theirs.
      </p>
      <p className="text-[1rem]">
      Today, we’ve achieved one of our goals, becoming the UK’s leading proptech company, and along the way changed the future of property development.
      </p>
 
        </div>
    </section>

    <section className='w-full flex my-[15vh] px-[10vw]'>
           <div className='flex flex-col justify-center w-[40%] m-auto gap-8 '>
        <p className="text-[2rem] font-[800]">
        {`Why we’re expanding`}
      </p>
        <p className="text-[1rem]">
       { `Simply put, we’ve realized that the US is facing similar challenges to the UK. Housing supply and affordable housing stock is becoming harder and harder to come by, fueling an already difficult housing shortage. This is a problem we’re already helping to solve in the UK, and now want to help solve in the US.`}
      </p>
      <p className="text-[1rem]">
      {`While we’ve chosen Florida as our starting point, it’s just the beginning. Over time, our vision is to create a suite of data-driven tools that enable real estate stakeholders across the US to build the communities we all desperately need.`}
      </p>
     
 
        </div>

        <div className="flex flex-col w-[40%] gap-8 m-[auto] justify-center">
      <Image className='two-column-img-inner' src='/about-us/andrew-jonny-about-us.webp' width='100%'/> 
    </div>
    </section>
    </div>
  )
}

export default AboutUsComponent