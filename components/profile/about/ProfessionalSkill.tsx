"use client";
import ProfileCardTitle from "@/hooks/profile/ProfileCardTitle";

const ProfessionalSkill = () => {
  const skills = [
    "3D Garment Modeling",
    "Pattern Drafting & Cutting",
    "UV Mapping",
    "Digital Fabric Simulation",
    "3D Garment Modeling",
    "CLO3D / Marvelous Designer",
  ];
  return (
    <div className="w-full rounded-xl bg-white shadow p-5">
      <ProfileCardTitle title="Professional Skill" />

      <div className="my-4 h-px w-full  bg-neutral-300 " />

      <div>
        <div className="flex  flex-wrap gap-2">
          {skills.map((skill, index) => (
            <p
              className="px-2 py-1 border border-[#D8D8D8] rounded-full bg-[#F7F7F7]  text-[#636363] -spacing-2"
              key={index}
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkill;
