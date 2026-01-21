"use client";

import { useState } from "react";
import { IoMdShare } from "react-icons/io";
import {
  Briefcase,
  MapPin,
  GraduationCap,
  Clock,
  Users,
  DollarSign,
  Calendar,
  Target,
} from "lucide-react";

// Types
interface Job {
  id: number;
  title: string;
  location: string;
  status: "Active" | "Closed" | "Pending";
  requirements: string;
  jobType: "Full Time" | "Part Time" | "Remote";
  experience: string;
  vacancy: number;
  salaryType: "Hourly" | "Monthly" | "Yearly";
  applicants: number;
  salary: number;
  deadline: string;
}

interface JobsData {
  tabs: string[];
  jobs: {
    [key: string]: Job[];
  };
}

// Sample Data
const jobsData: JobsData = {
  tabs: ["Full Time", "Part Time", "Remote"],
  jobs: {
    "Full Time": [
      {
        id: 1,
        title: "3d Designer (Garments CAD)",
        location: "Fatullah, Narayanganj, Bangladesh",
        status: "Active",
        requirements:
          "Bachelor's or Master's degree in Food Science, Food Technology, Chemistry, Applied Chemistry, Biotechnology, or related field",
        jobType: "Full Time",
        experience: "1 to 3 year",
        vacancy: 5,
        salaryType: "Monthly",
        applicants: 50,
        salary: 650,
        deadline: "30-Oct-2025",
      },
      {
        id: 2,
        title: "Cutting Mater (Garments)",
        location: "Fatullah, Narayanganj, Bangladesh",
        status: "Active",
        requirements:
          "Bachelor's or Master's degree in Food Science, Food Technology, Chemistry, Applied Chemistry, Biotechnology, or related field",
        jobType: "Full Time",
        experience: "1 to 3 year",
        vacancy: 5,
        salaryType: "Monthly",
        applicants: 50,
        salary: 650,
        deadline: "30-Oct-2025",
      },
      {
        id: 3,
        title: "Quality Control Inspector",
        location: "Savar, Dhaka, Bangladesh",
        status: "Active",
        requirements:
          "Bachelor's degree in Textile Engineering or related field with strong attention to detail",
        jobType: "Full Time",
        experience: "2 to 4 year",
        vacancy: 3,
        salaryType: "Monthly",
        applicants: 35,
        salary: 700,
        deadline: "15-Nov-2025",
      },
      {
        id: 4,
        title: "Pattern Maker",
        location: "Gazipur, Dhaka, Bangladesh",
        status: "Active",
        requirements:
          "Diploma or Bachelor's in Fashion Design with expertise in pattern making software",
        jobType: "Full Time",
        experience: "3 to 5 year",
        vacancy: 2,
        salaryType: "Monthly",
        applicants: 28,
        salary: 750,
        deadline: "25-Nov-2025",
      },
    ],
    "Part Time": [
      {
        id: 5,
        title: "Freelance Fashion Designer",
        location: "Dhaka, Bangladesh",
        status: "Active",
        requirements:
          "Portfolio showcasing fashion design work and proficiency in design software",
        jobType: "Part Time",
        experience: "1 to 2 year",
        vacancy: 10,
        salaryType: "Hourly",
        applicants: 45,
        salary: 25,
        deadline: "20-Nov-2025",
      },
      {
        id: 6,
        title: "Embroidery Specialist (Part Time)",
        location: "Mirpur, Dhaka, Bangladesh",
        status: "Active",
        requirements:
          "Experience in hand or machine embroidery with creative design skills",
        jobType: "Part Time",
        experience: "2 to 3 year",
        vacancy: 4,
        salaryType: "Hourly",
        applicants: 22,
        salary: 20,
        deadline: "10-Nov-2025",
      },
    ],
    Remote: [
      {
        id: 7,
        title: "Remote CAD Designer",
        location: "Remote, Bangladesh",
        status: "Active",
        requirements:
          "Proficiency in CAD software for garment design, strong portfolio required",
        jobType: "Remote",
        experience: "2 to 4 year",
        vacancy: 3,
        salaryType: "Monthly",
        applicants: 67,
        salary: 800,
        deadline: "05-Dec-2025",
      },
      {
        id: 8,
        title: "Textile Consultant (Remote)",
        location: "Remote, Worldwide",
        status: "Active",
        requirements:
          "Master's degree in Textile Engineering with consulting experience",
        jobType: "Remote",
        experience: "5 to 7 year",
        vacancy: 2,
        salaryType: "Monthly",
        applicants: 41,
        salary: 1200,
        deadline: "15-Dec-2025",
      },
    ],
  },
};

const Jobs = () => {
  const [activeTab, setActiveTab] = useState<string>("Full Time");

  const currentJobs = jobsData.jobs[activeTab] || [];

  return (
    <div className="w-full rounded-xl bg-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Jobs</h2>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#00BFFF] transition-colors">
          Share <IoMdShare size={18} />
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-3">
        {jobsData.tabs.map((tab) => (
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

      {/* Jobs List */}
      <div className="space-y-4">
        {currentJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Empty State */}
      {currentJobs.length === 0 && (
        <div className="py-16 text-center text-gray-500">
          <Briefcase className="mx-auto mb-4 h-16 w-16 text-gray-300" />
          <p className="text-lg">No jobs available in this category</p>
        </div>
      )}
    </div>
  );
};

export default Jobs;

// Job Card Component
const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
            <Briefcase className="text-gray-600" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-600">
              <MapPin size={14} className="text-gray-500" />
              <span>{job.location}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            {job.status}
          </span>
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <IoMdShare className="text-gray-600" size={16} />
          </button>
        </div>
      </div>

      {/* Requirements */}
      <div className="mb-4 flex items-start gap-2 text-sm text-gray-600">
        <GraduationCap size={16} className="mt-0.5 text-gray-500 shrink-0" />
        <p>{job.requirements}</p>
      </div>

      {/* Job Details Grid */}
      <div className="mb-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <Clock size={16} className="text-gray-500" />
          <span className="font-medium text-gray-900">{job.jobType}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={16} className="text-gray-500" />
          <span>Experience: </span>
          <span className="font-medium text-gray-900">{job.experience}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Target size={16} className="text-gray-500" />
          <span>Vacancy: </span>
          <span className="font-medium text-gray-900">{job.vacancy}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock size={16} className="text-gray-500" />
          <span className="font-medium text-gray-900">{job.salaryType}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Users size={16} className="text-gray-500" />
          <span className="font-medium text-gray-900">
            {job.applicants} People applied
          </span>
        </div>
      </div>

      {/* Salary */}
      <div className="mb-4 flex items-center gap-2 text-gray-700">
        <span>Salary:</span>
        <span className="text-lg font-bold text-gray-900">$ {job.salary}/</span>
        <span className="text-gray-600">{job.salaryType.toLowerCase()}</span>
      </div>

      {/* Footer - Apply Button and Deadline */}
      <div className="flex items-center gap-4">
        <button className="flex-1 w-full text-md rounded-lg border-2 border-[#D8DBDF] py-2 font-semibold text-gray-700 transition-all hover:border-transparent hover:bg-linear-to-r hover:from-[#00BFFF] hover:to-[#40E0D0] hover:text-white">
          Apply Now
        </button>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} className="text-gray-500" />
          <span>Deadline: {job.deadline}</span>
        </div>
      </div>
    </div>
  );
};
