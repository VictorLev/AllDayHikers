"use client"

import Image from "next/image";
import Section from "./ui/section";
import Container from "./ui/container";

const Brands = () => {

    return (
      <Section title={"BRANDS"}>
          <div className="flex flex-row justify-center  ">
            <div className="bg-orange-500 mt-8 px-4 py-2 tracking-widest text-white">
              VIEW ALL
            </div>
          </div>
        <div className="py-12 px-5">
          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 flex flex-col gap-5">
            <div className="relative h-auto aspect-square w-auto overflow-hidden flex justify-center items-center">
              <Image
                    fill
                    sizes="50vw"
                    src="/tiles/t1.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
              <div className="h-full w-full flex justify-center items-end p-6">
                <div className="flex flex-col">
                  <div className="text-black bg-white text-4xl font-[350] tracking-wider p-3">
                    SummitCraft
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-auto aspect-square w-auto overflow-hidden flex justify-center items-center">
              <Image
                    fill
                    sizes="50vw"
                    src="/tiles/t2.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
              <div className="h-full w-full flex justify-center items-end p-6">
                <div className="flex flex-col">
                <div className="text-black bg-white text-4xl font-[350] tracking-wider p-3">
                    TrailBluff
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-auto aspect-square w-auto overflow-hidden flex justify-center items-center">
              <Image
                    fill
                    sizes="50vw"
                    src="/tiles/t3.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
              <div className="h-full w-full flex justify-center items-end p-6">
                <div className="flex flex-col">
                <div className="text-black bg-white text-4xl font-[350] tracking-wider p-3">
                    TrekFaux
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-auto aspect-square w-auto overflow-hidden flex justify-center items-center">
              <Image
                    fill
                    sizes="50vw"
                    src="/tiles/t4.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
              <div className="h-full w-full flex justify-center items-end p-6">
                <div className="flex flex-col">
                <div className="text-black bg-white text-4xl font-[350] tracking-wider p-3">
                    WildernessWander
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-auto aspect-square w-auto overflow-hidden flex justify-center items-center">
              <Image
                    fill
                    sizes="50vw"
                    src="/tiles/t5.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
              <div className="h-full w-full flex justify-center items-end p-6">
                <div className="flex flex-col">
                <div className="text-black bg-white text-4xl font-[350] tracking-wider p-3">
                    AlpineIllusion
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-auto aspect-square w-auto overflow-hidden flex justify-center items-center">
              <Image
                    fill
                    sizes="50vw"
                    src="/tiles/t6.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
              <div className="h-full w-full flex justify-center items-end p-6">
                <div className="flex flex-col">
                <div className="text-black bg-white text-4xl font-[350] tracking-wider p-3">
                    PeakPhantom
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-auto aspect-square w-auto overflow-hidden flex justify-center items-center">
              <Image
                    fill
                    sizes="50vw"
                    src="/tiles/t7.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
              <div className="h-full w-full flex justify-center items-end p-6">
                <div className="flex flex-col">
                <div className="text-black bg-white text-4xl font-[350] tracking-wider p-3">
                    HikeForge
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-auto aspect-square w-auto overflow-hidden flex justify-center items-center">
              <Image
                    fill
                    sizes="50vw"
                    src="/tiles/t2.jpg"
                    alt=""
                    className="object-cover object-center -z-10"
                  />
              <div className="h-full w-full flex justify-center items-end p-6">
                <div className="flex flex-col">
                <div className="text-black bg-white text-4xl font-[350] tracking-wider p-3">
                    BackcountryBogus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
     );
}

export default Brands;
