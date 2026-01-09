"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthReusable } from "@/components/reUsable/auth/useAuthReusable";
import { profileIcon, socialIcon, LmsIcon } from "./SelectPathIcon";
import { JSX } from "react";

type IconProps = {
  size?: number;
  fill?: string;
};

type CardItem = {
  id: number;
  title: string;
  description: string;
  route?: string;
  icon?: (props?: IconProps) => JSX.Element;
};

const SelectpathPage = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const cards: CardItem[] = useMemo(
    () => [
      {
        id: 1,
        title: "Professional Profile",
        description: "Tell us about your role, expertise and interests.",
        route: "/profile/all",
        icon: (props) =>
          profileIcon({
            ...props,
            fill: selectedId === 1 ? "#00BFFF" : "#151515",
          }),
      },
      {
        id: 2,
        title: "Build Your Network",
        description: "Share your professional interests with the right people.",
        icon: (props) =>
          socialIcon({
            ...props,
            fill: selectedId === 2 ? "#00BFFF" : "#151515",
          }),
      },
      {
        id: 3,
        title: "Learning Center",
        description: "Access courses, track progress, and grow your skills.",
        icon: (props) =>
          LmsIcon({ ...props, fill: selectedId === 3 ? "#00BFFF" : "#151515" }),
      },
    ],
    [selectedId]
  );

  const handleContinue = () => {
    const selected = cards.find((c) => c.id === selectedId);
    if (selected?.route) router.push(selected.route);
  };

  const { renderButton } = useAuthReusable({
    title: "",
    inputs: [],
    buttonText: "Continue",
    onSubmit: handleContinue,
  });

  return (
    <div className="mx-auto flex flex-col w-full items-center min-h-screen lg:min-h-[80vh] justify-center px-4">
      <p className="text-2xl lg:text-4xl text-center font-semibold">
        Available Things Only
      </p>
      <div className="text-neutral-500 flex flex-col items-center lg:mt-2 text-sm lg:text-[16px] text-center">
        <span className="hidden md:inline">
          These are the features currently available on the platform.
        </span>
      
        <span> Choose one to continue.</span>
      </div>

      <div className="flex flex-col lg:flex-row max-w-3xl mx-auto w-full items-center gap-2 lg:gap-4 mt-5 lg:mt-8">
        {cards.map((card) => {
          const isSelected = selectedId === card.id;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() =>
                setSelectedId((prev) => (prev === card.id ? null : card.id))
              }
              className={`w-full cursor-pointer rounded-xl border px-4 py-4 lg:py-5 text-left transition-all duration-300 bg-white ${
                isSelected
                  ? "border-[#00BFFF]"
                  : "border-neutral-100 hover:border-neutral-200"
              }`}
            >
              <div className="flex flex-col items-center lg:items-start">
                {card.icon && card.icon({ size: 48 })}
                <div>
                  <p className=" sm:text-xl font-semibold">{card.title}</p>
                  <p className="hidden sm:block text-sm text-neutral-500 mt-1">
                    {card.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex lg:flex-col items-center gap-1.5 lg:gap-2.5 w-full mt-0 lg:mt-8">
        <div className="lg:px-4 w-full md:flex-1 md:max-w-38">
          {renderButton()}
        </div>
        <div className="lg:px-4 w-full md:flex-1 md:max-w-38">
          <button
            onClick={() => router.push("/")}
            className="rounded-lg border text-sm lg:text-[16px] cursor-pointer text-neutral-600 border-neutral-100 bg-white mt-4 lg:mt-0  lg:font-semibold lg:py-3 py-2.5 transition-all duration-300 w-full"
          >
            Skip Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectpathPage;
