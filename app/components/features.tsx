"use client"

import Image from "next/image";
import { useState } from "react";
import Container from "./ui/container";

import { IconHelpHexagon, IconSun} from '@tabler/icons-react';
import Section from "./ui/section";


const Features = () => {

    return (
      <div>
        <Section title={"REDUCE THE BURDEN WITH LIGHTER GEAR"}>
          <div className="flex flex-row justify-center  ">
            <a href="/">
              <div className="border-2 border-black mt-8 px-4 py-2 tracking-widest">
                VIEW ALL
              </div>
            </a>
          </div>


        </Section>
      </div>
     );
}

export default Features;
