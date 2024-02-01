"use client"

import Image from "next/image";
import Section from "./ui/section";
import Container from "./ui/container";

const Tiles = () => {

    return (

        <div className="py-12 px-5">
          <div className="lg:grid lg:grid-cols-3 flex flex-col gap-5">
            <div className="relative h-auto min-h-[350px] lg:min-h-[500px] w-auto overflow-hidden flex justify-center items-center">
              <Image
                    fill
                    src="/tiles/t1.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
              <div className="h-full w-full flex justify-center items-center">
                <div className="flex flex-col">
                  <div className="text-white text-4xl font-[350] tracking-wider py-2">
                    NEW GEAR JUST ARRIVED
                  </div>
                  <div className="text-white border-4 border-white text-xl font-[350] tracking-wider p-3 text-center">
                    see collection
                  </div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[350px] lg:min-h-[500px] w-auto flex justify-center items-center">
              <Image
                    fill
                    src="/tiles/t2.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
            </div>
            <div className="relative min-h-[350px] lg:min-h-[500px] w-auto flex justify-center items-center" >
              <Image
                    fill
                    src="/tiles/t3.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
              <div className="h-full flex justify-center items-center">
                <div className="flex flex-col">
                  <div className="text-orange-700 border-orange-700 border-4 text-4xl font-[350] tracking-wider p-2">
                    SURPASS YOURSELF
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 relative min-h-[350px] lg:min-h-[500px] w-auto flex justify-center items-center">
              <Image
                    fill
                    src="/tiles/t4.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
              <div className="h-full flex justify-center items-center">
                <div className="flex flex-col">
                  <div className="text-white text-6xl font-[350] tracking-wider p-3 border-4 border-white">
                    LET THE ADVENTURE BEGIN
                  </div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[350px] lg:min-h-[500px] w-auto flex justify-center items-center">
              <Image
                    fill
                    src="/tiles/t5.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
             <div className="h-full flex justify-center items-center">
                <div className="flex flex-col">
                  <div className="text-white text-4xl font-[350] tracking-wider py-2">
                    EMBRACE THE WILD
                  </div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[350px] lg:min-h-[500px] w-auto flex justify-center items-center">
              <Image
                    fill
                    src="/tiles/t6.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
            </div>
            <div className="relative min-h-[350px] lg:min-h-[500px] w-auto flex justify-center items-center">
              <Image
                    fill
                    src="/tiles/t7.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
             <div className="h-full flex justify-center items-center">
                <div className="flex flex-col">
                  <div className="text-white text-4xl font-[350] tracking-wider py-2">
                    FIND TRUE NATURE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     );
}

export default Tiles;
