import { Button,  Image } from '@nextui-org/react'
import React from 'react'
import CardInfo from './card'

function SectionInfo() {

    const cards = [
        {
            title: 'Marketing Hub®',
            description: 'AI-powered marketing software that helps you generate leads and automate marketing.',
            features: ['AI-powered lead generation', 'Marketing automation', 'Analytics']
        },
        {
            title: 'Sales Hub®',
            description: 'Easy-to-adopt sales software that leverages AI to build pipelines and close deals.',
            features: ['Prospecting workspace', 'Deal management', 'Sales automation']
        },
        {
            title: 'Service Hub®',
            description: 'Customer service software powered by AI to scale support and drive retention.',
            features: ['Omni-channel help desk', 'AI chatbot', 'Customer success workspace']
        },
        {
            title: 'Content Hub™',
            description: 'All-in-one, AI-powered content marketing software that helps marketers create and manage content.',
            features: ['Content remix', 'Brand voice', 'AI-powered content creation']
        },
        {
            title: 'Operations Hub®',
            description: 'Operations software that leverages AI to help you activate and manage your data.',
            features: ['Data sync', 'Programmable automation', 'AI-powered data quality automation']
        },
        {
            title: 'Commerce Hub™',
            description: 'B2B commerce software designed to help you collect payments and automate billing.',
            features: ['Invoices & subscriptions', 'Quotes', 'Payment links']
        }

    ]

  return (
    <div className='w-full flex flex-col items-center space-y-10 pb-[15vh]'>
        <Image width='50vw'/>
        <p className="text-[2rem] font-[800]">
        Your whole front office. One customer platform.
      </p>

      <p className="text-[1rem] w-[65%]">
      HubSpot brings your marketing, sales, and service teams together on the same AI-powered customer platform. It's easy to use, provides value fast, and gives all teams a unified view of the customer at every stage in their journey. Each product in the platform is powerful on its own, but the real magic happens when you use them together.
      </p>

      <div className="flex gap-3">
      <Button color="default" size='lg' variant="bordered" radius='full' className='text-dafualt font-[700]'>Get a Demo</Button>
      <Button size='lg' color="primary" href="#" variant="solid" className="text-[#011A41] font-[700]" radius='full'>Get started free</Button>
      </div>

      <div className='w-full grid grid-cols-3 gap-y-10'>
        {cards.map((card, i)=> (
            <CardInfo key={i} title={card.title} description={card.description} features={card.features} />
        ))}
      </div>
    </div>
  )
}

export default SectionInfo