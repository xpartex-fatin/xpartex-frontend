"use client";
import { memo } from "react";

type ProfileEducationCardProps = {
  universityLogo: string;
  university: string;
  country?: string; // optional
  degree: string;
  period: string;
  grade: string;
};

const sampleEducation: ProfileEducationCardProps[] = [
  {
    universityLogo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/University_of_London_coat_of_arms.svg/250px-University_of_London_coat_of_arms.svg.png",
    university: "University of London",
    country: "United Kingdom",
    degree: "Master of Social Science, Political Science",
    period: "2013 - 2014",
    grade: "Grade: 3.06 Out of 4",
  },
  {
    universityLogo:
      "https://images.seeklogo.com/logo-png/23/1/university-of-dhaka-logo-png_seeklogo-237637.png",
    university: "Dhaka University",
    country: "Bangladesh",
    degree: "BSS, Political Science",
    period: "2009 - 2013",
    grade: "Grade: 2.94 Out of 4",
  },
];

const ProfileEducationCard = memo(() => {
  return (
    <div className="flex flex-col">
      {sampleEducation.map((edu, index) => {
        const isLast = index === sampleEducation.length - 1;
        return (
          <div key={index} className="flex flex-col gap-3 py-2">
            <div className="flex gap-3 items-start">
              <img
                src={edu.universityLogo}
                alt={edu.university}
                className="w-12 h-12 object-cover rounded-full shrink-0"
              />
              <div className="flex flex-col gap-1 w-full">
                <p className="font-semibold text-neutral-800">
                  {edu.university} {edu.country && `| ${edu.country}`}
                </p>

                <p className="text-sm text-neutral-500 ">
                  {edu.degree} {edu.period && `, ${edu.period}`}
                </p>

                <p className="text-sm text-neutral-500">{edu.grade}</p>
              </div>
            </div>
            {!isLast && <div className="h-px w-full bg-neutral-200 mt-2" />}
          </div>
        );
      })}
    </div>
  );
});

export default ProfileEducationCard;
