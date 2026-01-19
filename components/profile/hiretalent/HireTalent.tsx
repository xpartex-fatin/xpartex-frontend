"use client";

import { useState } from "react";
import { IoMdShare } from "react-icons/io";
import {
  FaInstagram,
  FaFacebookF,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";
import { Clock, MapPin, DollarSign, Home } from "lucide-react";

// Types
interface Talent {
  id: number;
  image: string;
  name: string;
  location: string;
  status: "Active" | "Offline";
  profession: string;
  availableDays: string;
  locationType: "Onsite" | "Remote";
  price: number;
  priceType: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
  };
}

interface TalentData {
  tabs: string[];
  talents: {
    [key: string]: Talent[];
  };
}

// Sample Data
const talentData: TalentData = {
  tabs: ["Garments", "Design", "Art"],
  talents: {
    Garments: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        name: "Ethan",
        location: "Barcelona, ESP",
        status: "Active",
        profession: "Professional Embroidery Artist",
        availableDays: "Friday & Saturday",
        locationType: "Onsite",
        price: 60,
        priceType: "Hourly",
        socialLinks: {
          instagram: "#",
          facebook: "#",
        },
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        name: "Sara",
        location: "Madrid, ESP",
        status: "Offline",
        profession: "Professional Pattern Designer",
        availableDays: "Friday & Saturday",
        locationType: "Onsite",
        price: 60,
        priceType: "Hourly",
        socialLinks: {
          instagram: "#",
          facebook: "#",
        },
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        name: "Michael",
        location: "London, UK",
        status: "Active",
        profession: "Quality Control Specialist",
        availableDays: "Monday to Friday",
        locationType: "Onsite",
        price: 75,
        priceType: "Hourly",
        socialLinks: {
          instagram: "#",
          facebook: "#",
        },
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        name: "Emma",
        location: "Paris, FR",
        status: "Active",
        profession: "Garment Technologist",
        availableDays: "Weekends",
        locationType: "Remote",
        price: 55,
        priceType: "Hourly",
        socialLinks: {
          instagram: "#",
          facebook: "#",
        },
      },
    ],
    Design: [
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        name: "David",
        location: "New York, USA",
        status: "Active",
        profession: "Fashion Designer",
        availableDays: "Monday to Thursday",
        locationType: "Remote",
        price: 80,
        priceType: "Hourly",
        socialLinks: {
          instagram: "#",
          facebook: "#",
        },
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
        name: "Sophie",
        location: "Milan, IT",
        status: "Offline",
        profession: "Textile Designer",
        availableDays: "Tuesday & Wednesday",
        locationType: "Onsite",
        price: 70,
        priceType: "Hourly",
        socialLinks: {
          instagram: "#",
          facebook: "#",
        },
      },
    ],
    Art: [
      {
        id: 7,
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
        name: "James",
        location: "Tokyo, JP",
        status: "Active",
        profession: "Graphic Artist",
        availableDays: "Weekends",
        locationType: "Remote",
        price: 65,
        priceType: "Hourly",
        socialLinks: {
          instagram: "#",
          facebook: "#",
        },
      },
      {
        id: 8,
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
        name: "Olivia",
        location: "Berlin, DE",
        status: "Active",
        profession: "Print Artist",
        availableDays: "Monday to Friday",
        locationType: "Onsite",
        price: 58,
        priceType: "Hourly",
        socialLinks: {
          instagram: "#",
          facebook: "#",
        },
      },
    ],
  },
};

const HireTalent = () => {
  const [activeTab, setActiveTab] = useState<string>("Garments");

  const currentTalents = talentData.talents[activeTab] || [];

  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Hire Talent</h2>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#00BFFF] transition-colors">
          Share <IoMdShare size={18} />
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-3">
        {talentData.tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-6 py-2.5 text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-linear-to-r from-[#00BFFF] to-[#40E0D0] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Talents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentTalents.map((talent) => (
          <TalentCard key={talent.id} talent={talent} />
        ))}
      </div>

      {/* Empty State */}
      {currentTalents.length === 0 && (
        <div className="py-16 text-center text-gray-500">
          <p className="text-lg">No talents available in this category</p>
        </div>
      )}
    </div>
  );
};

export default HireTalent;

// Talent Card Component
const TalentCard = ({ talent }: { talent: Talent }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="p-5">
        {/* Header with Avatar and Status */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={talent.image}
                alt={talent.name}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-gray-100"
              />
              <div
                className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white ${
                  talent.status === "Active" ? "bg-green-500" : "bg-gray-400"
                }`}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{talent.name}</h3>
              <p className="text-sm text-gray-500">{talent.location}</p>
            </div>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              talent.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {talent.status}
          </span>
        </div>

        {/* Profession and Social Links */}
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-base font-semibold text-gray-900">
            {talent.profession}
          </h4>
          <div className="flex items-center gap-2">
            {talent.socialLinks?.instagram && (
              <a
                href={talent.socialLinks.instagram}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#00BFFF] hover:text-white transition-colors"
              >
                <FaInstagram size={14} />
              </a>
            )}
            {talent.socialLinks?.facebook && (
              <a
                href={talent.socialLinks.facebook}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#00BFFF] hover:text-white transition-colors"
              >
                <FaFacebookF size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="mb-4 space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={16} className="text-gray-500" />
            <span>Available days: </span>
            <span className="font-medium text-[#00BFFF]">
              {talent.availableDays}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <Home size={16} className="text-gray-500" />
              <span>{talent.locationType}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <DollarSign size={16} className="text-gray-500" />
              <span>Price:</span>
              <span className="font-semibold text-gray-900">
                ${talent.price}
              </span>
              <span>/ {talent.priceType}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gray-200 text-gray-600 hover:border-[#00BFFF] hover:text-[#00BFFF] transition-all"
          >
            {isBookmarked ? (
              <FaBookmark size={16} className="text-[#00BFFF]" />
            ) : (
              <FaRegBookmark size={16} />
            )}
          </button>
          <button className="flex-1 w-full text-md rounded-lg border-2 border-[#D8DBDF] py-2 font-semibold text-gray-700 transition-all hover:border-transparent hover:bg-linear-to-r hover:from-[#00BFFF] hover:to-[#40E0D0] hover:text-white">
            Contact Me
          </button>
          <button className="flex-1 text-md rounded-lg bg-linear-to-r from-[#00BFFF] to-[#40E0D0] py-2 font-semibold text-white shadow-md transition-all hover:shadow-lg hover:opacity-90 active:scale-95">
            Schedule Now
          </button>
        </div>
      </div>
    </div>
  );
};
