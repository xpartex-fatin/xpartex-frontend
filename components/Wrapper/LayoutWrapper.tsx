"use client";
import { usePathname } from "next/navigation";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideOnAuth = pathname.startsWith("/auth");

return (
  <div className="min-h-screen flex flex-col">
    <div className={`${hideOnAuth ? "hidden lg:block" : ""}`}>
      <Navbar />
    </div>

    <main className="flex-1">{children}</main>

    <div className={`${hideOnAuth ? "hidden lg:block" : ""}`}>
      <Footer />
    </div>
  </div>
);

};
