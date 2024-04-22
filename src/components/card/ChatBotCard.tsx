"use client";

import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

import Chat from "../common/Chat";
import Icon from "../ui/Icon";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

const ChatBotCard = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div
          onClick={() => setOpen(true)}
          className="flex flex-col  rounded-xl drop-shadow-xl overflow-hidden cursor-pointer max-w-xs"
        >
          <div className="flex-1 bg-red1 p-6 flex flex-col items-start gap-2">
            <div className="flex-shrink-0 flex items-center flex-start  text-blue-600">
              <Icon icon={ChatBubbleLeftRightIcon} />
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold text-white1">Try MonAI</p>
              <p className="mt-3 text-base text-white1">
                Meet the first intelligent chatbot in Algeria!
              </p>
            </div>
          </div>
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
              <div className="fixed inset-0 bg-black/25 backdrop-blur-lg" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="p-2 m-auto flex min-h-full items-center justify-center px-4 py-2 max-w-3xl text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="relative p-2 w-full transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-2xl transition-all">
                    <button
                      type="button"
                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="flex-1 bg-red1 text-white1 sm:p-6 flex flex-col items-start gap-2">
                      <div className="flex-shrink-0 flex gap-4 items-center flex-start  text-blue-600">
                        <Icon icon={ChatBubbleBottomCenterIcon} />
                        <p className="text-xl font-semibold text-gray-900">
                          Chat with MonAI
                        </p>
                      </div>

                      <Chat />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </motion.div>
    </>
  );
};

export default ChatBotCard;
