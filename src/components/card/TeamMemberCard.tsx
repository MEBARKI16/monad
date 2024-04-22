import React, { FC } from "react";

import { Avatar } from "@radix-ui/themes";

type Props = {
  name: string;
  role: string;
  description: string;
  avatar?: string;
};

const TeamMemberCard: FC<Props> = ({ name, role, description, avatar }) => {
  return (
    <div className="bg-white1 p-6 rounded-md drop-shadow-sm text-center">
      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4">
        <Avatar
          src={avatar}
          fallback={name[0]}
          className="w-24 h-24 bg-blue1 rounded-full mx-auto mb-4"
        />
      </div>
      <h3 className="text-md text-red1 font-medium">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">{role}</p>
      <p className="text-xs text-gray-500 mb-4">{description}</p>
    </div>
  );
};

export default TeamMemberCard;
