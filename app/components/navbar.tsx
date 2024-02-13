"use client"

import { useState } from "react";
import Container from "./ui/container";
import Image from "next/image";
import { IconSearch, IconUser, IconShoppingCart } from '@tabler/icons-react';
import { Menu, Transition } from "@headlessui/react";



const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false)

    return (
      <div className="absolute t-0 r-0 z-10 w-full bg-gradient-to-b from-black/[.4] ">
        <Container>
          <div className="flex h-40 items-center p-4">
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
              <ul className="flex flex-wrap justify-center gap-x-8 text-white ">
                <li >
                  <Menu>
                  <Menu.Button className="hover:text-black hover:bg-white p-2 transition textshadow">ACTIVITY</Menu.Button>
                    <Menu.Items className="absolute inset-x-[25vw]">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="bg-white text-black w-[50vw] flex flex-wrap justify-around py-8"
                        >
                          <div className="flex flex-col ">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              HIKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                              Packs<br/><br/>
                              Tents<br/><br/>
                              Sleep Systems<br/><br/>
                              Camp & Kitchen<br/><br/>
                              Footwear<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              FASTPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                              Packs<br/><br/>
                              Tents & Shelters<br/><br/>
                              Sleep Systems<br/><br/>
                              Footwear<br/><br/>
                              Gear & Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            BIKEPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Bikepacking Bags<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Cookware<br/><br/>
                            Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            CAMPING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Tents<br/><br/>
                            Chairs<br/><br/>
                            Cookware<br/><br/>
                            Food<br/><br/>
                            Sleep Systems<br/><br/>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </li>
                <li>
                  <Menu>
                  <Menu.Button onClick={() => setIsShowing((isShowing) => !isShowing)} className="hover:text-black hover:bg-white p-2 transition textshadow">CLOTHING</Menu.Button>
                    <Menu.Items className="absolute inset-x-[25vw]">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="bg-white text-black w-[50vw] flex flex-wrap justify-around py-8"
                        >
                          <div className="flex flex-col ">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              HIKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Packs<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Camp & Kitchen<br/><br/>
                            Footwear<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              FASTPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                              Packs<br/><br/>
                              Tents & Shelters<br/><br/>
                              Sleep Systems<br/><br/>
                              Footwear<br/><br/>
                              Gear & Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            BIKEPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Bikepacking Bags<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Cookware<br/><br/>
                            Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            CAMPING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Tents<br/><br/>
                            Chairs<br/><br/>
                            Cookware<br/><br/>
                            Food<br/><br/>
                            Sleep Systems<br/><br/>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </li>
                <li>

                  <Menu>
                  <Menu.Button onClick={() => setIsShowing((isShowing) => !isShowing)} className="hover:text-black hover:bg-white p-2 transition textshadow">TENTS</Menu.Button>
                    <Menu.Items className="absolute inset-x-[25vw]">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="bg-white text-black w-[50vw] flex flex-wrap justify-around py-8"
                        >
                          <div className="flex flex-col ">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              HIKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Packs<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Camp & Kitchen<br/><br/>
                            Footwear<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              FASTPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                              Packs<br/><br/>
                              Tents & Shelters<br/><br/>
                              Sleep Systems<br/><br/>
                              Footwear<br/><br/>
                              Gear & Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            BIKEPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Bikepacking Bags<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Cookware<br/><br/>
                            Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            CAMPING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Tents<br/><br/>
                            Chairs<br/><br/>
                            Cookware<br/><br/>
                            Food<br/><br/>
                            Sleep Systems<br/><br/>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </li>
                <li>
                  <Menu>
                  <Menu.Button onClick={() => setIsShowing((isShowing) => !isShowing)} className="hover:text-black hover:bg-white p-2 transition textshadow">PACKS</Menu.Button>
                    <Menu.Items className="absolute inset-x-[25vw]">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="bg-white text-black w-[50vw] flex flex-wrap justify-around py-8"
                        >
                          <div className="flex flex-col ">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              HIKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Packs<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Camp & Kitchen<br/><br/>
                            Footwear<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              FASTPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                              Packs<br/><br/>
                              Tents & Shelters<br/><br/>
                              Sleep Systems<br/><br/>
                              Footwear<br/><br/>
                              Gear & Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            BIKEPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Bikepacking Bags<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Cookware<br/><br/>
                            Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            CAMPING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Tents<br/><br/>
                            Chairs<br/><br/>
                            Cookware<br/><br/>
                            Food<br/><br/>
                            Sleep Systems<br/><br/>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </li>
                <li>
                  <Menu>
                  <Menu.Button onClick={() => setIsShowing((isShowing) => !isShowing)} className="hover:text-black hover:bg-white p-2 transition textshadow">SLEEPING</Menu.Button>
                    <Menu.Items className="absolute inset-x-[25vw]">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="bg-white text-black w-[50vw] flex flex-wrap justify-around py-8"
                        >
                          <div className="flex flex-col ">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              HIKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Packs<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Camp & Kitchen<br/><br/>
                            Footwear<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              FASTPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                              Packs<br/><br/>
                              Tents & Shelters<br/><br/>
                              Sleep Systems<br/><br/>
                              Footwear<br/><br/>
                              Gear & Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            BIKEPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Bikepacking Bags<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Cookware<br/><br/>
                            Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            CAMPING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Tents<br/><br/>
                            Chairs<br/><br/>
                            Cookware<br/><br/>
                            Food<br/><br/>
                            Sleep Systems<br/><br/>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </li>
                <li>
                  <Menu>
                  <Menu.Button onClick={() => setIsShowing((isShowing) => !isShowing)} className="hover:text-black hover:bg-white p-2 transition textshadow">ACTIVITY</Menu.Button>
                    <Menu.Items className="absolute inset-x-[25vw]">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="bg-white text-black w-[50vw] flex flex-wrap justify-around py-8"
                        >
                          <div className="flex flex-col ">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              HIKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Packs<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Camp & Kitchen<br/><br/>
                            Footwear<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              FASTPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                              Packs<br/><br/>
                              Tents & Shelters<br/><br/>
                              Sleep Systems<br/><br/>
                              Footwear<br/><br/>
                              Gear & Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            BIKEPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Bikepacking Bags<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Cookware<br/><br/>
                            Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            CAMPING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Tents<br/><br/>
                            Chairs<br/><br/>
                            Cookware<br/><br/>
                            Food<br/><br/>
                            Sleep Systems<br/><br/>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </li>
                <li>
                  <Menu>
                  <Menu.Button onClick={() => setIsShowing((isShowing) => !isShowing)} className="hover:text-black hover:bg-white p-2 transition textshadow">GEARS</Menu.Button>
                    <Menu.Items className="absolute inset-x-[25vw]">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="bg-white text-black w-[50vw] flex flex-wrap justify-around py-8"
                        >
                          <div className="flex flex-col ">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              HIKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Packs<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Camp & Kitchen<br/><br/>
                            Footwear<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              FASTPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                              Packs<br/><br/>
                              Tents & Shelters<br/><br/>
                              Sleep Systems<br/><br/>
                              Footwear<br/><br/>
                              Gear & Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            BIKEPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Bikepacking Bags<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Cookware<br/><br/>
                            Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            CAMPING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Tents<br/><br/>
                            Chairs<br/><br/>
                            Cookware<br/><br/>
                            Food<br/><br/>
                            Sleep Systems<br/><br/>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </li>
                <li>
                  <Menu>
                  <Menu.Button onClick={() => setIsShowing((isShowing) => !isShowing)} className="hover:text-black hover:bg-white p-2 transition textshadow">BRAND</Menu.Button>
                    <Menu.Items className="absolute inset-x-[25vw]">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="bg-white text-black w-[50vw] flex flex-wrap justify-around py-8"
                        >
                          <div className="flex flex-col ">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              HIKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Packs<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Camp & Kitchen<br/><br/>
                            Footwear<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              FASTPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                              Packs<br/><br/>
                              Tents & Shelters<br/><br/>
                              Sleep Systems<br/><br/>
                              Footwear<br/><br/>
                              Gear & Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            BIKEPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Bikepacking Bags<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Cookware<br/><br/>
                            Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            CAMPING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Tents<br/><br/>
                            Chairs<br/><br/>
                            Cookware<br/><br/>
                            Food<br/><br/>
                            Sleep Systems<br/><br/>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </li>
                <li>
                  <Menu>
                  <Menu.Button onClick={() => setIsShowing((isShowing) => !isShowing)} className="hover:text-black hover:bg-white p-2 transition textshadow">SALE</Menu.Button>
                    <Menu.Items className="absolute inset-x-[25vw]">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="bg-white text-black w-[50vw] flex flex-wrap justify-around py-8"
                        >
                          <div className="flex flex-col ">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              HIKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Packs<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Camp & Kitchen<br/><br/>
                            Footwear<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                              FASTPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                              Packs<br/><br/>
                              Tents & Shelters<br/><br/>
                              Sleep Systems<br/><br/>
                              Footwear<br/><br/>
                              Gear & Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            BIKEPACKING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Bikepacking Bags<br/><br/>
                            Tents<br/><br/>
                            Sleep Systems<br/><br/>
                            Cookware<br/><br/>
                            Accessories<br/><br/>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-xl font-[500] tracking-wider p-4">
                            CAMPING
                            </div>
                            <div className="text-xl font-[250] tracking-wider p-3">
                            Tents<br/><br/>
                            Chairs<br/><br/>
                            Cookware<br/><br/>
                            Food<br/><br/>
                            Sleep Systems<br/><br/>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </li>
              </ul>
            </div>
            {/* ICONS */}
            <div className="flex flex-row gap-4 textshadow m-4">
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
