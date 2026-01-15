import { FaRegEdit } from "react-icons/fa";
import { PiUsersThree } from "react-icons/pi";
import { TbUserPlus } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import UserAvatar from "./UserAvatar";
import Image from "next/image";

const tabs = [
  "All",
  "About",
  "Portfolio",
  "My Services",
  "Product",
  "Hire Talent",
  "Jobs",
  "More",
];

const ACTIVE_TAB = "All";

const ProfileBanner = () => {
  return (
    <div className="w-full rounded-xl shadow bg-white">
      <div className="min-h-55 relative flex items-center justify-center rounded-t-xl bg-neutral-100 border border-dashed border-gray-300">
        <Image
          src="https://media.licdn.com/dms/image/v2/D5616AQGtbAviCJPdxQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1730484186643?e=1769644800&v=beta&t=5t2j5ZTsk2Buw1dTBgna-nVWckikGGEM0ZlBlhH-YHw"
          alt="Banner"
          height={100}
          width={100}
          className="object-cover w-full h-full object-center rounded-t-xl"
        />
        <FaRegEdit className="absolute top-4 right-4 text-gray-100 text-xl cursor-pointer hover:text-gray-200 transition-colors" />
      </div>

      <div className="w-full px-5 relative z-999 pb-10 -mt-15 flex justify-between items-center">
        <div className="flex w-full items-end-safe gap-5">
          <UserAvatar />
          <div className="w-full justify-between flex">
            <div>
              <p className="text-2xl font-semibold">Mostofa Fatin</p>
              <p className="mt-1 text-neutral-700">
                Frontend Developer at Xpartex Ltd.
              </p>

              <div className="flex items-center gap-3">
                <div className="flex text-sm mt-1 text-neutral-600 items-center gap-1">
                  <PiUsersThree className="text-lg" />
                  <p>
                    <span className="font-semibold">1.4K </span>Followers
                  </p>
                </div>
                <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                <div className="flex text-sm mt-1 text-neutral-600 items-center gap-1">
                  <TbUserPlus className="text-lg" />
                  <p>
                    <span className="font-semibold">0 </span>Follwing
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="signIn text-sm rounded-lg text-white font-semibold py-2 px-4 cursor-pointer">
                Follow me
              </button>
              <button className="text-sm rounded-lg border border-neutral-300 font-semibold py-2 px-4 cursor-pointer hover:bg-neutral-100 transition">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 flex items-center gap-6 font-medium">
        {tabs.map((tab) => {
          const isActive = tab === ACTIVE_TAB;

          return (
            <div
              key={tab}
              className={`relative py-2 hover:font-bold transition-all duration-300 flex px-2 items-center gap-1 cursor-pointer ${
                isActive
                  ? "text-neutral-900 border-b-2 border-[#00BFFF]"
                  : "text-neutral-600 hover:text-neutral-700"
              }`}
            >
              <span>{tab}</span>

              {tab === "More" && <IoIosArrowDown className="" />}

              {isActive && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-neutral-700/40 blur-sm rounded-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileBanner;
