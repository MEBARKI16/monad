"use client";

import React, { FC } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string | JSX.Element;
  image: string;
  reverseOrder?: boolean;
};
const FeatureCard: FC<Props> = ({
  title,
  description,
  image,
  reverseOrder = false,
}) => {
  return (
    <motion.div whileInView={{ opacity: 1 }}>
      <div
        className={`grid items-center md:grid-cols-3 gap-16 p-4 ${
          reverseOrder ? " md:p-8 rounded-md" : ""
        }`}
      >
        <div
          className={`relative col-span-2 md:col-span-1 ${
            reverseOrder ? "md:col-start-3" : ""
          }`}
        >
          <Image
            src={image}
            alt={""}
            className="w-full rounded-sm h-auto opacity-0 p-2 bg-slate-200"
            width={268}
            height={268}
          />
         
          <Image
            src={image}
            alt={""}
            className="top-0 absolute w-full rounded-sm "
            width={268}
            height={268}
          />
        </div>

        <div className={`col-span-2 ${reverseOrder ? "md:row-start-1" : ""}`}>
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            {description}{" "}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
