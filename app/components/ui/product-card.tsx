"use client"


import Image from "next/image";
import { MouseEventHandler } from "react";


interface ProductCard {

}

const ProductCard: React.FC<ProductCard> = ({

}) => {


    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Actions */}
            <div className="aspect-square rounded-xl bg-blue-100 relative">

                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">

                    </div>
                </div>
            </div>
            {/* Dresciption */}
            <div>
                <p className="font-semibold text-lg">

                </p>
                <p className="text-sm text-gray-500">

                </p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-between">
            </div>
        </div>
    );
}

export default ProductCard;
