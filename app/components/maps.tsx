"use client"

import Section from "./ui/section";
import ProductList from "./product-list";
import Image from "next/image";


const Maps = () => {

    return (

      <div className="relative h-[650px] sm:h-[500px] w-full overflow-hidden">
        <Image
              fill
              sizes="100vw"
              src="/maps.png"
              alt=""
              className="object-cover object-center -z-10"
            />
        <div className="h-full w-full my flex items-start sm:items-center p-8">
          <a className="h-full w-full absolute" href="https://www.google.com/maps" target="_blank"></a>
          <div className="text-black bg-white p-8 flex flex-col gap-4">
            <div className="text-4xl font-[350] tracking-widest">
              ALL DAY HIKERS
            </div>
            <div className="text-xl font-[250] tracking-wider">
              779 Nicholson St<br/>Melbourne VIC 3054<br/>Australia
            </div>
            <div className="text-xl font-[250] tracking-wider">
              Mon–Fri: 9.00am – 5.00pm<br/>
              Saturday: 9.00am – 6.00pm<br/>
              Sunday: 10.00am – 5.00pm<br/>
            </div>
            <div className="bg-orange-500 mt-8 px-4 py-2 tracking-widest text-white">GET DIRECTIONS</div>
          </div>
        </div>
      </div>
     );
}

export default Maps;
