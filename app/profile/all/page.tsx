"use client";
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
        className="flex items-start max-w-380 px-4 pb-20 justify-center mx-auto gap-5 mt-24 w-full"
      >
        <div className="relative self-stretch pb-10" style={leftStyle}>
          <div className="bg-gray-500 h-[84vh] sticky top-24 w-90 rounded-xl shadow" />
        </div>

        <div className="flex flex-col w-full gap-5">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-neutral-600 rounded-xl shadow p-4 h-96 flex flex-col justify-start"
            >
              <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
              <p className="text-sm text-neutral-700">{post.content}</p>
            </div>
          ))}
        </div>

        <div className="relative self-stretch pb-10" style={rightStyle}>
          <div className="bg-slate-400 h-70 w-70 rounded-xl shadow" />
          <div className="bg-slate-400 sticky top-24 h-120 mt-5 w-70 rounded-xl shadow" />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayoutPage;
