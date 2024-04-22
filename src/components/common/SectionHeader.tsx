import React, { FC } from "react";

type Props = {
  name: string;
  title: string;
  description: string;
};

const SectionHeader: FC<Props> = ({ name, title, description }) => {
  return (
    <div className="  max-w-8xl lg:text-center mb-5">
      <h2 className="text-xl font-semibold text-red1">{name}</h2>
      <p className="mt-0 text-xl font-semibold tracking-tight   sm:text-md">
        {title}
      </p>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default SectionHeader;
