"use client"
import ProfileCardTitle from "@/hooks/profile/ProfileCardTitle";

const ProfileAbout = () => {
  return (
    <div className="w-full rounded-xl bg-white shadow p-5">
      <ProfileCardTitle title="About" />

      <div className="my-4 h-px w-full  bg-neutral-300 " />

      <p className="text-neutral-500 text-justify leading-relaxed ">
        Highly skilled Software Engineer with extensive experience working on
        almost every type of web project. Successfully collaborated directly
        with managers, backend developers, and designers to deliver complex
        solutions. Proficient in creating maintainable, scalable, and
        production-ready frontend architectures, with a strong focus on
        performance optimization, best practices, and exceptional user
        experiences. Experienced in identifying challenges and implementing
        effective solutions to meet project goals efficiently.
      </p>
    </div>
  );
};

export default ProfileAbout;
