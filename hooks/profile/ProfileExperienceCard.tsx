"use client";
import { useState, memo } from "react";

type ProfileExperienceCardProps = {
  companyLogo: string;
  role: string;
  company: string;
  type?: string;
  location?: string;
  period: string;
  description: string;
};

const sampleData: ProfileExperienceCardProps[] = [
  {
    companyLogo:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305",
    role: "QA Garment Technician",
    company: "PGS",
    type: "Full-time",
    location: "Bangladesh · On-site",
    period: "Oct 2024 - Present · 1 yr 2 mos",
    description:
      "Ensures product quality by inspecting samples, conducting garment measurements, verifying stitching, fabric, trims, and finishing standards, and aligning production output with buyer specifications. Works closely with production and design teams to maintain consistent quality. Also prepares detailed reports for management and suggests improvements where needed.",
  },
  {
    companyLogo:
      "https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg",
    role: "Software Engineer",
    company: "TechSoft",
    type: "Full-time",
    location: "Dhaka, Bangladesh",
    period: "Jan 2023 - Sep 2024 · 1 yr 9 mos",
    description:
      "Developed and maintained web applications, optimized performance, collaborated with cross-functional teams, and ensured code quality with testing and reviews.",
  },
];

const ProfileExperienceCard = memo(() => {
  const [showFullIndexes, setShowFullIndexes] = useState<number[]>([]);
  const maxLength = 150;

  const toggleShowFull = (index: number) => {
    setShowFullIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col">
      {sampleData.map((exp, index) => {
        const isFull = showFullIndexes.includes(index);
        const truncated =
          exp.description.length > maxLength && !isFull
            ? exp.description.slice(0, maxLength) + "..."
            : exp.description;

        const isLast = index === sampleData.length - 1; 

        return (
          <div key={index} className="flex flex-col gap-3 py-2">
            <div className="flex gap-3 items-start">
              <img
                src={exp.companyLogo}
                alt={exp.company}
                className="w-12 h-12 object-cover rounded-full shrink-0"
              />
              <div className="flex flex-col gap-1 w-full">
                <h3 className="font-semibold text-neutral-800">{exp.role}</h3>
                <p className="text-sm text-neutral-500 flex flex-wrap gap-1">
                  <span>{exp.company}</span>
                  {exp.type && <span>· {exp.type}</span>}
                  {exp.location && <span>· {exp.location}</span>}
                </p>
                <p className="text-sm text-neutral-500">{exp.period}</p>
                <p className="text-sm text-neutral-500 mt-1">
                  {truncated}{" "}
                  {exp.description.length > maxLength && (
                    <button
                      onClick={() => toggleShowFull(index)}
                      className="text-[#00BFFF] ml-1 cursor-pointer"
                    >
                      {isFull ? "Show Less" : "Read More"}
                    </button>
                  )}
                </p>
              </div>
            </div>

            {!isLast && <div className="h-px w-full bg-neutral-200 mt-2" />}
          </div>
        );
      })}
    </div>
  );
});

export default ProfileExperienceCard;
