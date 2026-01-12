import { HiOutlineHome } from "react-icons/hi";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { LuUsersRound, LuUserRound } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const topNav = [
  { label: "Home", icon: HiOutlineHome },
  { label: "Company", icon: PiBuildingOfficeLight },
  { label: "Timeline", icon: LuUsersRound },
  { label: "Profile", icon: LuUserRound },
];

const bottomNav = [
  { label: "Settings", icon: IoSettingsOutline },
  { label: "Support", icon: TfiHeadphoneAlt },
];

const ACTIVE_INDEX = 3;

const PrimaryNav = () => {
  return (
    <aside className="min-h-[80vh] h-full min-w-15 bg-white flex flex-col justify-between py-2.5 rounded-l-xl border-neutral-200 border-r">
      <nav className="flex flex-col items-center gap-5">
        {topNav.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === ACTIVE_INDEX;

          return (
            <button
              key={item.label}
              className="flex flex-col items-center gap-1 text-[10px] font-semibold transition-all"
            >
              <span
                className={`p-2 cursor-pointer rounded-lg transition-all
                  ${
                    isActive
                      ? "bg-[#00BFFF] text-white"
                      : "bg-neutral-50 text-neutral-500 hover:text-neutral-600"
                  }
                `}
              >
                <Icon className="text-2xl" />
              </span>

              <span
                className={` ${
                  isActive ? "text-[#00BFFF]" : "text-neutral-500"
                } `}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <nav className="flex flex-col items-center gap-5">
        {bottomNav.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="flex flex-col cursor-pointer items-center gap-1 text-[10px] font-semibold transition-all"
            >
              <span className="p-2 rounded-lg bg-neutral-100 text-neutral-500 hover:text-neutral-600 transition-all">
                <Icon className="text-2xl" />
              </span>

              <span className="text-neutral-500 ">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default PrimaryNav;
