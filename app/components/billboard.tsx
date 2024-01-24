"use client"

import Image from "next/image";
import { useState } from "react";
import Container from "./container";

import { IconHelpHexagon, IconSun} from '@tabler/icons-react';


const Billboard = () => {

    return (
      <div>
        <div className="relative w-full h-[35rem] overflow-hidden">
          <Image
            src="/home-billboard/zach-betten-KYTT8L5JLDs-unsplash.jpg"
            alt="billboard"
            fill
            style={{ objectFit: "cover" }}

          />
        </div>
        <div className="bg-[#f2f2f2] w-full h-auto">
          <Container>
            <div className="flex flex-row h-12 justify-around font-sans items-center text-[#536b4d]">
              <div className="flex flex-row gap-2 items-center ">
                <IconHelpHexagon size={30}/>
                Frequently Asked Questions
              </div>
              <div className="flex flex-row gap-2 items-center">
                <IconSun size={30}/>
                Summer Sales
              </div>
              <div className="flex flex-row gap-2 items-center">
                <IconHelpHexagon size={30}/>
                Frequently Asked Questions
              </div>
            </div>
          </Container>
        </div>
      </div>
     );
}

export default Billboard;
