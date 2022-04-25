import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from 'next/image';

const GuestSelection = () => {
  let [isOpen, setIsOpen] = useState(true);
  let [isAttending, setIsAttending] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="relative bg-white rounded mx-auto p-10 w-1/2 shadow">
          <Dialog.Title className="font-header text-2xl">Patricia Bell</Dialog.Title>
          <Dialog.Description className="font-header text-gray-400">
            Mother of the Groom
          </Dialog.Description>

          <Image className="mb-4" src="/images/divider.png" alt="Divider" height="11" width="96" />

          <div className="mt-4">
                <div>
                    <p className="text-gray-400">Will you be attending the wedding on the 22nd February, 2023?</p>

                    <div className="flex mt-3">
                        <div onClick={() => { setIsAttending(true) }} className={`border border-2 border-theme-dark px-6 py-2 cursor-pointer rounded-l ${isAttending ? "bg-theme-dark text-white" : "bg-white text-black"}`}>
                            Yes
                        </div>
                        <div onClick={() => { setIsAttending(false) }} className={`border border-2 border-theme-dark px-6 py-2 cursor-pointer rounded-r ${!isAttending ? "bg-theme-dark text-white" : "bg-white text-black"}`}>
                            No
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-gray-400">Select your preferred food option</p>

                    <div className="flex mt-3">
                        <div className="border border-2 border-theme-dark px-6 py-2 cursor-pointer bg-theme-dark text-white rounded-l">
                            Chicken
                        </div>
                        <div className="border border-2 border-theme-dark px-6 py-2 -ml-1 bg-white cursor-pointer rounded-r">
                            Vegetarian
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-gray-400">What song will get you on the dance floor?</p>

                    <div className="flex mt-3">
                        <input className="border border-2 border-theme-dark px-6 py-2 w-full hover:outline-none rounded"/>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-gray-400">Additional Notes</p>

                    <div className="flex mt-3">
                        <input className="border border-2 border-theme-dark px-6 py-2 w-full hover:outline-none rounded"/>
                    </div>
                </div>

                <div className="mt-8 flex justify-between items-center">
                    <p className="text-gray-400 text-xs">* You have until the 12th December to change your preferences.</p>

                    <div className="flex">
                        <button className="text-theme-dark bg-white px-4 py-3 rounded">Cancel</button>
                        <button className="ml-3 bg-theme-dark text-white px-4 py-3 rounded">Save Changes</button>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default GuestSelection;
