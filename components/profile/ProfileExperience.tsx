
"use client"
import ProfileCardTitle from "@/hooks/profile/ProfileCardTitle";
import ProfileCardSeeMoreButton from "../../hooks/profile/ProfileCardSeeMoreButton";
import ProfileExperienceCard from "@/hooks/profile/ProfileExperienceCard";


const ProfileExperience = () => {
  return (
    <div className="w-full rounded-xl bg-white shadow p-5">
      <div className="w-full flex items-center justify-between">
        <ProfileCardTitle title="Experience" />
        <ProfileCardSeeMoreButton />  
      </div>
      <div className="my-4 h-px w-full  bg-neutral-300 " />

      <div className="">
        <ProfileExperienceCard/>
      </div>
    </div>
  );
}

export default ProfileExperience

