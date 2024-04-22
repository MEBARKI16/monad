import FeatureCard from "../card/FeatureCard";
import React from "react";
import SectionHeader from "../common/SectionHeader";
import SectionLayout from "../common/SectionLayout";
import { aboutUsItems } from "@/data/texts/aboutUs";

const AboutSection = () => {
  return (
    <div id="about-us">
      <SectionLayout>
        <SectionHeader
          name={"About us"}
          title={"What We Do at Monad"}
          description={`Monad is more than a data company. We are pioneers in
        creating an intelligent, interconnected web of agents that adapt and
        grow according to your needs. Our commitment to innovation in data
        analysis and NLP places our clients at the forefront of the digital
        world, harnessing the transformative power of AI.`}
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-[5rem] items-center ">
            {aboutUsItems.map((item, index) => (
              <FeatureCard
                key={item.id}
                reverseOrder={index % 2 === 0}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default AboutSection;
