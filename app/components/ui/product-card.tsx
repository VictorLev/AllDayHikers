"use client"


import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import myData from '../../../data/products.json';
import useViewProduct from "@/hooks/view-product";


interface ProductCard {
    id : number
}

const ProductCard: React.FC<ProductCard> = ({
  id
}) => {
    const [ready, setReady] = useState(false);

    const handleLoad = (event: any) => {
      event.persist();
      if (event.target.srcset) {
        setReady(true);
      }
    }
    const products = myData["products"].find(obj => {
      return obj.id === id
    })

    const viewProduct = useViewProduct()

    const handleStatus = (event: MouseEventHandler<HTMLDivElement>, id:number) => {
      event

    }

    const onPreview: MouseEventHandler<HTMLDivElement> = (event) => {
      event.stopPropagation()
      viewProduct.onOpen(id)
    }


    return (
        <div className="bg-white relative group space-y-4">
          {/* Images and Actions */}
          <div className="aspect-square rounded-xl bg-blue-100 relative">
              <Image
                src={products?.imagesurl[0]!}
                alt="products imgae"
                fill
                style={{ objectFit: "cover" }}
                onLoad={handleLoad}

              />
              <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                  <div className="flex gap-x-6 justify-center">
                      {/* FULL VIEW Button */}
                  </div>
              </div>
          </div>
          {/* Dresciption */}
          <div>
              <p className="font-semibold text-lg">
                {products?.name!}
              </p>
              <p className="text-sm text-gray-500">
                {products?.category!}
              </p>
          </div>
          {/* Price */}
          <div className="flex items-center mp-8 justify-between">
              {products?.price!}
          </div>
          <div className="hidden lg:block">
            <div className="opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition ease-in-out absolute w-full inset-0 p-6 ">
              <div className="text-center cursor-pointer text-white bg-orange-500 py-1"
                onClick={onPreview}
              >
                Quick View
              </div>
            </div>
          </div>
        </div>
    );
}

export default ProductCard;
