"use client";

import HireTalent from "@/components/profile/hiretalent/HireTalent";
import Jobs from "@/components/profile/jobs/Jobs";
import Portfolio from "@/components/profile/portfolio/Portfolio";
import DigitalProduct from "@/components/profile/products/DigitalProduct";
import ProfileAbout from "@/components/profile/ProfileAbout";
import ProfileCertificate from "@/components/profile/ProfileCertificate";
import ProfileEducation from "@/components/profile/ProfileEducation";
import ProfileExperience from "@/components/profile/ProfileExperience";
import MyService from "@/components/profile/service/MyService";

const ProfileLayoutPage = () => {
  return (
    <div className="flex flex-col w-full gap-5">
      <ProfileAbout />
      <ProfileExperience />
      <ProfileEducation />
      <ProfileCertificate />
      <Portfolio />
      <MyService />
      <DigitalProduct />
      <HireTalent />
      <Jobs />
    </div>
  );
};

export default ProfileLayoutPage;
