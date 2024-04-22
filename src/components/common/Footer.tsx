import Image from "next/image";
import { socialLinks } from "@/data/texts/socialLinks";

const Footer = () => {
  return (
    <footer className="bg-blue1 py-4 mt-0">
      <div className="flex items-center justify-between px-8 mx-auto text-white">
        <div className="flex-1 flex items-center space-x-4">
          <a href={socialLinks.linkedIn}>
            <Image
              className="h-auto w-6 fill-black"
              src="/linkedin.svg"
              alt=""
              width={24}
              height={24}
            />
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            className="h-auto w-32"
            src="/logo-secondary.svg"
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="flex-1 flex justify-end text-xs text-gray-400">
          © 2024 Monad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
