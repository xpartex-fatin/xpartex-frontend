"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProfileCardTitle from "@/hooks/profile/ProfileCardTitle";
import { IoMdShare } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import {
  Clock,
  MapPin,
  Home,
  Monitor,
  Truck,
  Package,
  Scale,
} from "lucide-react";

// Types
interface OnDemandService {
  id: number;
  image: string;
  title: string;
  availableDay?: string;
  availableTime?: string;
  location: string;
  locationType: string;
  rating: number;
  reviews: number;
  price: number;
  priceType: string;
  buttonName: string;
}

interface LogisticsService {
  id: number;
  title: string;
  status: string;
  vehicleType: string;
  deliveryTime: string;
  route: string;
  weightLimit: string;
  deliveryFee: number;
  buttonName: string;
}

interface RentalService {
  id: number;
  image: string;
  title: string;
  status: string;
  description: string;
  location: string;
  price: number;
  priceType: string;
  buttonName: string;
}

interface CourseService {
  id: number;
  image: string;
  title: string;
  instructor: string;
  instructorImage: string;
  duration: string;
  lessons: number;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  buttonName: string;
}

type Service =
  | OnDemandService
  | LogisticsService
  | RentalService
  | CourseService;

interface ServicesData {
  tabs: string[];
  services: {
    [key: string]: Service[];
  };
}

// Sample Data
const servicesData: ServicesData = {
  tabs: [
    "On Demand Service",
    "Logistics Service",
    "Rental Services",
    "Courses",
  ],
  services: {
    "On Demand Service": [
      {
        id: 1,
        image: "/service/embroidery-tutorial.png",
        title: "Professional Embroidery Artist",
        availableDay: "Sunday",
        location: "Savar, Dhaka",
        locationType: "Onsite",
        rating: 4.8,
        reviews: 214,
        price: 60,
        priceType: "Hourly",
        buttonName: "Schedule Now",
      },
      {
        id: 2,
        image: "/service/garment-consultation.png",
        title: "Garment Design Consultation",
        availableTime: "Night",
        location: "Savar, Dhaka",
        locationType: "Remotely",
        rating: 4.8,
        reviews: 214,
        price: 60,
        priceType: "Hourly",
        buttonName: "Schedule Now",
      },
      {
        id: 3,
        image: "/service/fabric-cutting.jpg",
        title: "Fabric Cutting Solutions",
        availableDay: "Sunday",
        location: "Savar, Dhaka",
        locationType: "Onsite",
        rating: 4.8,
        reviews: 214,
        price: 60,
        priceType: "Hourly",
        buttonName: "Schedule Now",
      },
      {
        id: 4,
        image: "/service/machine-setup.png",
        title: "Machine Setup Training",
        availableTime: "Night",
        location: "Savar, Dhaka",
        locationType: "Remotely",
        rating: 4.8,
        reviews: 214,
        price: 60,
        priceType: "Hourly",
        buttonName: "Schedule Now",
      },
    ] as OnDemandService[],
    "Logistics Service": [
      {
        id: 5,
        title: "1 Ton Open Truck",
        status: "Available",
        vehicleType: "Truck",
        deliveryTime: "12-24 hours",
        route: "Dhaka → Khulna",
        weightLimit: "Up to 1k kg",
        deliveryFee: 37.0,
        buttonName: "Book Now",
      },
      {
        id: 6,
        title: "Fast Cargo Transport",
        status: "Available",
        vehicleType: "Truck",
        deliveryTime: "12-24 hours",
        route: "Dhaka → Khulna",
        weightLimit: "Up to 1k kg",
        deliveryFee: 37.0,
        buttonName: "Book Now",
      },
      {
        id: 7,
        title: "Express Transport Service",
        status: "Available",
        vehicleType: "Truck",
        deliveryTime: "12-24 hours",
        route: "Dhaka → Khulna",
        weightLimit: "Up to 1k kg",
        deliveryFee: 37.0,
        buttonName: "Book Now",
      },
      {
        id: 8,
        title: "Regional Ground Transport",
        status: "Available",
        vehicleType: "Truck",
        deliveryTime: "12-24 hours",
        route: "Dhaka → Khulna",
        weightLimit: "Up to 1k kg",
        deliveryFee: 37.0,
        buttonName: "Book Now",
      },
    ] as LogisticsService[],
    "Rental Services": [
      {
        id: 9,
        image: "/service/delivery-cover-truck.png",
        title: "Delivery Cover Truck",
        status: "Available",
        description:
          "Developing accurate and detailed garment patterns that determine the fit, shape, and c...",
        location: "Savar, Dhaka, Bangladesh",
        price: 370.0,
        priceType: "Day",
        buttonName: "Book Now",
      },
      {
        id: 10,
        image: "/service/2-ton-cover-truck.png",
        title: "2 Ton Cover Truck",
        status: "Available",
        description:
          "Developing accurate and detailed garment patterns that determine the fit, shape, and c...",
        location: "Savar, Dhaka, Bangladesh",
        price: 250.0,
        priceType: "Day",
        buttonName: "Book Now",
      },
    ] as RentalService[],
    Courses: [
      {
        id: 11,
        image: "/service/master-draping.png",
        title: "Master Draping and Shaping",
        instructor: "By Ron",
        instructorImage: "/service/instructor-ron.png",
        duration: "15 Weeks",
        lessons: 22,
        description:
          "Learn fashion draping and fabric shaping with confidence.",
        rating: 4.95,
        reviews: 57,
        price: 250.0,
        buttonName: "Enroll Now",
      },
      {
        id: 12,
        image: "/service/draft-custom-patterns.png",
        title: "Draft Custom Patterns by Steps",
        instructor: "By Ron",
        instructorImage: "/service/instructor-ron.png",
        duration: "15 Weeks",
        lessons: 22,
        description:
          "Learn fashion draping and fabric shaping with confidence.",
        rating: 4.95,
        reviews: 57,
        price: 200.0,
        buttonName: "Enroll Now",
      },
    ] as CourseService[],
  },
};

const MyService = () => {
  const [activeTab, setActiveTab] = useState<string>("On Demand Service");

  const currentServices = servicesData.services[activeTab] || [];

  return (
    <div className="w-full rounded-xl bg-white p-5 shadow">
      {/* Header */}
      <Header />

      <Divider />

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-3">
        {servicesData.tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-linear-to-r from-[#00BFFF] to-[#40E0D0] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="bg-gray-100 rounded-lg p-3">
        <div className="grid grid-cols-1 space-x-3 space-y-4 md:grid-cols-2">
          {currentServices.map((service) => {
            if (activeTab === "On Demand Service") {
              return (
                <OnDemandServiceCard
                  key={service.id}
                  service={service as OnDemandService}
                />
              );
            } else if (activeTab === "Logistics Service") {
              return (
                <LogisticsServiceCard
                  key={service.id}
                  service={service as LogisticsService}
                />
              );
            } else if (activeTab === "Rental Services") {
              return (
                <RentalServiceCard
                  key={service.id}
                  service={service as RentalService}
                />
              );
            } else if (activeTab === "Courses") {
              return (
                <CourseServiceCard
                  key={service.id}
                  service={service as CourseService}
                />
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Empty State */}
      {currentServices.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          No services available in this category
        </div>
      )}
    </div>
  );
};

export default MyService;

const Divider = () => <div className="my-4 h-px w-full bg-gray-300" />;

const Header = () => (
  <div className="flex items-center justify-between">
    <ProfileCardTitle title="My Service" />
    <button
      type="button"
      className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600"
    >
      Share <IoMdShare />
      <Link href="#" className="font-medium text-[#00BFFF]">
        See More
      </Link>
    </button>
  </div>
);

// On Demand Service Card
const OnDemandServiceCard = ({ service }: { service: OnDemandService }) => {
  return (
    <div className="flex h-104 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Image Section */}
      <div className="relative h-43 w-full shrink-0">
        <Image
          src={service.image}
          alt={service.title}
          layout="fill"
          objectFit="cover"
        />

        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-md hover:bg-gray-100">
          <IoMdShare className="text-gray-600" size={16} />
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-4">
        {/* Title */}
        <h3 className="mb-2 line-clamp-2 text-2xl font-semibold text-[#00131A]">
          {service.title}
        </h3>

        {/* Details (flexible area) */}
        <div className="flex-1 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-gray-500" />
            <span>
              Available {service.availableDay ? "Day" : "Time"} :{" "}
              <span className="font-medium text-[#00BFFF]">
                {service.availableDay || service.availableTime}
              </span>
            </span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <MapPin size={16} className="text-gray-500" />
              <span className="line-clamp-1">{service.location}</span>
            </div>

            <div className="flex items-center gap-1 text-gray-500 shrink-0">
              {service.locationType === "Onsite" ? (
                <Home size={16} />
              ) : (
                <Monitor size={16} />
              )}
              <span>{service.locationType}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" size={16} />
              <span className="font-semibold text-gray-800">
                {service.rating}
              </span>
              <span className="text-gray-500">({service.reviews})</span>
            </div>

            <div className="flex items-center gap-1 text-gray-600">
              <span>Price:</span>
              <span className="font-semibold text-gray-800">
                ${service.price}
              </span>
              <span>/ {service.priceType}</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="mt-3 w-full rounded-lg border-2 border-[#D8DBDF] py-2 font-medium text-gray-700 transition-all hover:border-transparent hover:bg-gradient-to-r hover:from-[#00BFFF] hover:to-[#40E0D0] hover:text-white">
          {service.buttonName}
        </button>
      </div>
    </div>
  );
};

// Logistics Service Card
const LogisticsServiceCard = ({ service }: { service: LogisticsService }) => {
  return (
    <div className="flex h-75 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      {/* Header */}
      <div className="mb-3 flex items-start justify-between">
        <h3 className="line-clamp-2 text-xl font-semibold text-[#00131A]">
          {service.title}
        </h3>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            {service.status}
          </span>
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100">
            <IoMdShare className="text-gray-600" size={16} />
          </button>
        </div>
      </div>

      {/* Body (Flexible area) */}
      <div className="flex-1 space-y-3 text-sm text-gray-600">
        <div className="bg-gray-100 p-0.5 rounded-lg w-20 text-center">
          <div className="flex items-center gap-2">
            <Truck size={16} className="text-gray-500" />
            <span>{service.vehicleType}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} className="text-gray-500" />
          <span>Delivery time: {service.deliveryTime}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-500" />
          <span className="line-clamp-1">{service.route}</span>
          <span className="ml-auto whitespace-nowrap">
            {service.weightLimit}
          </span>
        </div>

        <div>
          <span className="text-gray-700">Delivery Fee: </span>
          <span className="text-lg font-bold text-gray-900">
            ${service.deliveryFee.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Footer Button */}
      <button className="mt-3 w-full rounded-lg border-2 border-[#D8DBDF] py-2 font-medium text-gray-700 transition-all hover:border-transparent hover:bg-gradient-to-r hover:from-[#00BFFF] hover:to-[#40E0D0] hover:text-white">
        {service.buttonName}
      </button>
    </div>
  );
};

// Rental Service Card
const RentalServiceCard = ({ service }: { service: RentalService }) => {
  return (
    <div className="overflow-hidden h-106.5 rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-43 w-full">
        <Image
          src={service.image}
          alt={service.title}
          layout="fill"
          objectFit="cover"
        />
        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-md hover:bg-gray-100">
          <IoMdShare className="text-gray-600" size={16} />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-xl font-bold text-[#00131A]">{service.title}</h3>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            {service.status}
          </span>
        </div>

        <p className="mb-3 text-sm text-gray-600">{service.description}</p>

        <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} className="text-gray-500" />
          <span>{service.location}</span>
        </div>

        <div className="mb-4 text-left">
          <span className="text-2xl font-bold text-gray-900">
            ${service.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-600"> /{service.priceType}</span>
        </div>

        <button className="w-full rounded-lg border-2 border-[#D8DBDF] py-2 font-medium text-gray-700 transition-all hover:border-transparent hover:bg-linear-to-r hover:from-[#00BFFF] hover:to-[#40E0D0] hover:text-white">
          {service.buttonName}
        </button>
      </div>
    </div>
  );
};

// Course Service Card
const CourseServiceCard = ({ service }: { service: CourseService }) => {
  return (
    <div className="overflow-hidden h-106.5 rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-43 w-full">
        <Image
          src={service.image}
          alt={service.title}
          layout="fill"
          objectFit="cover"
        />
        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-md hover:bg-gray-100">
          <IoMdShare className="text-gray-600" size={16} />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-3 flex items-center gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Image
              src={service.instructorImage}
              alt={service.instructor}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{service.instructor}</span>
          </div>
          <span>{service.duration}</span>
          <span>{service.lessons} lesson</span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-[#00131A]">
          {service.title}
        </h3>

        <p className="mb-3 text-sm text-gray-600">{service.description}</p>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" size={16} />
            <span className="font-semibold text-gray-800">
              {service.rating}
            </span>
            <span className="text-sm text-gray-500">({service.reviews})</span>
          </div>
          <span className="text-2xl font-bold text-[#00BFFF]">
            ${service.price.toFixed(2)}
          </span>
        </div>

        <button className="w-full rounded-lg border-2 border-[#D8DBDF] py-2 font-medium text-gray-700 transition-all hover:border-transparent hover:bg-linear-to-r hover:from-[#00BFFF] hover:to-[#40E0D0] hover:text-white">
          {service.buttonName}
        </button>
      </div>
    </div>
  );
};
