"use client"
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./_component/AppSidebar";
import HeaderApp from "./_component/HeaderApp";
import { useAuthContext } from "../Provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function DashboardProvider({ children }) {

  const { user } = useAuthContext();
  const route = useRouter();

  useEffect(() => {
    user && CheckedUserAuthenticated()
  }, [!user]);

  const CheckedUserAuthenticated = () => {
    if (!user) {
      route.replace("/");
    }
    return null;
  };
  
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <HeaderApp />
          <div className="m-6">
            {children}
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}
export default DashboardProvider;
