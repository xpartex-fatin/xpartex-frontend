"use client";

import ProfileCardTitle from "@/hooks/profile/ProfileCardTitle";
import Image from "next/image";
import { IoMdShare } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";

const Portfolio = () => {
  const portfolioImages = [
    "/portfolio/image-01.png",
    "/portfolio/image-02.png",
    "/portfolio/image-03.png",
    "/portfolio/image-04.png",
    "/portfolio/image-05.png",
    "/portfolio/image-06.png",
  ];

  return (
    <div className="w-full rounded-xl bg-white shadow p-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <ProfileCardTitle title="My Portfolio" />
        <button className="flex items-center gap-1 text-sm text-[#636363] hover:text-primary-600">
          Share <IoMdShare />
        </button>
      </div>

      <div className="my-4 h-px w-full bg-neutral-300" />

      {/* Banner */}
      <div className="relative w-[756px] h-[157px] rounded-lg overflow-hidden">
        <Image
          src="/portfolio/protfolio-banner.png"
          alt="Portfolio Banner"
          width={756}
          height={157}
          className="rounded-lg object-cover"
        />

        {/* Edit / Share Icon */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-[#F7F8F8] rounded-lg flex items-center justify-center cursor-pointer">
          <LuPencilLine className="text-gray-600" />
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="mt-6 grid grid-cols-3 gap-4 justify-items-center">
        {portfolioImages.map((img, index) => (
          <div
            key={index}
            className="group relative w-[230px] h-[218px] rounded-lg overflow-hidden shadow-sm cursor-pointer"
          >
            <Image
              src={img}
              alt="Portfolio Item"
              width={230}
              height={218}
              className="object-cover w-full h-full"
            />

            {/* Share Icon */}
            <div className="absolute top-2 right-2 w-8 h-8 bg-[#F7F8F8] rounded-lg flex items-center justify-center z-10">
              <IoMdShare className="text-gray-600" />
            </div>

            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-full opacity-5 p-3 translate-y-full group-hover:translate-y-0 transition-all duration-300">
              <p className="text-sm font-medium text-[#F5F9FA]">
                Embroidery Work & Dress Detailing
              </p>

              <div className="flex items-center gap-1 mt-1 text-sm">
                <FaStar className="text-yellow-400" />
                <span className="font-semibold text-[#F5F9FA]">4.89</span>
                <span className="text-gray-500">(56)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
