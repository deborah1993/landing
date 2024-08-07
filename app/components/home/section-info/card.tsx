'use client'

import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

interface Props {
    title: string,
    description: string,
    secondDescription?: string,
    features: string[]
}

export default function CardInfo({title, description, secondDescription, features}: Props) {
  return (
    <Card className="max-w-[400px] p-4">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p  className="text-default font-black">{title}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p  className="text-[gray]">{description}</p>
        {secondDescription ?    <p
         className="text-[gray] mb-2"
        >
          {secondDescription}
        </p> : null}
      </CardBody>
      <Divider/>


      <CardFooter className="flex flex-col text-left items-start">
  {features.length > 0 ? (
<>
<p
 className="text-[gray] mb-2"
>
  Features
</p>
  {features.map(((element, i)=> (
    <div className="flex">
      <div className="list-item-cards-info"></div>
    <p key={i} className="text-[gray]">
        {`${element}`}
    </p>
    </div>
  )))}

</>) : null
        }

          <Button fullWidth size='lg' color="default" variant="solid" className="text-[white] mt-5" onClick={()=> window.open('https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month&__hstc=167995198.a545ea292245c4d89df71abfc2d151e2.1723005037834.1723005037834.1723005037834.1&__hssc=167995198.2.1723005037835&__hsfp=4242423886')}>Learn More</Button>
      </CardFooter>
    </Card>
  );
}
