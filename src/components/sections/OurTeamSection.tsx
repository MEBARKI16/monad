"use client";

import React from "react";
import SectionHeader from "../common/SectionHeader";
import SectionLayout from "../common/SectionLayout";
import TeamMemberCard from "../card/TeamMemberCard";
import { motion } from "framer-motion";
import { teamMembers } from "@/data/texts/team";

const OurTeamSection = () => {
  return (
    <div id="team">
      <SectionLayout bg>
        <SectionHeader
          name={"Our team"}
          title={"Discover the team behind Monad"}
          description={""}
        />

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <TeamMemberCard
                avatar={member.avatar}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            </motion.div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default OurTeamSection;
