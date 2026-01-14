"use client";
import { memo } from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";

const ProfileCertificateCard = memo(() => {
  const certificates = [
    {
      title: "Certificate of Completion in VStitcher 201 Foundations",
      issuer: "Browzwear",
      issuedOn: "May 2024",
      type: "button",
      certificateUrl: "#",
    },
    {
      title: "Tesco Certified Garment Technologist(TCGT)",
      issuer: "Tesco",
      issuedOn: "Dec 2023",
      expiresOn: "Nov 2026",
      role: "Garment Technician",
      type: "preview",
      certificateUrl: "#",
      previewImg:
        "https://marketplace.canva.com/EAF5ZVffmZw/1/0/1600w/canva-modern-vintage-certificate-of-achievement-yMEujoaa8Hs.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {certificates.map((cert, index) => {
        const isLast = index === certificates.length - 1;
        return (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex gap-3 items-start">
              <PiCertificate className="w-12 h-12 bg-neutral-100 rounded-lg p-1.5 text-neutral-800 shrink-0" />
              <div className="flex flex-col gap-1 w-full">
                <p className="font-semibold text-neutral-800">{cert.title}</p>
                <p className="text-sm text-neutral-800">{cert.issuer}</p>
                <p className="text-sm text-neutral-500">
                  Issued on {cert.issuedOn}
                  {cert.expiresOn && ` · Expires ${cert.expiresOn}`}
                </p>
                {cert.type === "button" && cert.certificateUrl && (
                  <div className="mt-2">
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      className="px-3 py-1.5 border border-neutral-300 rounded-2xl bg-white text-sm text-neutral-500 font-semibold hover:bg-neutral-50"
                    >
                      View Certificate
                    </a>
                  </div>
                )}
                {cert.type === "preview" &&
                  cert.previewImg &&
                  cert.certificateUrl && (
                    <div className="flex items-center gap-3 mt-2">
                      <div className="relative">
                        <img
                          src={cert.previewImg}
                          alt={cert.title}
                          className="w-30 object-cover rounded"
                        />
                        <div className="absolute bottom-2 right-2 p-1 cursor-pointer bg-neutral-100 rounded-lg">
                          <LuSquareArrowOutUpRight size={16} />
                        </div>
                      </div>
                      {cert.role && (
                        <p className="text-sm text-neutral-500 font-semibold">
                          {cert.role}
                        </p>
                      )}
                    </div>
                  )}
              </div>
            </div>

            {!isLast && <div className="h-px w-full bg-neutral-200 mt-2" />}
          </div>
        );
      })}
    </div>
  );
});

export default ProfileCertificateCard;
