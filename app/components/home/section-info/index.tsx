'use client'

import { Button,  Image } from '@nextui-org/react'
import React from 'react'
import CardInfo from './card'
import { features } from 'process'

function SectionInfo() {

    const cards = [
        {
            title: 'Access to unified zoning information',
            description: 'Say goodbye to jumping around various ordinance platforms and inconsistent data. With LandTech, you can access standardized zoning information with one login.',
            secondDescription: 'With just a few clicks, you’ll find zone codes and key development standards for any parcel, giving you time back to focus on what really matters - identifying more opportunities.',
            features: []
        },
        {
            title: 'Identify ultimate ownership with ease',
            description: 'Don’t let the complexity of finding ownership information stop your opportunity workflows before they begin.',
            secondDescription: 'Our ownership layer provides all the information you need to identify and contact the ultimate owner all in one place.',
            features: ['Address data', 'What type of organization owns the land/property', 'Contact details of the organization and individual']
        },
        {
            title: 'Never lose track of an opportunity',
            description: 'From missing critical updates in email chains to inconvenient pipeline tracking in Excel, fragmented collaboration on your opportunities could cost you.',
            secondDescription: 'Our tailor-made sites pipeline keeps you on top of your opportunities, making it easier to get deals done faster.',
            features: ['Save sites directly from the ownership and zoning layers', 'View detailed property information and attach documents directly to your saved site', 'Manage and track your sites by moving them through different deal stages']
        },
        {
            title: 'LandTech Unlimited',
            description: `We know your time is valuable. So rather than giving you multiple plans to pick from, we're keeping it simple.`,
            secondDescription: 'From just $200 per month, you can start to supercharge your site sourcing.',
            features: []
        },
        {
            title: 'No more zoning surprises',
            description: 'Information around zoning laws can be disparate, inconsistent and frustrating - and if you’re caught out, you could be out of pocket. With coverage across the state of Florida, our zoning layer provides a clear and consistent view of everything you need to know before striking a deal.',
            features: []
        },
        {
            title: 'Fast and accurate due diligence',
            description: `Land ownership is public information, yet it's hard to find and often scattered. Our ownership layer changes that. By providing you with ownership details and contact information layered over Google street and satellite views, you can find the information you need to stay ahead of the competition.`,
            features: []
        },
        {
            title: 'Your data is safe with us, wherever you are',
            description: 'We’re ISO 27001 certified. It’s the international standard on how to manage information security. Read our blog to find out how we’re keeping your data safe.',
            features: []
        },
        {
            title: 'Unify your workflow and pipeline',
            description: `You don’t have to use any additional project management tools to collaborate more efficiently. You can save sites directly from the ownership or zoning layer, organize them by stage, and keep up to date with any changes, all in one place. And soon, you’ll be able to do all of this on the go with our mobile app.`,
            features: []
        }

    ]

  return (
    <div className='w-full flex flex-col items-center space-y-10 my-[15vh]'>
        <div className='m-[0 auto]
    w-max-[1425px]
    p-[0rem 5rem]
    relative
    w-[100%]'>
        <div className='flex flex-grid gap-[5rem] relative z-2'>
            <div id='left' className='flex-1
    mt-[10rem]
    p-[5rem 5rem 0rem 5rem]
    text-center'>
        <div className='circle'><img src="/info-section/house-search-icon.svg" alt="house-search-icon"  width="150" height="150"></img>
        </div>
        <p>Nearly 1 million sites saved by some of the world's largest real estate developers, investors, consultants and agents.</p>
    </div>

    <div id='middle' className='flex-1
    p-[5rem 5rem 0rem 5rem]
    text-center'>
        <div className='circle'><span className="stat-number">200</span>
        <span className="stat-subhead">people</span>
        </div>
        <p>LandTech is an industry leader in proptech with over 100 data and engineer specialists supported by a 100-strong operations team.</p>
    </div>

    <div id='right' className='flex-1
    mt-[10rem]
    p-[5rem 5rem 0rem 5rem]
    text-center'>
        <div className='circle'><img src="/info-section/piggybank-icon.svg" alt="piggybank-icon"  width="150" height="150"></img>
        </div>
        <p>Backed by $48 million from US and UK investors, including Updata, JLL Spark, Pi Labs and Flashpoint, we have the expertise to inform product direction, and the finance to build it.</p>
    </div>
    </div>
        </div>
        <p className="text-[2rem] font-[800]">
        Your whole front office. One customer platform.
      </p>

      <p className="text-[1rem] w-[65%]">
      HubSpot brings your marketing, sales, and service teams together on the same AI-powered customer platform. It's easy to use, provides value fast, and gives all teams a unified view of the customer at every stage in their journey. Each product in the platform is powerful on its own, but the real magic happens when you use them together.
      </p>

      <div className="flex gap-3">
      <Button size='lg' color="primary" href="#" variant="solid" className="text-[#011A41] font-[700]" radius='full' onClick={()=> window.open('https://landtech.us/request-your-landtech-demo')}>Get a Demo</Button>
        <Button color="default" size='lg' variant="bordered" radius='full' className='text-default font-[700]'  onClick={()=> window.open('https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month&__hstc=167995198.a545ea292245c4d89df71abfc2d151e2.1723005037834.1723005037834.1723005037834.1&__hssc=167995198.2.1723005037835&__hsfp=4242423886')}>Get started free</Button>
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