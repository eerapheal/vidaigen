import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./_component/AppSidebar";
import HeaderApp from "./_component/HeaderApp";

function DashboardProvider({ children }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <div>
          <HeaderApp />
          {children}
        </div>
      </SidebarProvider>
    </div>
  )
}
export default DashboardProvider;
