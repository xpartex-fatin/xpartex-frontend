import Logo from "@/public/hooks/icon/Logo";
import LanguageDropdown from "./LanguageDropdown";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react"; // assuming you use lucide-react

const Navbar = () => {
  const pathname = usePathname()?.split("?")[0] || "";
  const hideFooterOnProfile = pathname.startsWith("/profile");
  const authRoutes = pathname.startsWith("/auth")

  return (
    <div className="w-full z-9999 fixed top-0 bg-white border-b border-neutral-200">
      <div className="flex items-center justify-between w-full px-4 py-4 max-w-380 mx-auto">
        <Logo />

        <div className="flex items-center gap-3">
          {!authRoutes && (
            <div className="relative">
              <Search
                className="absolute w- left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                size={22}
              />
              <input
                type="text"
                placeholder="Start search here..."
                className="pl-10 pr-3 py-2.5 lg:w-90 rounded-lg border border-neutral-400 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
          )}

          {!hideFooterOnProfile && <LanguageDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
