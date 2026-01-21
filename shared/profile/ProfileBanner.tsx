"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";
import { PiUsersThree } from "react-icons/pi";
import { TbUserPlus } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import UserAvatar from "./UserAvatar";

type Tab = {
  label: string;
  path?: string;
  isMore?: boolean;
};

const tabs: Tab[] = [
  { label: "All", path: "/profile/all" },
  { label: "About", path: "/profile/about" },
  { label: "Portfolio", path: "/profile/portfolio" },
  { label: "My Services", path: "/profile/service" },
  { label: "Product", path: "/profile/products" },
  { label: "Hire Talent", path: "/profile/hire-talent" },
  { label: "Jobs", path: "/profile/jobs" },
  { label: "More", isMore: true },
];

const ProfileBanner = () => {
  const pathname = usePathname();

  return (
    <section className="w-full overflow-hidden rounded-xl bg-white shadow-md">
      {/* ================= Banner with Full Cover Image ================= */}
      <div className="min-h-45 relative flex items-center justify-center rounded-t-xl bg-neutral-100 border border-dashed border-gray-300">
        <Image
          src="https://media.licdn.com/dms/image/v2/D5616AQGtbAviCJPdxQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1730484186643?e=1769644800&v=beta&t=5t2j5ZTsk2Buw1dTBgna-nVWckikGGEM0ZlBlhH-YHw"
          alt="Banner"
          height={100}
          width={100}
          className="object-cover w-full h-full object-center rounded-t-xl"
        />
        <FaRegEdit className="absolute top-4 right-4 text-gray-100 text-xl cursor-pointer hover:text-gray-200 transition-colors" />
      </div>

      {/* ================= Profile Info Section ================= */}
      <div className="relative px-3 sm:px-3 md:px-4">
        {/* Main content wrapper */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-3">
          {/* Left: Avatar (overlapping banner) */}
          <div className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10">
            <UserAvatar />
          </div>

          {/* Right: Profile Info + Actions */}
          <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-2 pb-4 sm:pb-5 sm:pt-2 md:pt-3">
            {/* Profile Details */}
            <div className="flex-1 min-w-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 truncate">
                Faysal Ahmed
              </h1>
              <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm md:text-base text-gray-600">
                QA Garment Technician, 3d Designer
              </p>

              {/* Followers & Following */}
              <div className="mt-2 sm:mt-2.5 flex items-center gap-4 text-xs sm:text-sm">
                <span className="flex items-center gap-1 text-gray-600">
                  <PiUsersThree className="text-base sm:text-lg text-gray-500" />
                  <span className="font-semibold text-gray-900">1,413</span>
                  <span className="text-gray-600">followers</span>
                </span>

                <span className="w-1 h-1 rounded-full bg-gray-400"></span>

                <span className="flex items-center gap-1 text-gray-600">
                  <TbUserPlus className="text-base sm:text-lg text-gray-500" />
                  <span className="font-semibold text-gray-900">675</span>
                  <span className="text-gray-600">following</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 sm:gap-2.5 sm:flex-shrink-0">
              <button className="flex-1 sm:flex-none whitespace-nowrap rounded-md sm:rounded-lg bg-cyan-400 hover:bg-cyan-500 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all shadow-sm hover:shadow-md">
                Follow Me
              </button>
              <button className="flex-1 sm:flex-none whitespace-nowrap rounded-md sm:rounded-lg border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-gray-700 transition-all">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Navigation Tabs ================= */}
      <nav className="border-t border-gray-200">
        <div className="flex gap-3 sm:gap-5 md:gap-6 overflow-x-auto px-3 sm:px-5 md:px-6 text-xs sm:text-sm font-medium scrollbar-hide">
          {tabs.map((tab) => {
            const isActive =
              tab.path &&
              (pathname === tab.path || pathname.startsWith(tab.path + "/"));

            if (tab.isMore) {
              return (
                <button
                  key={tab.label}
                  className={`relative py-2 hover:font-bold transition-all duration-300 flex px-2 items-center gap-1 cursor-pointer ${
                    isActive
                      ? "text-neutral-900 border-b-2 border-[#00BFFF]"
                      : "text-neutral-600 hover:text-neutral-700"
                  }`}
                >
                  {tab.label}
                  <IoIosArrowDown className="text-sm" />
                </button>
              );
            }

            return (
              <Link
                key={tab.label}
                href={tab.path!}
                className={`relative flex-shrink-0 py-3 sm:py-3.5 whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-gray-900 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-t"></span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </section>
  );
};

export default ProfileBanner;
