"use client"

import { Dialog, Transition } from '@headlessui/react'
import { IconX } from '@tabler/icons-react'
import { Fragment } from 'react'

interface ModalProps {
  open: boolean,
  onClose: () => void,
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children
}) => {
  return (
    <Transition show={open} appear as={Fragment} >
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className='fixed inset-0 bg-black/50' aria-hidden="true"/>
        <div className='fixed h-screen w-screen top-6 overflow-y-auto z-30'>
          <div className="flex items-center justify-center p-4">
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className="w-full max-w-5xl overflow-hidden text-left align-middle">
                <div className='relative flex w-full items-center overflow-hidden bg-white p-4 shadow-2xl'>
                  <div className='absolute cursor-pointer top-4 right-8'>
                    <IconX onClick={onClose} size={20} />
                  </div>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
