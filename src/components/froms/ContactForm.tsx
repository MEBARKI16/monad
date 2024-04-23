"use client";

import { Button, TextArea, TextFieldInput } from "@radix-ui/themes";
import React, { useState } from "react";

import emailjs from "emailjs-com";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_xvf2wk7",
        "template_607qegx",
        e.target,
        "jJkLL4glKofAEYYYB"
      )
      .then(() => {
        alert("Email sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send email. Please try again.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className=" rounded-md bg-white1 p-6 md:w-full sm:w-full h-full">
      <form className="space-y-6" onSubmit={sendEmail}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <TextFieldInput
              size="3"
              radius="large"
              variant="soft"
              id="email"
              name="email"
              type="email"
              placeholder="your-email@domain.com"
              required
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
          </div>
          <div className="mt-2">
            <TextArea
              variant="soft"
              size="3"
              rows={5}
              id="message"
              name="message"
              placeholder="Your message"
              required
            />
          </div>
        </div>

        <div>
          <Button
            radius="large"
            size="3"
            variant="solid"
            color="blue"
            className="w-full bg-blue2 cursor-pointer disabled:bg-gray-200 disabled:cursor-wait"
            disabled={isLoading}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
