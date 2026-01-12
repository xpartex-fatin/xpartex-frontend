import Logo from "@/public/hooks/icon/Logo";
import LanguageDropdown from "./LanguageDropdown";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { FiMoon } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname()?.split("?")[0] || "";
  const hideFooterOnProfile = pathname.startsWith("/profile");
  const authRoutes = pathname.startsWith("/auth");

  return (
    <div className="w-full z-9999 fixed top-0 bg-white border-b border-neutral-200">
      <div className="flex items-center justify-between w-full px-4 py-4 max-w-380 mx-auto">
        <div className="min-w-75">
          {" "}
          <Logo />
        </div>

        {!authRoutes && (
          <div className="flex flex-1 items-center justify-between gap-4 ml-6">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                size={22}
              />
              <input
                type="text"
                placeholder="Start search here..."
                className="pl-10 pr-3 py-2.5 w-100 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            <div className="flex items-center gap-18">
              <div className="flex items-center gap-8 text-neutral-600 text-[24px]">
                <div className="relative">
                  <FiMoon className="cursor-pointer hover:text-neutral-800" />
               
                </div>

                <div className="relative">
                  <FiUsers className="cursor-pointer hover:text-neutral-800" />
                  <span className="absolute -top-2 -right-2 bg-[#00BFFF] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                    3
                  </span>
                </div>

                <div className="relative">
                  <IoNotificationsOutline className="cursor-pointer hover:text-neutral-800" />
                  <span className="absolute -top-2 -right-2 bg-[#00BFFF] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                    7
                  </span>
                </div>

                <div className="relative">
                  <MdOutlineEmail className="cursor-pointer hover:text-neutral-800" />
                  <span className="absolute -top-2 -right-2 bg-[#00BFFF] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                    5
                  </span>
                </div>
              </div>

              <Image
                src="https://i.ibb.co.com/67fpNVMH/profile.jpg"
                alt="User"
                width={60}
                height={60}
                className="object-cover object-center w-10 h-10 rounded-full border border-neutral-200"
                priority
              />
            </div>
          </div>
        )}

        {!hideFooterOnProfile && <LanguageDropdown />}
      </div>
    </div>
  );
};

export default Navbar;
