"use client";

import { Avatar, Button } from "@radix-ui/themes";
import React, { useState } from "react";

import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import toast from "react-hot-toast";

const Chat = () => {
  const [messages, setMessages] = useState<
    {
      text: string;
      sender: string;
    }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text?: string) => {
    if (!input.trim() && !text) {
      return;
    }

    setLoading(true);
    const newMessages = [
      ...messages,
      { text: text || input.trim(), sender: "user" },
    ];
    setMessages(newMessages);

    try {
      const response = await axios.post(
		  process.env.NEXT_PUBLIC_API ?? "",
        {
          query: text || input.trim(),
          user_id: 701,
          client_id: 2
        },
        {
          headers: {
            "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`
          }
        }
      );

	
		
      if (response.data && response.data.response) {
        const newMessages = [
          ...messages,
          { text: text || input.trim(), sender: "user" },
          { text: response.data.response, sender: "bot" },
        ];
        setMessages(newMessages);
      }
		
      setInput("");
    } catch (error) {
		//console.log(error.response)
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleDefaultQuestion = () => {
    sendMessage("Who is MonAI?");
    setMessages([{ text: "Who is MonAI?", sender: "user" }]);
  };
  return (
    <div className=" scroll-smooth md:scroll-auto flex flex-col h-[85vh] w-full justify-between bg-white1 mx-auto rounded-md">
      <div className="p-4 text-dark overflow-y-auto bg-white1">
        {messages.length === 0 && (
          <div className="flex-1 text-center">
            <p className="mt-3 text-base text-red1">
              Start chatting with MonAI
            </p>

            <div
              onClick={handleDefaultQuestion}
              className="sm:mb-8 sm:flex sm:justify-center mt-8 "
            >
              <div className="relative rounded-full  px-3 py-2 text-sm leading-6 text-white1  bg-red1 ring-1 ring-red1 hover:ring-red1">
                Ask{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Who is MonAI? <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        )}
        {messages.map(({ text, sender }, index) => (
          <div
            key={index}
            className={`mb-4 ${sender === "user" ? "text-right" : "text-left"}`}
          >
            
            <div
              className={`flex mb-4 gap-2 ${
                sender === "user" ? "flex-row-reverse " : "flex-row"
              }`}
            >
              <Avatar
                src={sender === "bot" ? "/bot.png" : ""}
                alt="Avatar"
                className="bg-white max-w-12 rounded-full shadow-lg w-12 h-12"
                fallback={sender === "bot" ? "Mo" : "Me"}
                radius="large"
              />
              <div
                className={`bg-${
                  sender === "bot" ? "white" : "white"
                } p-2 border border-red1 rounded-xl max-w-xs`}
              >
                {text}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-dark flex mb-4 gap-2 flex-row text-left">
            <Avatar
              src={"/bot.png"}
              alt="Avatar"
              className="max-w-12 rounded-full shadow-lg w-12 h-12"
              fallback="Mo"
              radius="large"
            />
            <div className="text-dark bg-white p-2 rounded-md max-w-xs animate-pulse">
              Typing...
            </div>
          </div>
        )}
      </div>
      <div className="text-dark flex p-4 gap-2 items-center">
        <input
          className="border border-red1 p-2 w-full rounded-md"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />{" "}
        <Button
          size="2"
          variant="outline"
          radius="large"
          className="bg-red1 text-white1 hover:bg-blue-500 cursor-pointer rounded-md text-dark"
          onClick={() => sendMessage()}
        >
          <ChevronLeftIcon className="text-white1 font-medium h-9 w-9 rotate-180" />
        </Button>{" "}
      </div>
    </div>
  );
};

export default Chat;
