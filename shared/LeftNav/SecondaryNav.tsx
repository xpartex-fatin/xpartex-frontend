"use client";

import { useState, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import drawerToggle from "@/public/auth/drawerToogle.svg";
// navConfig.ts
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { GiAutoRepair } from "react-icons/gi";
import { LuUserRound } from "react-icons/lu";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { RiUserSearchLine } from "react-icons/ri";
import { BriefcaseBusiness } from "lucide-react";
import { BsBoxSeam } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const navConfig = [
  {
    title: "Home",
    icon: IoHomeOutline,
    path: "/dashboard",
  },
  {
    title: "My Service",
    icon: GiAutoRepair,
    key: "service",
    children: [
      { title: "On-demand service", path: "/services/on-demand" },
      { title: "Courses", path: "/services/courses" },
      { title: "Logistics Service", path: "/services/logistics" },
      { title: "Rental Service", path: "/services/rental" },
    ],
  },
  {
    title: "My Profile",
    icon: LuUserRound,
    key: "profile",
    children: [
      { title: "Personal Information", path: "/profile/personal" },
      { title: "Experience", path: "/profile/experience" },
      { title: "Education & Career", path: "/profile/education" },
      { title: "Certifications", path: "/profile/certifications" },
      { title: "Skills", path: "/profile/skills" },
      { title: "Portfolio", path: "/profile/portfolio" },
    ],
  },
  {
    title: "Company Profile",
    icon: PiBuildingOfficeLight,
    key: "company",
    children: [
      { title: "Create Profile", path: "/company/create" },
      { title: "Company List", path: "/company/list" },
      { title: "Product List", path: "/company/products" },
    ],
  },
  {
    title: "Hire Talent",
    icon: RiUserSearchLine,
    path: "/hire-talent",
  },
  {
    title: "Jobs",
    icon: BriefcaseBusiness,
    path: "/jobs",
  },
  {
    title: "My Product",
    icon: BsBoxSeam,
    path: "/products",
  },
  {
    divider: true,
  },
  {
    title: "Settings",
    icon: IoSettingsOutline,
    path: "/settings",
  },
  {
    title: "Support",
    icon: TfiHeadphoneAlt,
    path: "/support",
  },
];

const DrawerToggleButton = memo(() => (
  <div className="absolute top-2 -right-2 cursor-pointer rotate-180">
    <Image
      src={drawerToggle}
      alt="Drawer Toggle"
      width={32}
      height={32}
      className="rounded-lg w-6 bg-white"
    />
  </div>
));
DrawerToggleButton.displayName = "DrawerToggleButton";

const SecondaryNav = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="bg-white min-w-60 px-1 py-5 w-full rounded-r-xl flex relative flex-col gap-1">
      <DrawerToggleButton />

      {navConfig.map((nav, index) => {
        if (nav.divider) {
          return (
            <div key={index} className="bg-neutral-200 h-px w-full my-3" />
          );
        }

        const Icon = nav.icon;
        const isOpen = openKey === nav.key;

        // 🔹 Simple link item
        if (!nav.children) {
          return (
            <Link
              key={nav.title}
              href={nav.path!}
              className="flex hover:bg-neutral-100 transition-all duration-300 px-4 items-center py-2 rounded-lg text-neutral-600 cursor-pointer w-full gap-2 font-medium"
            >
              {Icon && <Icon className="text-2xl" />}
              <p>{nav.title}</p>
            </Link>
          );
        }

        // 🔹 Accordion item
        return (
          <div key={nav.title}>
            <div
              onClick={() => setOpenKey(isOpen ? null : nav.key!)}
              className="flex hover:bg-neutral-100 transition-all duration-300 px-4 items-center py-2 rounded-lg text-neutral-600 cursor-pointer w-full justify-between"
            >
              <div className="flex items-center gap-2 font-medium">
                {Icon && <Icon className="text-2xl" />}
                <p>{nav.title}</p>
              </div>
              <IoIosArrowDown
                className={`text-xl transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isOpen && (
              <div className="flex gap-2 ml-10 items-start text-neutral-600">
                <div className="self-stretch w-px bg-neutral-300" />
                <div className="space-y-2">
                  {nav.children.map((child) => (
                    <Link
                      key={child.title}
                      href={child.path}
                      className="block cursor-pointer hover:font-semibold transition-all duration-300"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SecondaryNav;
