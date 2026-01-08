"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export type InputField = {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  value?: string;
  onChange?: (val: string) => void;
  inputRef?: React.Ref<HTMLInputElement>;
};



export type AuthReusableProps = {
  title: string;
  subtitle?: string;
  inputs: InputField[];
  buttonText: string;
  onSubmit: () => void;
};

export const useAuthReusable = ({
  title,
  subtitle,
  inputs,
  buttonText,
  onSubmit,
}: AuthReusableProps) => {
  const [showPasswordMap, setShowPasswordMap] = useState<
    Record<number, boolean>
  >({});

  const capitalizeTitle = (text: string) => {
    const lowerWords = ["a", "an", "the"];
    return text
      .split(" ")
      .map((word, idx) =>
        lowerWords.includes(word.toLowerCase()) && idx !== 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");
  };

  const capitalizeFirst = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

 const renderTitle = () => (
   <div className="text-center mb-4">
     <h1 className="text-2xl lg:text-3xl font-semibold">
       {capitalizeTitle(title)}
     </h1>
     {subtitle && (
       <p className="text-sm lg:text-[16px] text-neutral-500 lg:mt-3 mt-1">
         {capitalizeFirst(subtitle)}
       </p>
     )}
   </div>
 );


  const renderInput = (field: InputField, index: number) => {
    const isPassword = field.type === "password";
    const showPassword = showPasswordMap[index] || false;

    return (
      <div key={index} className="flex flex-col gap-1">
        <span className="font-medium text-neutral-600">
          {capitalizeFirst(field.label)}
        </span>
        <div className="relative w-full">
          <input
            type={
              isPassword
                ? showPassword
                  ? "text"
                  : "password"
                : field.type || "text"
            }
            className="w-full border border-neutral-300 bg-white focus:outline-[#00BFFF] lg:bg-transparent rounded-lg py-2 lg:py-2.5 px-3"
            placeholder={capitalizeFirst(field.placeholder)}
            value={field.value}
            onChange={(e) => field.onChange?.(e.target.value)}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() =>
                setShowPasswordMap((prev) => ({
                  ...prev,
                  [index]: !prev[index],
                }))
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
            >
              {showPassword ? (
                <EyeOff size={18} className="cursor-pointer" />
              ) : (
                <Eye size={18} className="cursor-pointer" />
              )}
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderButton = () => (
    <button
      onClick={onSubmit}
      className="signIn rounded-lg text-white font-semibold py-2.5 w-full mt-4 cursor-pointer"
    >
      {buttonText}
    </button>
  );

  return { renderTitle, renderInput, renderButton };
};
