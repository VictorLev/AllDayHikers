"use client"

import Image from "next/image";
import { useState } from "react";
import Container from "./ui/container";

import { IconHelpHexagon, IconSun, IconMessages} from '@tabler/icons-react';


const Billboard = () => {

  const [ready, setReady] = useState(false);

  const handleLoad = (event: any) => {
    event.persist();
    if (event.target.srcset) {
      setReady(true);
    }
  };
    return (
      <div>
        <div className="relative w-full h-[35rem] overflow-hidden"
          style={{
            opacity: ready ? 1 : 0,
            transition: "opacity .5s ease-in-out"
          }}
        >
          <Image
            src="/home-billboard/zach-betten-KYTT8L5JLDs-unsplash.jpg"
            alt="billboard"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            onLoad={handleLoad}

          />
        </div>
        <div className="bg-[#f2f2f2] w-full h-auto ">
          <Container>
            <div className="flex flex-row justify-around font-sans items-center text-[#536b4d] mx-10 my-2">
              <div className="flex flex-row gap-2 items-center ">
                <IconMessages size={30}/>
                Talk to an Expert
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
