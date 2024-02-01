"use client"

import PreviewProduct from "@/app/components/ui/previewProduct";
import { useEffect, useState } from "react";

const ProductProvider = () => {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  },[])

  if(!isMounted) {
    return null
  }

  return (
  <>
    <PreviewProduct />
  </> );
}

export default ProductProvider;
