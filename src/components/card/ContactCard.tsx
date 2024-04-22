import Icon, { IconType } from "../ui/Icon";
import React, { FC } from "react";

type Props = {
  icon: IconType;
  title: string;
  description: string;
  contactInfo: string;
};
const ContactCard: FC<Props> = ({ icon, contactInfo, description, title }) => {
  return (
    <div className="max-w-md flex flex-row gap-2 ">
      
      <Icon icon={icon} />
      
      <div className="flex flex-row">
        <div className="flex items-center ml-3 mr-5 ">
          <h5 className="text-lg font-bold tracking-tight text-gray-900">
            {title}
          </h5>
                  <p className=" ml-5 text-lg font-bold   tracking-tight  text-red1">{contactInfo}</p>

        </div>
      </div>
    </div>
  );
};

export default ContactCard;
