import { CiLocationOn } from "react-icons/ci";
import { memo } from "react";

const Footer = () => {
  return (
    <div className="border-t flex flex-col items-center gap-3 py-3 justify-center bg-white border-neutral-100">
      <div className="flex text-neutral-500 items-center gap-3">
        <span className="hover:text-black transition-colors cursor-pointer">
          About Us
        </span>
        <div className="h-4 w-px bg-neutral-400"></div>
        <span className="hover:text-black transition-colors cursor-pointer">
          Customer Support
        </span>
        <div className="h-4 w-px bg-neutral-400"></div>
        <span className="hover:text-black transition-colors cursor-pointer">
          Terms of Use
        </span>
        <div className="h-4 w-px bg-neutral-400"></div>
        <span className="hover:text-black transition-colors cursor-pointer">
          Security & Privacy
        </span>
      </div>
      <div className="flex text-xs text-neutral-500 items-center gap-3">
        <span>Copyright @ 2004 - 2025 XPARTEX Limited</span>
        <span className="flex items-center">
          <CiLocationOn />
          House 11-32, Road-1, Mirpur 12, Dhaka 1216, Bangladesh
        </span>
      </div>
    </div>
  );
};

export default memo(Footer);
