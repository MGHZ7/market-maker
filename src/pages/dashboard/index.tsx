import { AdminDashboardLayout } from "@/components/dashboard/layout";
import { DashboardMain } from "@/components/dashboard/main";

export interface AdminHomeProps {
    title?: string;
};

export const DashboardHome = (props: AdminHomeProps) => {

    return (
        <AdminDashboardLayout>
            <DashboardMain />
        </AdminDashboardLayout>
    );
};

export default DashboardHome;