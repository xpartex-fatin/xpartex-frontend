"use client";

import Image from "next/image";
import ProfileCardTitle from "@/hooks/profile/ProfileCardTitle";

import { IoMdShare } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { BriefcaseBusiness, PenOff } from "lucide-react";

/* CONSTANTS */

const PORTFOLIO_IMAGES = [
  "/portfolio/image-01.png",
  "/portfolio/image-02.png",
  "/portfolio/image-03.png",
  "/portfolio/image-04.png",
  "/portfolio/image-05.png",
  "/portfolio/image-06.png",
];

const SKILLS = ["3D Garment Modeling", "Pattern Drafting & Cutting"];

/*  COMPONENT   */

const Portfolio = () => {
  return (
    <div className="w-full rounded-xl bg-white p-5 shadow">
      {/* Header */}
      <Header />

      <Divider />

      {/* Banner */}
      <Banner />

      {/*  Skills Section  */}
      <SkillsSection />

      {/*  Portfolio Grid  */}
      <PortfolioGrid />
    </div>
  );
};

export default Portfolio;

const Divider = () => <div className="my-4 h-px w-full bg-gray-300" />;

const Header = () => (
  <div className="flex items-center justify-between">
    <ProfileCardTitle title="My Portfolio" />
    <button
      type="button"
      className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600"
    >
      Share <IoMdShare />
    </button>
  </div>
);

const Banner = () => (
  <div className="relative mt-4 h-[157px] w-[756px] overflow-hidden rounded-lg">
    <Image
      src="/portfolio/protfolio-banner.png"
      alt="Portfolio banner"
      width={756}
      height={157}
      className="object-cover"
      priority
    />

    <button
      type="button"
      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100"
    >
      <LuPencilLine className="text-gray-600" />
    </button>
  </div>
);

const SkillsSection = () => (
  <section className="mt-6">
    <ProfileCardTitle title="Professional Skill" />
    <Divider />

    {/* Skill Tags */}
    <div className="flex flex-wrap gap-2">
      {SKILLS.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-gray-300 bg-linear-to-r from-[#00BFFF] to-[#40E0D0] px-3 py-1 text-sm text-gray-50"
        >
          {skill}
        </span>
      ))}
    </div>

    {/* Experience Card */}
    <div className="mt-3 rounded-md bg-gray-100 p-3">
      <div className="flex flex-wrap gap-6">
        <ExperienceItem
          icon={<BriefcaseBusiness size={20} />}
          label="Industrial Experience"
          value="5 Years"
        />
        <ExperienceItem
          icon={<PenOff size={20} />}
          label="Professional Experience"
          value="7 Years"
        />
      </div>

      <p className="mt-2 text-gray-700">
        Expert in creating realistic 3D Pattern Design using advanced software
        tools. Specialized in draping, fit optimization, and digital prototyping
        for fashion and textile industries.
      </p>
    </div>
  </section>
);

const ExperienceItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-2 text-gray-500">
    {icon}
    <p>
      {label}: <span className="font-semibold text-gray-700">{value}</span>
    </p>
  </div>
);

const PortfolioGrid = () => (
  <div className="mt-6 grid grid-cols-3 gap-4 justify-items-center">
    {PORTFOLIO_IMAGES.map((image, index) => (
      <PortfolioItem key={index} image={image} />
    ))}
  </div>
);

const PortfolioItem = ({ image }: { image: string }) => (
  <div className="group relative h-[218px] w-[230px] overflow-hidden rounded-lg shadow-sm">
    <Image
      src={image}
      alt="Portfolio item"
      width={230}
      height={218}
      className="object-cover"
    />

    {/* Share Icon */}
    <button
      type="button"
      className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100"
    >
      <IoMdShare className="text-gray-600" />
    </button>

    {/* Hover Overlay */}
    <div className="absolute bottom-0 left-0 w-full translate-y-full bg-black/50 p-3 transition-all duration-300 group-hover:translate-y-0">
      <p className="text-sm font-medium text-gray-100">
        Embroidery Work & Dress Detailing
      </p>

      <div className="mt-1 flex items-center gap-1 text-sm text-gray-100">
        <FaStar className="text-yellow-400" />
        <span className="font-semibold">4.89</span>
        <span className="text-gray-300">(56)</span>
      </div>
    </div>
  </div>
);


