"use client";
import PrimaryNav from "@/shared/LeftNav/PrimaryNav";
import SecondaryNav from "@/shared/LeftNav/SecondaryNav";
import ContactInfo from "@/shared/RightNav/ContactInfo";
import MoreProfiles from "@/shared/RightNav/MoreProfiles";
import { useEffect, useRef, useState } from "react";

const posts = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title: `Post ${i + 1}`,
  content: `This is post number ${i + 1}.`,
}));

const ProfileLayoutPage = () => {
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
      const maxTranslate =
        containerRect.height - leftRef.current.offsetHeight - bottomOffset;

      const scrollY = window.scrollY + topOffset - containerRect.top;

      const translate = Math.min(Math.max(scrollY, 0), maxTranslate);

      setLeftStyle({ transform: `translateY(${translate}px)` });
      setRightStyle({ transform: `translateY(${translate}px)` });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex items-start max-w-380 px-4 pb-20 justify-center mx-auto gap-6 mt-24 w-full"
      >
        <div className="sticky hidden  top-24 mt-5 lg:mt-0  rounded-xl shadow lg:flex flex-row gap-0">
          <PrimaryNav />
          <SecondaryNav />
        </div>

        <div className="flex flex-col w-full gap-5">
          {posts.map((post) => (
            <div
              key={post.id}
              className="shadow rounded-xl bg-white p-4 h-96 flex flex-col justify-start">
              <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
              <p className="text-sm text-neutral-700">{post.content}</p>
            </div>
          ))}
        </div>

        <div className="relative hidden lg:block min-w-65 self-stretch pb-10" style={rightStyle}>
         <ContactInfo/>
          <MoreProfiles />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayoutPage;
