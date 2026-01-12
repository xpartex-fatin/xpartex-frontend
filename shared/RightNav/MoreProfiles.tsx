import Image from "next/image";
import { TbUserPlus } from "react-icons/tb";

const MoreProfiles = () => {
  const users = [
    { id: 1, name: "Ataur Rahman", designation: "Product Head at Everywear Bangladesh Ltd." },
    { id: 2, name: "Sara Khan", designation: "Lead Designer at Creative Studio" },
    { id: 3, name: "John Doe", designation: "Marketing Manager at TechCorp International" },
    { id: 4, name: "Emily Smith", designation: "Senior Developer at NextGen Solutions" },
    { id: 5, name: "Sara Khan", designation: "Lead Designer at Creative Studio" },
    { id: 6, name: "John Doe", designation: "Marketing Manager at TechCorp International" },
  ];

  const truncate = (text: string, maxLength: number) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="bg-white top-24 max-h-[85vh] sticky rounded-xl shadow p-5 mt-5 w-full flex flex-col gap-4 overflow-auto">
      <p className="text-[#00BFFF] font-semibold">More profiles for you</p>
      {users.map((user) => (
        <div key={user.id} className="flex items-start gap-2">
          <Image
            src="/blankUser.webp"
            alt="User"
            width={40}
            height={40}
            className="rounded-full w-12 h-12"
          />
          <div className="flex flex-col items-start">
            <p className="font-medium">{user.name}</p>
            <p className="text-neutral-700 text-sm font-light">
              {truncate(user.designation, 20)}
            </p>
            <div className="border mt-2 flex items-center gap-1.5 text-neutral-700 border-neutral-400 rounded-full py-0.5 cursor-pointer px-4">
              <TbUserPlus />
              <p>Follow</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreProfiles;
  