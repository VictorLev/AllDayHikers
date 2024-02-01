import React from "react";
import { create } from "zustand"

interface ViewProductProps {
  isOpen : boolean
  id?: number
  onOpen : (id:number) => void;
  onClose : () => void;
}

const useViewProduct = create<ViewProductProps>((set) => ({
  isOpen: false,
  children: undefined,
  onOpen: (id:number) => set({id, isOpen: true}),
  onClose: () => set( {isOpen:false} )
}))

export default useViewProduct
