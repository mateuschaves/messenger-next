import React from "react";
import DesktopSideBar from "./DesktopSideBar";
import MobileFooter from "./MobileFooter";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full">
      <DesktopSideBar currentUser={currentUser!} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}
