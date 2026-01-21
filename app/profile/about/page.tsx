// app/profile/page.tsx
import ProfessionalSkill from "@/components/profile/about/ProfessionalSkill";
import ProfileAbout from "@/components/profile/ProfileAbout";
import ProfileCertificate from "@/components/profile/ProfileCertificate";
import ProfileEducation from "@/components/profile/ProfileEducation";
import ProfileExperience from "@/components/profile/ProfileExperience";

export default function ProfilePage() {
  return (
    <div className="flex flex-col w-full gap-5">
      <ProfileAbout />
      <ProfileExperience />
      <ProfileEducation />
      <ProfileCertificate />
      <ProfessionalSkill />
    </div>
  );
}
