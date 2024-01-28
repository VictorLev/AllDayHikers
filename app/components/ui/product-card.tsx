"use client"


import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import myData from '../../../data/products.json';


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

    return (
        <div className="bg-white group cursor-pointer space-y-4">
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
            <div className="flex items-center justify-between">
                {products?.price!}
            </div>
        </div>
    );
}

export default ProductCard;
