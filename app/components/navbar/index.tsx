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
          <Link href="#" color="foreground">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" color="foreground">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="#" variant="bordered" radius="full">
          Request Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="solid" className="text-[#011A41] font-[700]" radius="full">
          Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}