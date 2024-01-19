"use client"

import { useState } from "react";
import Container from "./container";
import Image from "next/image";
import { IconSearch, IconUser, IconShoppingCart } from '@tabler/icons-react';



const Navbar = () => {

    return (
      <div className="absolute t-0 r-0 z-10 w-full">
        <Container>
          <div className="flex h-20 items-center">
            {/* LOGO */}
            <div className="px-8">
              <Image
                  src="/hike-icon.png"
                  width={200}
                  height={200}
                  alt="logo"
              />
            </div>
            {/* NAVBAR MENU */}
            <div className="m-auto w-full flex justify-center">
              <ul className="flex flex-row gap-x-8 text-white textshadow">
                <li>
                  ACTIVITY
                </li>
                <li>
                  CLOTHING
                </li>
                <li>
                  TENTS
                </li>
                <li>
                  PACKS
                </li>
                <li>
                  SLEEPING
                </li>
                <li>
                  ACTIVITY
                </li>
                <li>
                  GEARS
                </li>
                <li>
                  BRAND
                </li>
                <li>
                  SALE
                </li>
                <li>
                  MORE
                </li>
              </ul>
            </div>
            {/* ICONS */}
            <div className="flex flex-row gap-3 textshadow m-4">
              <IconUser color="white" size={30}/>
              <IconSearch color="white" size={30}/>
              <IconShoppingCart color="white" size={30}/>
            </div>
          </div>

        </Container>
      </div>
     );
}

export default Navbar;
