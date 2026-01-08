"use client";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { useState, useEffect, memo } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export const RegisterImage = memo(() => {
  const slides = [
    {
      id: 1,
      src: "/auth/photo1.jpg",
      profile: "/auth/profile1.jpg",
      quote:
        "“Xpartex saves us hundreds of work hours and lets us manage more clients effortlessly.”",
      name: "Mohammad Arif",
      role: "Sourcing Manager",
      company: "Skyline Garments Ltd.",
      rating: 5,
      blankUser: "/blankUser.webp",
    },
    {
      id: 2,
      src: "/auth/photo2.jpeg",
      profile: "/auth/profile2.jpg",
      quote:
        "“Thanks to Xpartex, I found my dream job faster. The platform helped me showcase my skills to top companies.”",
      name: "Jane Doe",
      role: "Software Developer",
      company: "Tech Solutions Inc.",
      rating: 5,
      blankUser: "/blankUser.webp",
    },
    {
      id: 3,
      src: "/auth/photo3.jpg",
      profile: "/auth/profile3.jpg",
      quote:
        "“Using Xpartex to sell our courses increased enrollment by 40%. The platform is a game-changer for our education business.”",
      name: "John Smith",
      role: "Course Manager",
      company: "LearnHub Academy",
      rating: 5,
      blankUser: "/blankUser.webp",
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
              alt="background photo"
              width={800}
              height={1000}
              loading="eager"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/80" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10">
              <div className="mb-4">
                <Rating
                  style={{ maxWidth: 110 }}
                  value={slide.rating}
                  readOnly
                />
              </div>

              <p className="text-xl  leading-snug text-white max-w-xl mb-6">
                {slide.quote}
              </p>

              <div className="mb-4">
                <Image
                  src={slide.profile || slide.blankUser}
                  alt={slide.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover border-2 border-white"
                />
              </div>

              <p className="text-white font-semibold">{slide.name}</p>
              <p className="text-neutral-300">{slide.role}</p>
              <p className="text-neutral-400 text-sm">{slide.company}</p>

              <div className=" text-white mt-6 inset-x-0 bottom-8 flex items-center justify-center gap-20 z-20">
                <IoIosArrowBack
                  size={40}
                  onClick={prev}
                  className=" left-0  rounded-full p-2 cursor-pointer ml-4"
                />

                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-2 h-2 rounded-full cursor-pointer ${
                        idx === current ? "bg-white" : "bg-neutral-400"
                      }`}
                      onClick={() => setCurrent(idx)}
                    ></span>
                  ))}
                </div>

                <IoIosArrowForward
                  size={40}
                  onClick={next}
                  className=" right-0  rounded-full p-2 cursor-pointer mr-4"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
