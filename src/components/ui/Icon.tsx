import React, { FC } from "react";

export type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

type Props = {
  icon: IconType;
};

const Icon: FC<Props> = ({ icon: Icon }) => {
  return (
    <div className="bg-blue-100  relative w-9 h-9 rounded-full">
      <div className="bg-red1  absolute m-[4px] w-7 h-7 rounded-full">
        {Icon && <Icon className="m-[4px] font-bold w-5 h-5 text-white2" />}
      </div>
    </div>
  );
};

export default Icon;
