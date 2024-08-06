import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

interface Props {
    title: string,
    description: string,
    features: string[]
}

export default function CardInfo({title, description, features}: Props) {
  return (
    <Card className="max-w-[400px] p-4">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={20}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={20}
        />
        <div className="flex flex-col">
          <p  className="text-md text-[gray]">{title}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p  className="text-[gray]">{description}</p>
      </CardBody>
      <Divider/>
      <CardFooter className="flex flex-col text-left items-start">
        <p
         className="text-[gray] mb-2"
        >
          Features
        </p>
          {features.map(((element, i)=> (
            <p key={i} className="text-[gray]">
                {`* ${element}`}
            </p>
          )))}

          <Button fullWidth size='lg' color="default" href="#" variant="solid" className="text-[white] mt-5">Learn More</Button>
      </CardFooter>
    </Card>
  );
}
