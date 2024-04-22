"use client";

import { ArrowRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Button, Text } from "@radix-ui/themes";
import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, useState } from "react";
import Icon, { IconType } from "./Icon";

import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  title: string;
  content: JSX.Element | string;
  icon: IconType;
};
const Modal: FC<Props> = ({ title, content, icon }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full text-right">
        <Button
          size="1"
          variant="soft"
          radius="large"
          className="text-blue-600 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          learn more
          <ChevronLeftIcon className="font-medium h-4 w-4 rotate-180" />
        </Button>{" "}
      </div>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className=" m-auto flex min-h-full items-center justify-center p-4 max-w-3xl text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-2xl transition-all">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="flex-1 bg-white sm:p-6 flex flex-col items-start gap-2">
                    <div className="flex-shrink-0 flex items-center flex-start  text-blue-600">
                      <Icon icon={icon} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-gray-900">
                        {title}{" "}
                      </p>
                      <p className="mt-3 text-base text-gray-500">{content}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button
                      size="1"
                      color="blue"
                      variant="soft"
                      radius="large"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="1"
                      color="blue"
                      radius="large"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setOpen(false);
                        window.location.href = "#contact-us";
                      }}
                    >
                      Contact us
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
