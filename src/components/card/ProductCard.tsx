import Icon, { IconType } from "../ui/Icon";
import React, { FC } from "react";

import Modal from "../ui/Modal";

type Props = {
  icon: IconType;
  title: string;
  description: JSX.Element | string;
  descriptionSummary: string;
};

const ProductCard: FC<Props> = ({
  description,
  descriptionSummary,
  icon,
  title,
}) => {
  return (
    <div className="  flex flex-col rounded-md drop-shadow-sm overflow-hidden">
      <div className=" flex-1 bg-white1 p-6 flex flex-col items-start gap-2">
        <div className="flex-shrink-0 flex items-center flex-start  text-blue2">
          <Icon icon={icon} />
        </div>
        <div className="flex-1">
          <p className="text-xl font-semibold text-red1">{title} </p>
          <p className="mt-3 text-base text-gray-500">{descriptionSummary}</p>
        </div>
        <Modal title={title} content={description} icon={icon} />
      </div>
    </div>
  );
};

export default ProductCard;
