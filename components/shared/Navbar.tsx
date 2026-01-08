import Logo from "@/public/hooks/icon/Logo";
import LanguageDropdown from "./LanguageDropdown"; 

const Navbar = () => {
  return (
    <div className="w-full bg-white border-b border-neutral-200">
      <div className="flex items-center justify-between w-full px-4 py-4 max-w-380 mx-auto">
        <Logo />
        <LanguageDropdown />
      </div>
    </div>
  );
};

export default Navbar;
