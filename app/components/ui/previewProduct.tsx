"use client";

import useViewProduct from "@/hooks/view-product";
import Modal from "@/app/components/ui/modal";
import { Tab } from "@headlessui/react";
import myData from '../../../data/products.json';
import Image from "next/image";
import Gallery from "./gallery";

const PreviewProduct = () => {
  const previewProduct = useViewProduct();

  const products = myData["products"].find(obj => {
    return obj.id === previewProduct.id
  })


  return (
    <Modal
      open={previewProduct.isOpen}
      onClose={previewProduct.onClose}
    >
      <div className="grid w-full items-start overflow-y-auto">
      {/*THE PRODUCT CODE GOES HERE*/}
        <div className="p-3">
          <div className="flex flex-row">
            <div className="w-1/2">
              <Gallery id={previewProduct.id!}/>
            </div>
            <div className="p-6 w-1/2">
              <div className="flex flex-col">
                <div className="text-gray-600 py-1">
                  {products?.category.toUpperCase()}
                </div>
                <div className="text-4xl text-black tracking-widest pb-6">
                  {products?.name}
                </div>
                <div className="text-[#536b4d] tracking-widest pb-6">
                  {products?.price}
                </div>
                <div className="tracking-wide pb-2">
                  Tax included. Shipping calculated at checkout.
                </div>
                <hr/>
                <div className="flex flex-col gap-y-1">
                  {products?.colours.length! > 0 &&
                    <>
                      <div className="text-slate-500 tracking-[0.4em] py-2">
                        COLOUR
                      </div>
                      <div className="flex flex-row gap-x-2">
                      {products?.colours.map((colour) => (
                        <div key={colour} className="text-xl border-black border-2 py-2 px-4">
                          {colour}
                        </div>
                      ))}
                      </div>
                    </>
                  }
                  {products?.size.length! > 0 &&
                    <>
                      <div className="text-slate-500 tracking-[0.4em] py-2">
                        SIZE
                      </div>
                      <div className="flex flex-row gap-x-2">
                      {products?.size.map((size) => (
                        <div key={size} className="text-xl border-black border-2 py-2 px-4">
                          {size}
                        </div>
                      ))}
                      </div>
                    </>
                  }
                  <div className="pt-8 text-justify font-sans font-light">
                    {products?.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default PreviewProduct;
