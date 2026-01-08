"use client";
import { useState, useRef, useEffect } from "react";
import { IoGlobeOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useLanguage, ASIAN_LANGUAGES } from "@/context/LanguageContext";

const LanguageDropdown = () => {
  const { selected, setSelected } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer select-none"
      >
        <IoGlobeOutline className="text-neutral-700" />
        <span className="font-medium">{selected.name}</span>
        <IoIosArrowDown
          className={`text-neutral-700 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-neutral-300 shadow-lg rounded-md z-50">
          {ASIAN_LANGUAGES.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-neutral-100 cursor-pointer text-sm"
            >
              {lang.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
