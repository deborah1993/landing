'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";

export default function Nav() {
  return (
    <Navbar className="bg-[#0B2C5E] py-2">
      <NavbarBrand className="flex items-center pb-3 rounded-none">
        <Image src='/landtech-logo-light.svg' width='180px'/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link onClick={()=> window.open('https://landtech.us/products/landinsight-pricing-plans')} color="foreground">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={()=> window.open('https://landtech.us/about-us')}>
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link onClick={()=> window.open('https://auth.land.tech/u/login?state=hKFo2SBGN3FaQVNYa1VvT2hFeUJQc09oUmtwLVRpbG0zNWhlbaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEFfOU5EMlFpeW5sNVNHWE9DczZkSjNXREFabWN0WnA3o2NpZNkgNWo0dU94NnNCZHBGaW8yN2FKUUQzNkxoZWFJNmJVQ3Y')} color="foreground">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" variant="solid" className="text-[#011A41] font-[700]" radius="full" onClick={()=> window.open('https://landtech.us/request-your-landtech-demo')}>
          Get a Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button  color="secondary" variant="bordered" radius="full" className='font-[700]' onClick={()=> window.open('https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month&__hstc=167995198.a545ea292245c4d89df71abfc2d151e2.1723005037834.1723005037834.1723005037834.1&__hssc=167995198.2.1723005037835&__hsfp=4242423886')}>
          Get started free
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}