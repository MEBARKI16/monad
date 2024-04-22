import ContactCard from "../card/ContactCard";
import ContactForm from "../froms/ContactForm";
import React from "react";
import SectionHeader from "../common/SectionHeader";
import SectionLayout from "../common/SectionLayout";
import { contactItems } from "@/data/texts/contactItems";

const ContactSection = () => {
  return (
    <div id="contact-us" className="bg-white1  ">
      <div id="contact-us" className=" md:mx-0 md:p-40 sm-p-2 rounded-md">

      <SectionLayout>
        <SectionHeader
          name={"Contact us"}
          title={"Let's Connect"}
          description={
            "If you're ready to explore what Monad can do for your business, we invite you to contact us. Let’s collaborate to unlock the potential of AI for your unique challenges."
          }
        />
        
          
            <div className=" border border-red1  mt-5 ml-5 flex flex-row gap-4">
              {contactItems.map((item) => (
                <ContactCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  contactInfo={item.contactInfo}
                  icon={item.icon}
                />
              ))}
            </div>
      
          <div className="mt-5 flex flex-1">
            <ContactForm />
          </div>
        
      </SectionLayout>
      </div>
    </div>
  );
};

export default ContactSection;
