"use client";

import { useState, useMemo } from "react";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { GiAutoRepair } from "react-icons/gi";
import { LuUserRound } from "react-icons/lu";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { RiUserSearchLine } from "react-icons/ri";
import { BriefcaseBusiness } from "lucide-react";
import { BsBoxSeam } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";

const SecondaryNav = () => {
  const [openKey, setOpenKey] = useState<string | null>("service");

  const sections = useMemo(
    () => [
      {
        key: "service",
        title: "My Service",
        icon: GiAutoRepair,
        items: [
          "On-demand service",
          "Courses",
          "Logistics Service",
          "Rental Service",
        ],
      },
      {
        key: "profile",
        title: "My Profile",
        icon: LuUserRound,
        items: [
          "Personal Information",
          "Experience",
          "Education & Career",
          "Certifications",
          "Skills",
          "Portfolio",
        ],
      },
      {
        key: "company",
        title: "Company Profile",
        icon: PiBuildingOfficeLight,
        items: ["Create profile", "Company List", "Product List"],
      },
    ],
    []
  );

  return (
    <div className="bg-white px-1 py-3 w-full rounded-r-xl flex flex-col gap-1">
      <div className="flex hover:bg-neutral-100 transition-all font-semibold duration-300 px-4 items-center py-2 rounded-lg text-[#00BFFF] cursor-pointer w-full justify-between">
        <div className="flex items-center gap-2">
          <IoHomeOutline className="text-2xl" />
          <p>Home</p>
        </div>
        <IoIosArrowDown className="text-xl" />
      </div>

      {sections.map(({ key, title, icon: Icon, items }) => {
        const isOpen = openKey === key;

        return (
          <div key={key}>
            <div
              onClick={() => setOpenKey(isOpen ? null : key)}
              className="flex hover:bg-neutral-100 transition-all duration-300 px-4 items-center py-2 rounded-lg text-neutral-600 cursor-pointer w-full justify-between"
            >
              <div className="flex font-medium items-center gap-2">
                <Icon className="text-2xl" />
                <p>{title}</p>
              </div>
              <IoIosArrowDown
                className={`text-xl transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isOpen && (
              <div className="flex gap-2 ml-10 items-start text-neutral-600">
                <div className="self-stretch w-px bg-neutral-300"></div>
                <div className="space-y-2">
                  {items.map((item) => (
                    <p key={item} className="cursor-pointer">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="flex hover:bg-neutral-100 transition-all duration-300 px-4 items-center py-2 rounded-lg text-neutral-600 cursor-pointer w-full gap-2 font-medium">
        <RiUserSearchLine className="text-2xl" />
        <p>Hire Talent</p>
      </div>

      <div className="flex hover:bg-neutral-100 transition-all duration-300 px-4 items-center py-2 rounded-lg text-neutral-600 cursor-pointer w-full gap-2 font-medium">
        <BriefcaseBusiness className="text-2xl" />
        <p>Jobs</p>
      </div>

      <div className="flex hover:bg-neutral-100 transition-all duration-300 px-4 items-center py-2 rounded-lg text-neutral-600 cursor-pointer w-full gap-2 font-medium">
        <BsBoxSeam className="text-2xl" />
        <p>My Product</p>
      </div>

      <div className="bg-neutral-200 h-px w-full my-3"></div>

      <div className="flex flex-col gap-1">
        <div className="flex hover:bg-neutral-100 transition-all duration-300 px-4 items-center py-2 rounded-lg text-neutral-600 cursor-pointer w-full gap-2 font-medium">
          <IoSettingsOutline className="text-2xl" />
          <p>Settings</p>
        </div>

        <div className="flex hover:bg-neutral-100 transition-all duration-300 px-4 items-center py-2 rounded-lg text-neutral-600 cursor-pointer w-full gap-2 font-medium">
          <TfiHeadphoneAlt className="text-2xl" />
          <p>Support</p>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;
