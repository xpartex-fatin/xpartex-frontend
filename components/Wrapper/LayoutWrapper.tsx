"use client";
import { usePathname } from "next/navigation";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideOnAuth = pathname.startsWith("/auth");

  return (
    <>
      <div className={`${hideOnAuth ? "hidden lg:block" : ""}`}>
        <Navbar />
      </div>

      <div className=" flex flex-col justify-between">
        {children}
      </div>

      <div className={`${hideOnAuth ? "hidden lg:block" : ""}`}>
        <Footer />
      </div>
    </>
  );
};
