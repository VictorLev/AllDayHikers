"use client"

import Image from "next/image"
import { Tab } from "@headlessui/react"
import myData from '../../../data/products.json';

interface GalleryProps {
  id:number
}

const Gallery: React.FC<GalleryProps> = ({
  id
}) => {

  const product = myData["products"].find(obj => {
    return obj.id === id
  })

  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {product?.imagesurl.map((image) => (
            <Tab key={id} className="relative flex aspect-square cursor-pointer items-center justify-center bg-white">
            {({ selected }) => (
              <div>
                <span className="absolute rounded h-full w-full aspect-square inset-0 overflow-hidden">
                  <Image
                    fill
                    src={image}
                    alt=""
                    className="object-cover object-center"
                  />
                </span>
              </div>
            )}
          </Tab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {product?.imagesurl.map((image) => (
          <Tab.Panel key={id} >
            <div className="aspect-square relative h-full w-full overflow-hidden">
              <Image
                fill
                src={image}
                alt=""
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
          )
        )}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Gallery
