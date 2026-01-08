"use client";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { useState, useEffect, memo } from "react";

export const LoginImage = memo(() => {
  const slides = [
    {
      id: 1,
      src: "/auth/photo1.jpg",
      quote:
        "“Xpartex saves us hundreds of work hours and lets us manage more clients effortlessly.”",
      name: "Mohammad Arif",
      role: "Sourcing Manager",
      company: "Skyline Garments Ltd.",
    },
    {
      id: 2,
      src: "/auth/photo2.jpeg",
      quote:
        "“Thanks to Xpartex, I found my dream job faster. The platform helped me showcase my skills to top companies.”",
      name: "Jane Doe",
      role: "Software Developer",
      company: "Tech Solutions Inc.",
    },
    {
      id: 3,
      src: "/auth/photo3.jpg",
      quote:
        "“Using Xpartex to sell our courses increased enrollment by 40%. The platform is a game-changer for our education business.”",
      name: "John Smith",
      role: "Course Manager",
      company: "LearnHub Academy",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden lg:block relative lg:h-160 w-full rounded-3xl overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="shrink-0 w-full h-full relative">
            <Image
              src={slide.src}
              alt="login photo"
              width={800}
              height={1000}
              loading="eager"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full h-[35%] backdrop-blur-sm bg-black/20" />
            <div className="absolute bottom-0 left-0 w-full h-[35%] flex items-end z-10">
              <div className="lg:p-8 text-white">
                <p className="text-xl font-medium leading-snug">
                  {slide.quote}
                </p>
                <div className="flex mt-8 justify-between">
                  <div>
                    <p className="text-xl font-semibold">{slide.name}</p>
                    <p>{slide.role}</p>
                    <p className="font-light">{slide.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute text-white bottom-8 right-8 flex items-center gap-8 z-20">
        <IoIosArrowRoundBack
          size={50}
          onClick={prev}
          className="border border-white cursor-pointer rounded-full p-1.5"
        />
        <IoIosArrowRoundForward
          size={50}
          onClick={next}
          className="border text-white border-white cursor-pointer rounded-full p-1.5"
        />
      </div>
    </div>
  );
});
