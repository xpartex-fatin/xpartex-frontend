import ProfileCardTitle from "@/hooks/profile/ProfileCardTitle";
import ProfileCardSeeMoreButton from "../../hooks/profile/ProfileCardSeeMoreButton";
import ProfileEducationCard from "@/hooks/profile/ProfileEducationCard";

const ProfileEducation = () => {
  return (
    <div className="w-full rounded-xl bg-white shadow p-5">
      <div className="w-full flex items-center justify-between">
        <ProfileCardTitle title="Education" />
        <ProfileCardSeeMoreButton />
      </div>
      <div className="my-4 h-px w-full bg-neutral-300" />

      <ProfileEducationCard />
    </div>
  );
}

export default ProfileEducation