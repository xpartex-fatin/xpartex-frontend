"use client";

import { useEffect, useRef, useState } from "react";
import PrimaryNav from "@/shared/LeftNav/PrimaryNav";
import SecondaryNav from "@/shared/LeftNav/SecondaryNav";
import ProfileBanner from "@/shared/profile/ProfileBanner";
import ContactInfo from "@/shared/RightNav/ContactInfo";
import MoreProfiles from "@/shared/RightNav/MoreProfiles";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [leftStyle, setLeftStyle] = useState({});
  const [rightStyle, setRightStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !leftRef.current || !rightRef.current)
        return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const topOffset = 96;
      const bottomOffset = 40;
      const maxTranslateLeft =
        containerRect.height - leftRef.current.offsetHeight - bottomOffset;
      const maxTranslateRight =
        containerRect.height - rightRef.current.offsetHeight - bottomOffset;
      const scrollY = window.scrollY + topOffset - containerRect.top;

      const translateLeft = Math.min(Math.max(scrollY, 0), maxTranslateLeft);
      const translateRight = Math.min(Math.max(scrollY, 0), maxTranslateRight);

      setLeftStyle({ transform: `translateY(${translateLeft}px)` });
      setRightStyle({ transform: `translateY(${translateRight}px)` });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex items-start max-w-360 px-4 pb-20 justify-center mx-auto gap-6 mt-24 w-full"
      >
        <div className="sticky hidden  top-24 mt-5 lg:mt-0  rounded-xl shadow lg:flex flex-row gap-0">
          <PrimaryNav />
          <SecondaryNav />
        </div>

        <div className="flex flex-col w-full gap-5">
          <ProfileBanner />
          {children}
        </div>

        <div
          className="relative hidden lg:block min-w-65 self-stretch pb-10"
          style={rightStyle}
        >
          <ContactInfo />
          <MoreProfiles />
        </div>
      </div>
    </div>
  );
}
