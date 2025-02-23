import DashboardProvider from "./provider";

function Dashboardlayout({ children }) {
    return (
        <DashboardProvider className="bg-slate-700">
            {children}
        </DashboardProvider>
    )

}
export default Dashboardlayout;
